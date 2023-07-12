import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlowProvider } from "react-flow-renderer";

import "./styles.css";

import steps from './campaign';
import Flow from "./components/Flow";

const App = () => {

  return (
    <ReactFlowProvider>
     <Flow mode="profile" steps={steps} />
    </ReactFlowProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
