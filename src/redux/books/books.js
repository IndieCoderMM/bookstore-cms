import { createSlice } from '@reduxjs/toolkit';

let currentId = 0;
const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      currentId += 1;
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: currentId,
          progress: 50,
        },
      ];
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

const { actions, reducer } = booksSlice;
export const { addBook, removeBook } = actions;
export default reducer;
