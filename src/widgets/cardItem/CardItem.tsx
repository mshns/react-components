import { ICardItem } from './types/interfaces';

const CardItem = ({ card }: { card: ICardItem }) => {
  return <div className="card">{card.description}</div>;
};

export default CardItem;
