import { createSlice } from '@reduxjs/toolkit';

interface AppState {
     ShowSuccess?:any
  }
const initialState:AppState = {};
const globalState = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showSuccess: (state, action) => {
      state.ShowSuccess = action.payload;
    },
  },
});

export const {
  showSuccess,
} = globalState.actions;
export default globalState.reducer;
