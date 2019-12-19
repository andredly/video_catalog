import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import FilmDetailsPage from '../pages/FilmDetailsPage';
import SearchPage from '../pages/SearchPage';
import NotFoundPage from '../pages/NoFoundPage';


function Container() {
  return (
            <div className="main">
                <Router>
                    <Header/>
                    <main role="main">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/film/:id" component={FilmDetailsPage}/>
                            <Route path="/search" component={SearchPage}/>
                            <Route path="*" component={NotFoundPage}/>
                        </Switch>
                    </main>
                </Router>
                <Footer/>
            </div>
  );
}

export default Container;
