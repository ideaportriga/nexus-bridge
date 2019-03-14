import React from "react";
import ReactDOM from "react-dom";
import { appletMap } from "./config";
import n19Factory from "./n19Factory";
import App from "./App";

const mountComponent = (id, appletName) => {
  // N19 initialization
  n19Factory(appletMap);

  // Or initialize dinamically from PR
  // n19Factory({default: appletName});

  ReactDOM.render(<App />, document.getElementById(id));
};

const unmountComponent = id => {
  if (document.getElementById(id) !== null) {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
  }
};

window.SiebReact = { mountComponent, unmountComponent };
