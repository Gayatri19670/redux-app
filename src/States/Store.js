import { applyMiddleware, createStore } from "redux";
import reducers from './Reducers'
import thunk from "redux-thunk";




export const Store = createStore(reducers, {}, applyMiddleware(thunk))