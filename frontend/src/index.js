import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import reducer  from './store/reducers'
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const store= createStore(reducer,applyMiddleware(thunk));

const app= (
    <Provider store={store}>
        <App/>
    </Provider>
)




ReactDOM.render(app, document.getElementById('root'));
