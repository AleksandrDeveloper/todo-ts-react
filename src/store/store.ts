import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducer/rootReducer';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';

export default createStore(RootReducer, applyMiddleware(logger, Thunk))