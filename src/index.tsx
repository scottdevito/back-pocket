import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/app-page/App";
import reportWebVitals from "./reportWebVitals";
import { Web3Provider } from "./components/context/useWeb3";
import { WalletStateProvider } from "./components/context/useWalletState";

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <WalletStateProvider>
        <App />
      </WalletStateProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
