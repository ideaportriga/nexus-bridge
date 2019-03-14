import React from "react";
import ReactDOM from "react-dom";
import { config } from "./config";
import n19Factory from "./n19Factory";
import App from "./App";

const mountComponent = (id, name) => {
  // Use this boilerplate for multiple applets
  // const appletMap = window.SiebelApp.S_App.GetActiveView().GetAppletMap();
  // for (const applet in appletMap) {
  //   const appletName = appletMap[applet].GetName();
  //   n19Factory(appletName, appletName);
  // }

  // N19 must be re-initialized on every mount
  for (const name in config) {
    const n19Helper = n19Factory(name, config[name]);
    console.log(`N19Helper instance created...`, n19Helper.appletName);
  }

  ReactDOM.render(<App />, document.getElementById(id));
};

const unmountComponent = id => {
  if (document.getElementById(id) !== null) {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
  }
};

window.SiebReact = { mountComponent, unmountComponent };
