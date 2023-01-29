import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CommentService from '../../services/CommentService';

export const addNewComment = createAsyncThunk(
  'comments/add',
  async ({ id, username, comment }) => {
    try {
      await CommentService.post({ id, username, comment });
      return { id, username, comment };
    } catch (err) {
      return err.message;
    }
  },
);

export const getComment = createAsyncThunk('comments/get', async (id) => {
  try {
    const res = await CommentService.get(id);
    return { id, comments: res.data };
  } catch (err) {
    return err.message;
  }
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(getComment.fulfilled, (state, action) => {
        const { id, comments } = action.payload;
        const existing = state.find((c) => Object.keys(c).includes(id));
        if (existing) {
          existing.comments = comments;
        } else {
          state.push({ [id]: { comments } });
        }
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        const { id, comment, username } = action.payload;
        const existing = state.find((c) => Object.keys(c).includes(id));
        if (existing) {
          existing[id].comments.push({ comment, username });
        } else state.push({ [id]: { comments: [{ username, comment }] } });
      });
  },
});

export default commentsSlice.reducer;
