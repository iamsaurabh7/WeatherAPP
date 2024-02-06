import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import locationReducer from "./weatherApp/weather.reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  location: locationReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
