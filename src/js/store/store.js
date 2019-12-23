import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['container'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
persistor.purge();
persistor.pause();
