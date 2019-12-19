import { combineReducers } from "redux";
import {resultOptionReducer} from "./search/reducers";
import {moviesReducer} from "./fetchData/reducers";
import {routerReducer} from "react-router-redux";

export default combineReducers({
    routing : routerReducer,
    moviesReducer,
    resultOptionReducer
});

