import React from "react";
import styled from "styled-components";
import backPocketLogo from "./assets/icons/backPocketLogo.svg";
import "./App.css";

function App() {
  return (
    <AppWrapper className="App">
      <header className="App-header">
        <img src={backPocketLogo} alt="Back Pocket Logo" />
        Back Pocket
      </header>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
