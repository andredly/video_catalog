import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../components/Header";
import SearchContainer from "./SearchContainer";
import ResultPanel from "../components/ResultPanel";
import ResultsBody from "./ResultsBody";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello world"
        };
    }

    render() {
        const {title} = this.state;
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <Header/>
                    <main role="main">
                        <SearchContainer/>
                        <ResultPanel/>
                        <ResultsBody/>
                        <Footer/>
                    </main>
                </React.Fragment>
            </ErrorBoundary>
        )
    }
}

export default Container;
