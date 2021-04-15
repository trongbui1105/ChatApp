import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import reducer from './store/reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'react-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// import "antd/dist/antd.css";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(app, document.getElementById("app"));
