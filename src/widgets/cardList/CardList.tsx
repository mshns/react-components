import React from 'react';
import Card from '../card/Card';

import './CardList.scss';

import productList from './productList';

class CardList extends React.Component {
  render() {
    return (
      <div className="card-list">
        {productList.map((item) => (
          <Card
            title={item.title}
            date={item.date}
            discount={item.discount}
            brand={item.brand}
            thumbnail={item.thumbnail}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
