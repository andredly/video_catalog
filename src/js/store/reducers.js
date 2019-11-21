import { combineReducers } from "redux";
import {resultOptionReducer} from "./search/reducers";
import {moviesReducer} from "./fetchData/reducers";

export default combineReducers({
    moviesReducer,
    resultOptionReducer
});
