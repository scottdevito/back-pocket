import * as React from "react";
import Web3 from "web3";
import { AddressesData } from "../types";

export interface AddressDetailsPageProps {
  web3: Web3;
  addressesData: AddressesData;
}

const AddressDetailsPage: React.FC<AddressDetailsPageProps> = (props) => {
  const getTransactions = async () => {
    // Get transactions
  };

  return (
    <div>
      <h1>Address Details Page</h1>
      <p>{props.addressesData[0].name}</p>
      <p>{`${props.addressesData[0].amountEth} Eth`}</p>
    </div>
  );
};

export default AddressDetailsPage;
