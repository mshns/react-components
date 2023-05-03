import { useState } from 'react';

import './CardList.scss';

import Spinner from '../spinner/Spinner';
import CardItem from '../cardItem/CardItem';
import Modal from '../modal/Modal';

import { useAppSelector } from '../../hooks/redux';
import { useGetSearchPhotosQuery } from '../../store/reducers/apiSlice';

import { ICardItem } from '../cardItem/types/interfaces';

const CardList = () => {
  const query = useAppSelector((state) => state.searchReducer.query);
  const { data = [], isFetching, isError } = useGetSearchPhotosQuery(query);

  const [modalActive, setModalActive] = useState(false);
  const [cardActive, setCardActive] = useState('');

  return (
    <div className="card-list">
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <p>Too many requests. Please try again in one hour...</p>
      ) : !data.length ? (
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
