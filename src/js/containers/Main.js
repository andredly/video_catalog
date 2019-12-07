import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from "./error/ErrorBoundary";
import Container from "./Container";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import { persistor, store } from "../store/store";
import "@babel/polyfill";

export const BASE_URL = "https://reactjs-cdp.herokuapp.com";
export const MOVIES_PATH = "/movies";

class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ErrorBoundary>
                        <Container/>
                    </ErrorBoundary>
                </PersistGate>
            </Provider>
        )
    }
}

export default Main;
