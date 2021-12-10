import { configureStore, createStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slices/theme';
import brandReducer from './slices/brand';
// import reducers from './reducers';

export const store = configureStore({
  // reducers,
  reducer: {
    theme: themeReducer,
    brand: brandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
