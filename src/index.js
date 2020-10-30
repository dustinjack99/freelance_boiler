  
import 'react-hot-loader/patch';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import "./index.scss";

import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>, 
    document.getElementById("root"));
}

render(App)

if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextRootContainer = require('./components/App').default;
      render(<NextRootContainer />);
    })
  }