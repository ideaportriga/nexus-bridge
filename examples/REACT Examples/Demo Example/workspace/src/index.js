import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
import App from './App';

const createExample = (id, pm) => {
    const n19Helper = new window.SiebelAppFacade.N19Helper({ pm: pm });
    return ReactDOM.render(<App pm={pm} n19Helper={n19Helper} />, document.getElementById(id));
}

const unmountComponent = (id) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(id));
}

window.SiebReact = {
    createExample,
    unmountComponent
}