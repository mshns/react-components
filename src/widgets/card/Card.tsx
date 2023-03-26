import React from 'react';
import { ICard } from '../../app/types/interfaces';

import './Card.scss';

class Card extends React.Component<ICard> {
  render() {
    return (
      <div className="card">
        {this.props.discount && <span className="card_discount">Sale</span>}
        <img className="card_image" src={this.props.thumbnail} alt={this.props.title} />
        <h3 className="card_title">{this.props.title}</h3>
        <h4 className="card_date">{this.props.date}</h4>
        <div className="card_information">
          <span className="card_category">Smartphones</span>
          <span className="card_brand">{this.props.brand}</span>
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
