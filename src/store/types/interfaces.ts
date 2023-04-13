import { IProduct } from '../../app/types/interfaces';
import { ICardList } from '../../widgets/cardItem/types/interfaces';

export interface ISearchState {
  query: string;
  itemList: ICardList;
  isLoading: boolean;
  isError: boolean;
}

export interface IFormState {
  productList: IProduct[];
}
