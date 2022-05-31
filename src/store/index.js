//store 제작하고 리턴
import {applyMiddleware, createStore} from 'redux';
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(composeWithDevTools,sagaMiddleware))

sagaMiddleware.run(rootSaga)