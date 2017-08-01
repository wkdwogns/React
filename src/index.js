import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import thunk from "redux-thunk";


import {  routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducer/reducers' // Or wherever you keep your reducers

import App from './App';
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunk,middleware)
)

ReactDOM.render(
	<Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>
	,
	document.getElementById('root')
);
