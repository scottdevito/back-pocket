import React from "react";
import styled from "styled-components";
import backPocketLogo from "./assets/icons/backPocketLogo.svg";
import "./App.css";

function App() {
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
          <AddWalletPromptWrapper>
            <AddWalletCopy>
              Get started by adding or creating a wallet.
            </AddWalletCopy>
            <AddWalletButton>Add</AddWalletButton>
          </AddWalletPromptWrapper>
        </LeftSidebarContentSection>
      </LeftSidebar>
      <Header>Log out</Header>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;

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
  width: 100%;
  border-bottom: 1px solid #eceff1;
  padding: 0 15px;
`;

const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  min-width: 240px;
  max-width: 240px;
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

const AddWalletCopy = styled.p`
  text-align: center;
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
