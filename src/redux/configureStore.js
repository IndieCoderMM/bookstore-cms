import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import commentReducer from './comments/comments';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
    comments: commentReducer,
  },
});
