import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISearchState } from '../types/interfaces';
import { ICardList } from '../../widgets/cardItem/types/interfaces';

const initialState: ISearchState = {
  query: '',
  itemList: [],
  isLoading: false,
  isError: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setItemList(state, action: PayloadAction<ICardList>) {
      state.itemList = action.payload;
    },
  },
});

export const { setQuery, setItemList } = searchSlice.actions;
export default searchSlice.reducer;
