import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../components/Header";
import SearchContainer from "./SearchContainer";
import ResultPanel from "./ResultPanel";
import ResultsBody from "../components/ResultBody/ResultsBody";
import Footer from "../components/Footer";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <main role="main">
                    <SearchContainer/>
                    <ResultPanel/>
                    <ResultsBody/>
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Container;
