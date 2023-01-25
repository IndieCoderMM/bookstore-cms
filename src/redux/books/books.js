import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '0',
    title: 'One Thing',
    author: 'Gary Keller',
    progress: 80,
  },
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    progress: 67,
  },
  {
    id: '2',
    title: 'Educated',
    author: 'Tara Westover',
    progress: 34,
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        progress: 50,
      },
    ],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

const { actions, reducer } = booksSlice;
export const { addBook, removeBook } = actions;
export default reducer;
