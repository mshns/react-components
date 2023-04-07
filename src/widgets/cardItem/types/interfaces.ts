interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

interface ITags {
  type: string;
  title: string;
}

export interface ICardItem {
  id: string;
  urls: IUrls;
  description: string;
  created_at: string;
  likes: number;
  user: string;
  tags: ITags[];
}

export interface ICardList {
  itemList: ICardItem[];
}

export interface ICardItemProps {
  card: ICardItem;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
