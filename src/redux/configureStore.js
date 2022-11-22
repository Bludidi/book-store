/* eslint-disable */ 
import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books';
import { categoryReducer } from './categories';

export default configureStore({
  reducer: {
    updateBooks: booksReducer,
    updateCategory: categoryReducer,
  },
});
