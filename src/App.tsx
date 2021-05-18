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
        <LeftSidebarContentSection></LeftSidebarContentSection>
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
  flex: 1;
`;
