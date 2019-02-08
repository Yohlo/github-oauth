import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import dataService from './services';
import routes from './routes';
import './index.css';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(dataService));
window.store = store;

render(
  <Provider store={store}>
    {store.getState().loading ? <p>loading...</p>
      : <HashRouter children={routes} />  
    }
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();