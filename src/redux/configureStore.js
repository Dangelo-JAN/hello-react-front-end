import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const middleWare = applyMiddleware(thunk, logger);

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
  middleWare,
});

export default store;
