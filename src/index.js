import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import GetResult from './components/GetResult';
import rootReducer from './reducers/rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';

// initialState
const initialState = {}

const epicMiddleware = createEpicMiddleware(rootEpic());

// Create store
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        epicMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <GetResult />
        </div>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
