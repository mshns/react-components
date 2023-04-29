import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';
import { unsplashApi } from './reducers/apiSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(unsplashApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
