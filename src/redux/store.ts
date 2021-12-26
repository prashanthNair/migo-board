import { configureStore, createStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slices/theme';
import onboardingReducer from './slices/brandOnboarding';
// import reducers from './reducers';

export const store = configureStore({
  // reducers,
  reducer: {
    theme: themeReducer,
    Onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
