import React from 'react';
import { ICard } from '../../app/types/interfaces';

import './Card.scss';

class Card extends React.Component<ICard> {
  render() {
    return (
      <div className="card">
        <span className="card_discount">{`Sale -${this.props.discount}%`}</span>
        <img className="card_image" src={this.props.thumbnail} />
        <h3 className="card_title">{this.props.title}</h3>
        <h4 className="card_price">{`$${this.props.price}`}</h4>
        <div className="card_information">
          <span className="card_category">{this.props.category}</span>
          <span className="card_brand">{this.props.brand}</span>
        </div>
        <p className="card_description">{this.props.description}</p>
        <div className="card_information">
          <button className="card_button">Add to cart</button>
          <button className="card_button">Details</button>
        </div>
      </div>
    );
  }
}

export default Card;
