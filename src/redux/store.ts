import { configureStore, createStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './slices/theme';
import onboardingReducer from './slices/brand';
import inventoryReducer from './slices/inventory';
import orderTrackingSlice from './slices/orderTracking';
import appState from './slices/global';

export const store = configureStore({
  // reducers,
  reducer: {
    theme: themeReducer,
    Onboarding: onboardingReducer,
    inventory: inventoryReducer,
    orderTracking: orderTrackingSlice,
    app: appState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
