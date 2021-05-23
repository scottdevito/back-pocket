import * as React from "react";
import styled from "styled-components";
import backPocketLogo from "./assets/icons/backPocketLogo.svg";
import "./App.css";
import { leftSidebarWidth } from "./utils/consts";

type Address = {
  name: string;
};

function App() {
  const [addressesData, setAddressesData] = React.useState<Array<Address> | []>(
    []
  );
  const [addressToBeAdded, setAddressToBeAdded] =
    React.useState<Address["name"]>("");

  const renderAddress = (addressData: Address) => {
    return;
    // return <Address addressData={addressData} />
  };

  const handleAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressToBeAdded(event?.currentTarget?.value);
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
          {addressesData.map((address: Address) => {
            renderAddress(address);
          })}
        </LeftSidebarContentSection>
      </LeftSidebar>
      <RightSection>
        <Header></Header>
        <RightContentSection>
          {addressesData?.length > 0 ? (
            <span />
          ) : (
            <AddWalletPromptWrapper>
              <AddAddressHeader>Enter an address to begin</AddAddressHeader>
              <AddAddressCopy>
                Add an address and you’ll be able to see the balance,
                transactions, and other details.
              </AddAddressCopy>
              <AddressInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleAddressInputChange(event);
                }}
              />
              <AddWalletButton>Add</AddWalletButton>
            </AddWalletPromptWrapper>
          )}
        </RightContentSection>
      </RightSection>
    </AppWrapper>
  );
}

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

const Header = styled.header`
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
`;

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
