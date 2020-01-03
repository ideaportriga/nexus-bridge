import { NexusFactory } from "@ideaportriga/nexus-factory";
import React from "react";
import ReactDOM from "react-dom";
import { appletMap } from "./config";
import App from "./App";

const mountComponent = (id, appletName) => {
  // initialization
  NexusFactory(appletMap);

  ReactDOM.render(<App />, document.getElementById(id));
};

const unmountComponent = id => {
  if (document.getElementById(id) !== null) {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
  }
};

window.NEXUS_REACT_APP = { mountComponent, unmountComponent };
