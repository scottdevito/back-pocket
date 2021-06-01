import * as React from "react";
import styled from "styled-components";
import { Address } from "../types";
import { Web3Context } from "../components/context/useWeb3";
import { useWalletState } from "../components/context/useWalletState";

export interface AddAddressPageProps {}

const AddAddressPage: React.FC<AddAddressPageProps> = (props) => {
  const { dispatch } = useWalletState();

  const [addressToBeAdded, setAddressToBeAdded] =
    React.useState<Address["id"]>("");

  const [addAddressError, setAddAddressError] = React.useState<string>("");

  const handleAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressToBeAdded(event?.currentTarget?.value);
  };

  // Validate address and attempt to add it
  const { attemptAddAddress } = React.useContext(Web3Context);

  const handleAttemptAddAddress = async (addressToBeAdded: Address["id"]) => {
    const addressInfoFromWeb3 = await attemptAddAddress(
      addressToBeAdded,
      setAddAddressError
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

  return (
    <AddWalletPromptWrapper>
      <AddAddressHeader>Enter an address to begin</AddAddressHeader>
      <AddAddressCopy>
        Add an address and you’ll be able to see the balance, transactions, and
        other details.
      </AddAddressCopy>
      <AddAddressForm
        onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => {
          event.preventDefault();
        }}
      >
        <AddressInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            handleAddressInputChange(event);
          }}
        />
        {/* TODO: Debounce AddWalletButton */}
        <AddWalletButton
          onClick={() => handleAttemptAddAddress(addressToBeAdded)}
        >
          Add
        </AddWalletButton>
      </AddAddressForm>
      <AddAddressErrorWrapper>
        {!!addAddressError ? addAddressError : null}
      </AddAddressErrorWrapper>
    </AddWalletPromptWrapper>
  );
};

export default AddAddressPage;

const AddWalletPromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const AddAddressHeader = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin: 10px 0;
`;

const AddAddressCopy = styled.p`
  text-align: center;
  max-width: 355px;
  margin: 0 0 20px 0;
`;

const AddressInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  font-size: 18px;

  &:focus {
    border: 3px solid black;
  }
`;

const AddWalletButton = styled.button`
  background-color: #ff7777;
  color: #fff;
  border-radius: 5px;
  padding: 15px 65px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  max-width: 160px;

  &:hover {
    cursor: pointer;
  }
`;

const AddAddressErrorWrapper = styled.div`
  color: red;
  font-weight: 700;
  min-height: 75px;
  margin-top: 40px;
`;

const AddAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
