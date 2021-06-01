import * as React from "react";
import Web3 from "web3";
import { AddressesData } from "../types";
import { useWalletState } from "../components/context/useWalletState";

export interface AddressDetailsPageProps {}

const AddressDetailsPage: React.FC<AddressDetailsPageProps> = (props) => {
  const { state } = useWalletState();
  // TODO Once we have route params, take the address id from the route and persist to state
  // using the attemptAddAddress util function
  React.useEffect(() => {
    // Get address id from route params
    // const addressId = props.params.addressId;
    // const {addressId} = props.params;
    //
    // Persist address id and related info to context
    //   // Validate address and attempt to add it
    // const { attemptAddAddress } = React.useContext(Web3Context);
  });

  const getTransactions = async () => {
    // Get transactions
  };

  return (
    <div>
      <h1>Address Details Page</h1>
      <p>{state.addresses[0].name}</p>
      <p>{`${state.addresses[0].amountEth} Eth`}</p>
    </div>
  );
};

export default AddressDetailsPage;
