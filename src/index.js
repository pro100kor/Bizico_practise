import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import SettingsContentProvider from "./components/SettingsContentProvider.js";

ReactDOM.render(
  <SettingsContentProvider>
    <App />
  </SettingsContentProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
