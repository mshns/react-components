import { ICardList } from '../../widgets/cardItem/types/interfaces';

export interface IHomeState {
  query: string;
  itemList: ICardList;
  isLoading: boolean;
  isError: boolean;
}
