import './CardList.scss';
import CardItem from '../cardItem/CardItem';
import { ICardItem, ICardList } from '../cardItem/types/interfaces';

const CardList = ({ itemList }: ICardList) => {
  console.log(itemList);
  return (
    <div className="card-list">
      {itemList.map((item: ICardItem) => (
        <CardItem card={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
