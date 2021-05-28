import * as React from "react";
import styled from "styled-components";
import Web3 from "web3";
import { Address } from "../types";

export interface AddAddressPageProps {
  web3: Web3;
  setAddressesData: React.Dispatch<React.SetStateAction<Array<Address> | []>>;
}

const AddAddressPage: React.FC<AddAddressPageProps> = (props) => {
  const [addressToBeAdded, setAddressToBeAdded] =
    React.useState<Address["name"]>("");

  const [addAddressError, setAddAddressError] = React.useState<string>("");

  const handleAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressToBeAdded(event?.currentTarget?.value);
  };

  // Validate address and attempt to add it
  const handleAttemptAddAddress = () => {
    // Clear previous errors
    setAddAddressError("");

    if (addressToBeAdded.length > 0) {
      // Check if the user-entered address is valid
      if (props.web3.utils.isAddress(addressToBeAdded)) {
        // Get address info
        props.web3.eth.getBalance(addressToBeAdded).then((val) => {
          // Persist address info in local state
          props.setAddressesData((prevState) => {
            return [
              ...prevState,
              {
                id: addressToBeAdded,
                name: addressToBeAdded,
                amountEth: props.web3.utils.fromWei(val, "ether"),
                amountUsd: "",
                dateAdded: new Date(),
              },
            ];
          });
        });

        return;
      }
    }

    setAddAddressError("Please enter a valid address.");
    return;
  };

  return (
    <AddWalletPromptWrapper>
      <AddAddressHeader>Enter an address to begin</AddAddressHeader>
      <AddAddressCopy>
        Add an address and you’ll be able to see the balance, transactions, and
        other details.
      </AddAddressCopy>
      <AddressInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleAddressInputChange(event);
        }}
      />
      <AddWalletButton onClick={() => handleAttemptAddAddress()}>
        Add
      </AddWalletButton>
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
