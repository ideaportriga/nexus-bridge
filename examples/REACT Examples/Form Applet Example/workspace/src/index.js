import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import Applet from "./api/applet-state";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./style/theme";

// Connect Siebel API to React By Context and Parent State

let n19Helper;

const createExample = (id, pm) => {
  n19Helper = new window.SiebelAppFacade.N19Helper({
    pm: pm
  });

  return ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Applet n19Helper={n19Helper}>
        <App />
      </Applet>
    </MuiThemeProvider>,
    document.getElementById(id)
  );
};

const unmountComponent = id => {
  ReactDOM.unmountComponentAtNode(document.getElementById(id));
  n19Helper = null;
};

window.SiebReact = {
  createExample,
  unmountComponent
};
