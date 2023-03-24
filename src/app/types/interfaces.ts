export interface ICard {
  title: string;
  date: string;
  discount: boolean;
  brand: string;
  thumbnail: string;
}

export interface IProduct extends ICard {
  id: number;
}

export interface IProductList {
  productList: IProduct[];
}
