import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import FilmDetailsPage from "../pages/FilmDetailsPage";
import SearchPage from "../pages/SearchPage";

class Container extends Component {

    render() {
        return (
            <div className="main">
                <Router>
                    <Header/>
                    <main role="main">
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/film/:id" component={FilmDetailsPage}/>
                        <Route path="/search" component={SearchPage}/>
                    </main>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default Container;
