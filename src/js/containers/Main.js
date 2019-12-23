import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './error/ErrorBoundary';
import Container from './Container';
import { persistor, store } from '../store/store';
import '@babel/polyfill';

export const BASE_URL = 'https://reactjs-cdp.herokuapp.com';
export const MOVIES_PATH = '/movies';

function Main() {
  return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ErrorBoundary>
                        <Container/>
                    </ErrorBoundary>
                </PersistGate>
            </Provider>
  );
}

export default Main;
