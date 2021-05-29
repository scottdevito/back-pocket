import React, { FC } from "react";
import { ReactElement } from "react";
import { Address } from "../types";

type State = {
  addresses: Array<Address> | [];
};

type Action =
  | {
      type: "add_address";
      payload: {
        address: Address;
      };
    }
  | { type: "remove_address"; payload: { address: Address } };

type Dispatch = (action: Action) => void;

const UserStateContext = React.createContext<State | undefined>(undefined);
const UserDispatchContext =
  React.createContext<Dispatch | undefined>(undefined);

const userReducer = (state: State, action: Action): State => {
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

export const CurrentUserProvider: FC<{}> = ({ children }): ReactElement => {
  const userData: State = {
    addresses: [],
  };

  const [state, dispatch] = React.useReducer(userReducer, userData);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = (): State => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

const useUserDispatch = (): Dispatch => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("UserDispatchContext must be used within a UserProvider");
  }
  return context;
};

export const useCurrentUser = (): { state: State; dispatch: Dispatch } => {
  return { state: useUserState(), dispatch: useUserDispatch() };
};
