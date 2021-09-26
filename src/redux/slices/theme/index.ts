import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import * as themes from '../../../theme';
import { RootState } from '../../store';

const LOCAL_THEME_KEY = 'THEME';

type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: (localStorage.getItem(LOCAL_THEME_KEY) as ThemeMode) || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem(LOCAL_THEME_KEY, state.mode);
    },
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      localStorage.setItem(LOCAL_THEME_KEY, action.payload);
    },
  },
});

export const getTheme = createSelector(
  (state: RootState) => state.theme.mode,
  (mode) => themes[mode],
);

export const { setMode, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
