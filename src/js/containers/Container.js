// import React, {Component} from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import FilmDetailsPage from "../pages/FilmDetailsPage";
// import SearchPage from "../pages/SearchPage";
// import {NotFoundPage} from "../pages/NoFoundPage";
//
//
// class Container extends Component {
//
//     render() {
//         return (
//             <div className="main">
//                 <Router>
//                     <Header/>
//                     <main role="main">
//                         <Switch>
//                             <Route exact path="/" component={HomePage}/>
//                             <Route path="/film/:id" component={FilmDetailsPage}/>
//                             <Route path="/search" component={SearchPage}/>
//                             <Route path="*" component={NotFoundPage}/>
//                         </Switch>
//                     </main>
//                 </Router>
//                 <Footer/>
//             </div>
//         )
//     }
// }
//
// export default Container;
