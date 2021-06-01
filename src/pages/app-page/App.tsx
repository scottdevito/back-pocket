import * as React from "react";
import styled from "styled-components";
import backPocketLogo from "../../assets/icons/backPocketLogo.svg";
import "../../App.css";
import { leftSidebarWidth } from "../../utils/consts";
import AddAddressPage from "../add-address-page";
import AddressDetailsPage from "../address-details-page";
import { Address, AddressesData } from "../../types";
import LeftSidebarAccount from "./left-sidebar-account";
import {
  useWalletState,
  Action,
} from "../../components/context/useWalletState";

const App: React.FC = (props): React.ReactElement => {
  const { state, dispatch } = useWalletState();

  const renderLeftSidebarAddress = (
    addressData: Address,
    dispatch: React.Dispatch<Action>
  ) => {
    return (
      <LeftSidebarAccount
        addressData={addressData}
        dispatch={dispatch}
        key={addressData.id}
      />
    );
  };

  return (
    <AppWrapper className="App">
      <LeftSidebar>
        <LogoWrapper>
          <img
            src={backPocketLogo}
            alt="Back Pocket Logo"
            style={{ width: " 46px" }}
          />
          <h3 style={{ margin: "0 0 0 15px" }}>Back Pocket</h3>
        </LogoWrapper>
        <LeftSidebarContentSection>
          {state.addresses.map((address: Address) => {
            return renderLeftSidebarAddress(address, dispatch);
          })}
        </LeftSidebarContentSection>
      </LeftSidebar>
      <RightSection>
        <Header routeParam={""} />
        <RightContentSection>
          {state.addresses?.length > 0 ? (
            <AddressDetailsPage />
          ) : (
            <AddAddressPage />
          )}
        </RightContentSection>
      </RightSection>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: ${leftSidebarWidth} 1fr;
  width: 100vw;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

type HeaderProps = {
  routeParam: string;
};
const Header = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-height: 70px;
  height: 70px;
  max-height: 70px;
  border-bottom: 1px solid #eceff1;
  padding: 0 15px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => {
    switch (props.routeParam) {
      case "wallet-detail":
        return "linear-gradient(269.92deg, #A6C0FE -75.68%, #F68084 130.99%)";

      default:
        return "transparent";
    }
  }};
`;

const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  min-width: ${leftSidebarWidth};
  max-width: ${leftSidebarWidth};
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  border-right: 1px solid #eceff1;
`;

const LeftSidebarContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 5;
  box-sizing: border-box;
  padding: 15px;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: ${`calc(100vw - ${leftSidebarWidth})`};
`;

const RightContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${`calc(100vw - ${leftSidebarWidth})`};
`;
