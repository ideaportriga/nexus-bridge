import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let n19Helper;

const createExample = (id, pm) => {
  n19Helper = new window.SiebelAppFacade.N19Helper({ pm: pm });
  ReactDOM.render(<App n19Helper={n19Helper} />, document.getElementById(id));
}

const unmountComponent = (id) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(id));
  n19Helper = null;
}

window.SiebReact = { createExample, unmountComponent }
