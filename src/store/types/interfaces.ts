import { IProduct } from '../../app/types/interfaces';

export interface ISearchState {
  query: string;
}

export interface IFormState {
  productList: IProduct[];
}
