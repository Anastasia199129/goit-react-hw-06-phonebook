// import { createStore, combineReducers } from 'redux';
import contactsReduser from './contacts/contacts-redusers';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// const rootReduser = combineReducers({
//   contacts: contactsReduser,
// });

// const store = createStore(rootReduser, composeWithDevTools());

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
