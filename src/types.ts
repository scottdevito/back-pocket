export type Address = {
  id: string;
  name: string;
  dateAdded: Date;
  amountEth: string;
  amountUsd: string;
};

export type AddressesData = Array<Address> | [];
