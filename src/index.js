import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from "redux";
import {params/*,products*/} from './store/reducers';
import {Provider} from "react-redux";

//const reducer = combineReducers(params/*,products*/);
const store = createStore(params);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

