// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ Valid reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
