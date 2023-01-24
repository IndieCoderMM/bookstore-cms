import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    title: 'One Thing',
    author: 'Gary Keller',
    progress: 80,
  },
  {
    id: 1, title: 'Atomic Habits', author: 'James Clear', progress: 67,
  },
  {
    id: 2, title: 'Educated', author: 'Tara Westover', progress: 34,
  },
];
let currentId = initialState.length;
const booksSlice = createSlice({
  name: 'books',
  initialState,
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
