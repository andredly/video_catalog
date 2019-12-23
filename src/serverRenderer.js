import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import ContainerSsr from './js/containers/ContainerSsr';
import '@babel/polyfill';
import configureStore from './js/store/store';
import 'source-map-support/register';
import renderHtml from './render';
import ErrorBoundary from './js/containers/error/ErrorBoundary';
import routes from './js/containers/routes';

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const promises = routes.reduce((acc, route) => {
      if (matchPath(req.url.split('?')[0], route) && route.component && route.component.initialAction) {
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction(req))));
      }
      return acc;
    }, []);


    Promise.all(promises)
      .then(() => {
        const context = {};

        const appWithRouter = () => (
                    <Provider store={store}>
                        <StaticRouter location={req.url} context={context}>
                            <ErrorBoundary>
                                <ContainerSsr/>
                            </ErrorBoundary>
                        </StaticRouter>
                    </Provider>
        );
        ReactDOMServer.renderToString(appWithRouter());

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }
        const preloadedState = store.getState();
        const content = ReactDOMServer.renderToString(appWithRouter());
        res.status(200).send(renderHtml(content, preloadedState));
      })
      .catch((error) => {
        console.log('Promise error at server', error);
      });
  };
}
