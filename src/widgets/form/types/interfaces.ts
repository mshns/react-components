import { IProduct } from '../../../app/types/interfaces';

export interface IForm {
  addProduct: (product: IProduct) => void;
}
