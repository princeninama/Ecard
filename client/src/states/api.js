export const server = "http://localhost:8000";

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import counterReducer from './counter/counter';
import  userReducer  from './counter/user';
// import postReducer from './reducer/index'; // Uncomment and use if you have more reducers

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  // post: postReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Export the persistor
export const persistor = persistStore(store);
