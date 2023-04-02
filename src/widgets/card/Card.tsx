import './Card.scss';
import { ICardProps } from './types/interfaces';

const Card = ({ card }: ICardProps) => {
  return (
    <div className="card">
      {card.discount && <span className="card_discount">Sale</span>}
      <img className="card_image" src={card.thumbnail} alt={card.title} />
      <h3 className="card_title">{card.title}</h3>
      <h4 className="card_date">{card.date}</h4>
      <div className="card_information">
        <span className="card_category">Smartphones</span>
        <span className="card_brand">{card.brand}</span>
      </div>
      <div className="card_information">
        <button className="card_button">Add to cart</button>
        <button className="card_button">Details</button>
      </div>
    </div>
  );
};

export default Card;
