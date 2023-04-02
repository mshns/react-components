import Card from '../card/Card';

import './CardList.scss';

import { IProduct } from '../../app/types/interfaces';

import productList from './productList';

const CardList = () => {
  return (
    <div className="card-list">
      {productList.map((item: IProduct) => (
        <Card card={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
