import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { SpootifyAPI } from './services/SpootifyScrapping';

export const store = configureStore({
  reducer: {
    [SpootifyAPI.reducerPath]: SpootifyAPI.reducer,
    player: playerReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SpootifyAPI.middleware)
});
