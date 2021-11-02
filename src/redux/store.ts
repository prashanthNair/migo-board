import { configureStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slices/theme';
import brandReducer from './slices/brand';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    brand: brandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
