import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
