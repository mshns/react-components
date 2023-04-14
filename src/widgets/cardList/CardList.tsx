import { useState } from 'react';

import './CardList.scss';

import CardItem from '../cardItem/CardItem';
import Modal from '../modal/Modal';

import { useAppSelector } from '../../hooks/redux';
import { useGetRandomPhotosQuery } from '../../store/reducers/apiSlice';

import { ICardItem } from '../cardItem/types/interfaces';

const CardList = () => {
  const { query } = useAppSelector((state) => state.searchReducer);
  const { data = [], isLoading } = useGetRandomPhotosQuery();

  const [modalActive, setModalActive] = useState(false);
  const [cardActive, setCardActive] = useState('');

  return (
    <div className="card-list">
      {!data.length ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        data.map((item: ICardItem) => (
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
