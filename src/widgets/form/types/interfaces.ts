import { IProduct } from '../../../app/types/interfaces';

export interface IFormProps {
  addProduct: (product: IProduct) => void;
}

export interface IFormState {
  alertTitle: boolean;
  alertDate: boolean;
  alertBrand: boolean;
  alertDiscount: boolean;
  alertThumbnail: boolean;
  alertAgree: boolean;
  id: number;
  message: boolean;
}
