import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFormState } from '../types/interfaces';
import { IProduct } from '../../app/types/interfaces';

const initialState: IFormState = {
  productList: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setProductList(state, action: PayloadAction<IProduct>) {
      state.productList.push(action.payload);
    },
  },
});

export const { setProductList } = formSlice.actions;
export default formSlice.reducer;
