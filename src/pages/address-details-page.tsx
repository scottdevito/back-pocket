import * as React from "react";
import { AddressesData } from "../types";

export interface AddressDetailsPageProps {
  addressesData: AddressesData;
}

const AddressDetailsPage: React.FC<AddressDetailsPageProps> = (props) => {
  return (
    <div>
      <h1>Address Details Page</h1>
      <p>{props.addressesData[0].name}</p>
      <p>{`${props.addressesData[0].amountEth} Eth`}</p>
    </div>
  );
};

export default AddressDetailsPage;
