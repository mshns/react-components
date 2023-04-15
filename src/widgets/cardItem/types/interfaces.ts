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

interface ILinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
}

export interface ICardItem {
  id: string;
  urls: IUrls;
  description: string;
  alt_description: string;
  created_at: string;
  updated_at: string;
  likes: number;
  user: IUser;
  tags: ITags[];
  links: ILinks;
}

export type ICardList = ICardItem[];

export interface ISearchResponse {
  results: ICardList;
}

export interface ICardItemProps {
  card: ICardItem;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCardActive: React.Dispatch<React.SetStateAction<string>>;
}
