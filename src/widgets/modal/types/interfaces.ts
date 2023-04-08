import { ICardItem } from '../../cardItem/types/interfaces';

export interface IModal {
  card: ICardItem;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
