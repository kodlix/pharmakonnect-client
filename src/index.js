import React from 'react';
import ReactDOM from 'react-dom';
// import {Route,} from "react-router";

import configureStore, { history } from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// import ModalContainer from './components/ModalContainer';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";


const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
        <Route component={App} />
        {/* <Route component={ModalContainer} /> */}
      </ConnectedRouter>
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

