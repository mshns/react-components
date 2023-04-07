import { ICardItemProps } from '../cardItem/types/interfaces';
import styles from './Modal.module.scss';

const Modal = ({ card, setModalActive }: ICardItemProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <img className={styles.modal_image} src={card.urls.regular} alt={card.description} />
        <div className={styles.modal_information}>
          <h3 className={styles.modal_title}>{card.description ?? 'Untitled'}</h3>
          <h4 className={styles.modal_date}>{card.created_at.split('T')[0]}</h4>
          <span className={styles.card_category}>{card.tags[0].title}</span>
          <span className={styles.card_likes}>{card.likes}</span>
        </div>
      </div>
      <div className={styles.modal_shadow} onClick={() => setModalActive(false)}></div>
    </div>
  );
};

export default Modal;
