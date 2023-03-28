import React from 'react';
import { ICard } from '../../app/types/interfaces';

import './Card.scss';

class Card extends React.Component<{ card: ICard }> {
  constructor(props: { card: ICard }) {
    super(props);
  }

  render() {
    const { title, date, discount, brand, thumbnail } = this.props.card;

    return (
      <div className="card">
        {discount && <span className="card_discount">Sale</span>}
        <img className="card_image" src={thumbnail} alt={title} />
        <h3 className="card_title">{title}</h3>
        <h4 className="card_date">{date}</h4>
        <div className="card_information">
          <span className="card_category">Smartphones</span>
          <span className="card_brand">{brand}</span>
        </div>
        <div className="card_information">
          <button className="card_button">Add to cart</button>
          <button className="card_button">Details</button>
        </div>
      </div>
    );
  }
}

export default Card;
