import { useState } from 'react';

import './CardList.scss';

import CardItem from '../cardItem/CardItem';

import { ICardItem, ICardList } from '../cardItem/types/interfaces';
import Modal from '../modal/Modal';

const CardList = ({ itemList }: ICardList) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="card-list">
      {itemList.map((item: ICardItem) => (
        <CardItem card={item} setModalActive={setModalActive} key={item.id} />
      ))}

      {modalActive && <Modal card={itemList[0]} setModalActive={setModalActive} />}
    </div>
  );
};

export default CardList;
