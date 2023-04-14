import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISearchState } from '../types/interfaces';

const initialState: ISearchState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
