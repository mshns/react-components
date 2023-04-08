import { useState } from 'react';

import './CardList.scss';

import CardItem from '../cardItem/CardItem';
import Modal from '../modal/Modal';

import { ICardItem, ICardList } from '../cardItem/types/interfaces';

const CardList = ({ itemList }: ICardList) => {
  const [modalActive, setModalActive] = useState(false);
  const [cardActive, setCardActive] = useState(0);
  console.log(itemList);

  return (
    <div className="card-list">
      {itemList.map((item: ICardItem, index: number) => (
        <CardItem
          card={item}
          setModalActive={setModalActive}
          setCardActive={setCardActive}
          key={item.id}
          index={index}
        />
      ))}
      {modalActive && <Modal card={itemList[cardActive]} setModalActive={setModalActive} />}
    </div>
  );
};

export default CardList;
