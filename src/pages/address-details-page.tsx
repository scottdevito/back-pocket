import * as React from "react";
import { Address } from "../types";
import { useWalletState } from "../components/context/useWalletState";
import { Web3Context } from "../components/context/useWeb3";
import { useParams, Link } from "react-router-dom";

export interface AddressDetailsPageProps {}

const AddressDetailsPage: React.FC<AddressDetailsPageProps> = (props) => {
  const { state, dispatch } = useWalletState();

  // Keep track of errors when attempting to get address info
  const [addAddressError, setAddAddressError] =
    React.useState<string | boolean>(false);

  let { addressIdFromUrl } = useParams<{ addressIdFromUrl: string }>();
  const { attemptAddAddress } = React.useContext(Web3Context);

  const handleAttemptAddAddress = async (addressToBeAdded: Address["id"]) => {
    const addressInfoFromWeb3 = await attemptAddAddress(
      addressToBeAdded,
      setAddAddressError,
      state.addresses
    );

    // Persist address info to WalletState context
    !!addressInfoFromWeb3 &&
      dispatch({
        type: "add_address",
        payload: {
          address: addressInfoFromWeb3,
        },
      });
  };

  const getTransactions = async () => {
    // Get transactions
    console.log("getTransactions");
  };

  // Once we have route params, take the address id from the route and attempt to persist to state
  React.useEffect(() => {
    handleAttemptAddAddress(addressIdFromUrl).then(() => {
      getTransactions();
    });
  }, [addressIdFromUrl]);

  return (
    <div>
      {!!addAddressError ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "red", fontWeight: 700 }}>
            Error - Address not found
          </h2>
          <Link to="/">Click here to add a new address</Link>
        </div>
      ) : (
        <h1>Address Details Page</h1>
      )}

      {/* <p>{state.addresses[0].name}</p>
      <p>{`${state.addresses[0].amountEth} Eth`}</p> */}
      {/* <p>{state.addresses[0].name}</p>
      <p>{`${state.addresses[0].amountEth} Eth`}</p> */}
    </div>
  );
};

export default AddressDetailsPage;
