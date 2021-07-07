import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
