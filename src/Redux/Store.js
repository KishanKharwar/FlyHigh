import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

export default createStore(RootReducer, applyMiddleware(thunk))