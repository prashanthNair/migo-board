import { configureStore, createStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slices/theme';
import onboardingReducer from './slices/brand';
import iventoryReducer from './slices/inventory';
// import reducers from './reducers';

export const store = configureStore({
  // reducers,
  reducer: {
    theme: themeReducer,
    Onboarding: onboardingReducer,
    inventory: iventoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
