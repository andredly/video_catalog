import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hydrate } from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import ContainerSsr from '../js/containers/ContainerSsr';
import configureStore from '../js/store/store';
import ErrorBoundary from '../js/containers/error/ErrorBoundary';

const store = configureStore(window.__PRELOADED_STATE_);

const root = (
    <Provider store={store}>
        <Router>
            <ErrorBoundary>
                <ContainerSsr/>
            </ErrorBoundary>
        </Router>
    </Provider>
);

hydrate(root, document.querySelector('#app'));
