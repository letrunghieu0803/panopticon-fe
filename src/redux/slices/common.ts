import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: true,
  },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { updateIsLoading } = commonSlice.actions;
const commonReducer = commonSlice.reducer;
export default commonReducer;
