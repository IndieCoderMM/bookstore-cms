import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'UNDER_CONSTRUCTION',
  },
});

const { actions, reducer } = categorySlice;
export const { checkStatus } = actions;
export default reducer;
