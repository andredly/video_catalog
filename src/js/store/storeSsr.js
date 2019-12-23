import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['container']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);
//
// export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
// export const persistor = persistStore(store);
// persistor.purge();
// persistor.pause();


const configureStore = (preloadedState) => createStore(rootReducers, preloadedState, applyMiddleware(thunk));

export default configureStore;
