import React, { FC } from "react";
import { ReactElement } from "react";
import { Address } from "../../types";

// Context to keep track of the addresses that the user has added so far

type State = {
  addresses: Array<Address> | [];
};

export type Action =
  | {
      type: "add_address";
      payload: {
        address: Address;
      };
    }
  | { type: "remove_address"; payload: { address: Address } };

type Dispatch = (action: Action) => void;

const walletStateContext = React.createContext<State | undefined>(undefined);
const WalletStateDispatchContext =
  React.createContext<Dispatch | undefined>(undefined);

const walletStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add_address":
      return {
        ...state,
        addresses: [...state.addresses, action.payload.address],
      };
    case "remove_address":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address: Address) => address.id !== action.payload.address.id
        ),
      };
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

export const WalletStateProvider: FC<{}> = ({ children }): ReactElement => {
  const walletData: State = {
    addresses: [],
  };

  const [state, dispatch] = React.useReducer(walletStateReducer, walletData);

  return (
    <walletStateContext.Provider value={state}>
      <WalletStateDispatchContext.Provider value={dispatch}>
        {children}
      </WalletStateDispatchContext.Provider>
    </walletStateContext.Provider>
  );
};

const useWalletStateState = (): State => {
  const context = React.useContext(walletStateContext);
  if (context === undefined) {
    throw new Error(
      "useWalletStateContext must be used within a Wallet State provider"
    );
  }
  return context;
};

const useWalletStateDispatch = (): Dispatch => {
  const context = React.useContext(WalletStateDispatchContext);
  if (context === undefined) {
    throw new Error(
      "WalletStateDispatchContext must be used within a Wallet State provider"
    );
  }
  return context;
};

export const useWalletState = (): { state: State; dispatch: Dispatch } => {
  return { state: useWalletStateState(), dispatch: useWalletStateDispatch() };
};
