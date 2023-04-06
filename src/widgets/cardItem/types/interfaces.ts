export interface ICardItem {
  id: string;
  url: string;
  description: string;
  created: string;
  likes: number;
  user: string;
}

export interface ICardList {
  itemList: ICardItem[];
}
