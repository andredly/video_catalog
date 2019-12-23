import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@babel/polyfill';
import routes from './routes';


function ContainerSsr() {
  return (
        <div className="main">
            <Header/>
            <main role="main">
                {renderRoutes(routes)}
            </main>
            <Footer/>
        </div>
  );
}

export default ContainerSsr;
