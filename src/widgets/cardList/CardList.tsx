import { useState } from 'react';

import './CardList.scss';

import CardItem from '../cardItem/CardItem';
import Modal from '../modal/Modal';

import { ICardItem } from '../cardItem/types/interfaces';
import { useAppSelector } from '../../hooks/redux';

const CardList = () => {
  const { itemList } = useAppSelector((state) => state.homeReducer);
  const [modalActive, setModalActive] = useState(false);
  const [cardActive, setCardActive] = useState('');

  return (
    <div className="card-list">
      {!itemList.length ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        itemList.map((item: ICardItem) => (
          <CardItem
            card={item}
            setModalActive={setModalActive}
            setCardActive={setCardActive}
            key={item.id}
          />
        ))
      )}

      {modalActive && <Modal cardActive={cardActive} setModalActive={setModalActive} />}
    </div>
  );
};

export default CardList;
