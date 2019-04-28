import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {withRouter} from 'react-router';


const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducer,middleware);

ReactDOM.render(
<Provider store={store}>
    <withRouter><App /></withRouter>
</Provider>, document.getElementById('root'));

