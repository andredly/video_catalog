import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from "./error/ErrorBoundary";
import Container from "./Container";
import rootReducers from "../store/reducers"
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";


export const BASE_URL = "https://reactjs-cdp.herokuapp.com";
export const MOVIES_PATH = "/movies";
export const MOVIE_PATH = "/{id}";
export const QUERY_PARAMS = "";


const store = createStore(rootReducers, applyMiddleware(thunk));


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <Container/>
                </ErrorBoundary>
            </Provider>
        )
    }
}

export default Main;
