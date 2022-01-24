import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const formReducer = (state = {
        feeling: '',
        sleep: '',
        meals: '',
        journal: '',
    }, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return state = {...state, feeling: action.payload}
        case 'ADD_SLEEP':
            return state = {...state, sleep: action.payload}
        case 'ADD_MEALS':
            return state = {...state, meals: action.payload}
        case 'ADD_JOURNAL':
            return state = {...state, journal: action.payload}
    }
    return state;
}

const store = createStore(
    combineReducers({
        formReducer
    }),
        applyMiddleware(logger)
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
