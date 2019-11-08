import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from "../components/ErrorBoundary";
import Container from "./Container";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ErrorBoundary>
                <Container/>
            </ErrorBoundary>
        )
    }
}

export default Main;
