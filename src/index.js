import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import { fetchRepo } from './redux/actions';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root store={store} />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Log the initial state
console.log("initial state: ", store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => console.log("change state: ", store.getState()));

// Dispatch some actions
//store.dispatch(fetchRepo('Alamofire'));
