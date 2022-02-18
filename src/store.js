import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from './reducers/loginReducer'

const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))