import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';

const rootReducer = combineReducers({ books: bookReducer });

const configStore = () => configureStore({ reducer: rootReducer });

export default configStore;
