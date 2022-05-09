import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";

const reducers = combineReducers({
  amount: AmountReducer,
});

export default reducers;