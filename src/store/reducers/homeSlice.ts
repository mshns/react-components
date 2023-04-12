import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IHomeState } from '../types/interfaces';
import { ICardList } from '../../widgets/cardItem/types/interfaces';

const initialState: IHomeState = {
  query: '',
  itemList: [],
  isLoading: false,
  isError: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
      state.query = action.payload;
    },
    setItemList(state, action: PayloadAction<ICardList>) {
      console.log(state);
      console.log(action);
      state.itemList = action.payload;
    },
  },
});

export const { setQuery, setItemList } = homeSlice.actions;
export default homeSlice.reducer;
