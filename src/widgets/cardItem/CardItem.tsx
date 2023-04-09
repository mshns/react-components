import { ICardItemProps } from './types/interfaces';

import styles from './CardItem.module.scss';

const CardItem = ({ card, setModalActive, setCardActive }: ICardItemProps) => {
  const handleClick = () => {
    setModalActive(true);
    setCardActive(card.id);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.card_image} src={card.urls.regular} alt={card.description} />
      <h3 className={styles.card_title}>{card.description ?? 'Untitled'}</h3>
      <h4 className={styles.card_user}>{card.user.username}</h4>
      <div className={styles.card_information}>
        <span className={styles.card_date}>{card.created_at.split('T')[0]}</span>
        <span className={styles.card_likes}>{card.likes}</span>
      </div>
    </div>
  );
};

export default CardItem;
