import * as React from "react";
import Web3 from "web3";
import { Address } from "../../types";

// This context provides an instance of Web3 to be used throughout the app
// We also provide reusable functions that interact with Web 3 in here

const { REACT_APP_INFURA_PROJECT_URL } = process.env;

const web3 = new Web3(
  new Web3.providers.HttpProvider(`${REACT_APP_INFURA_PROJECT_URL}`)
);

// Reusable function to attempt to add an address to useWalletState context
const attemptAddAddress = async (
  addressIdToBeAdded: Address["id"],
  setAddAddressError: React.Dispatch<React.SetStateAction<string>>
): Promise<Address | null> => {
  // Clear previous errors
  setAddAddressError("");

  if (addressIdToBeAdded.length > 0) {
    // Check if the user-entered address is valid
    try {
      if (web3.utils.isAddress(addressIdToBeAdded)) {
        // Get address info from Web3
        const getWeb3Info = await web3.eth
          .getBalance(addressIdToBeAdded)
          .then((addressReturn) => {
            // Build address with data we got back from Web3
            const newAddress: Address = {
              id: addressIdToBeAdded,
              name: addressIdToBeAdded,
              amountEth: web3.utils.fromWei(addressReturn, "ether"),
              amountUsd: "",
              dateAdded: new Date(),
            };

            return newAddress;
          });

        return getWeb3Info;
      }
    } catch (error) {
      console.error(error);
    }
  }
  setAddAddressError("Please enter a valid address");
  return null;
};

// Context
export const Web3Context = React.createContext({
  web3: web3,
  attemptAddAddress: attemptAddAddress,
});

// Provider
export const Web3Provider: React.FC = ({ children }) => {
  return (
    <Web3Context.Provider
      value={{
        web3: web3,
        attemptAddAddress: attemptAddAddress,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
