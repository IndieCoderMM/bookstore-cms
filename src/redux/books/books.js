import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookStoreService from '../../services/BookstoreService';

export const createBook = createAsyncThunk('books/create', async (book) => {
  const {
    id, author, title, category,
  } = book;
  try {
    await BookStoreService.create({
      id,
      author,
      title,
      category,
    });
    return book;
  } catch (err) {
    return err.message;
  }
});

export const deleteBook = createAsyncThunk('books/delete', async (id) => {
  await BookStoreService.remove(id);
  return { id };
});

export const getAllBooks = createAsyncThunk('books/getAll', async () => {
  try {
    const res = await BookStoreService.getAll();
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(createBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        const bookIds = Object.keys(action.payload);
        bookIds.forEach((id) => {
          const book = {
            id,
            author: action.payload[id][0].author,
            title: action.payload[id][0].title,
            category: action.payload[id][0].category,
            progress: 0,
          };
          state.push(book);
        });
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.find((book) => book.id === action.payload.id);
        state.splice(index, 1);
      });
  },
});

const { reducer } = booksSlice;
export default reducer;
