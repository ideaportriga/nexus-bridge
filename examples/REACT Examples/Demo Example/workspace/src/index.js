import React from "react";
import ReactDOM from "react-dom";
import { config } from "./config";
import n19Factory from "./n19Factory";
import App from "./App";

const mountComponent = (id, appletName) => {
  // N19 instance initialization from PR 
  const n19Helper = n19Factory("default", appletName);
  console.log(`N19Helper instance created...`, n19Helper.appletName);

  // Or use the custom config with mappings
  // for (const appletName in config) {
  //   n19Factory(appletName, config[appletName]);
  // }

  // Or use this boilerplate to map multiple applets automatically
  // const appletMap = window.SiebelApp.S_App.GetActiveView().GetAppletMap();
  // for (const appletName in appletMap) {
  //   n19Factory(appletName, appletName);
  // }

  ReactDOM.render(<App />, document.getElementById(id));
};

const unmountComponent = id => {
  if (document.getElementById(id) !== null) {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
  }
};

window.SiebReact = { mountComponent, unmountComponent };
