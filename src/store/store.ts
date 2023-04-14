import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';
import { unsplashApi } from './reducers/apiSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    formReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
