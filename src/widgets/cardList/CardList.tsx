import React from 'react';
import Card from '../card/Card';

import './CardList.scss';

import productList from './productList';

class CardList extends React.Component {
  render() {
    return (
      <div className="card-list">
        {productList.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
