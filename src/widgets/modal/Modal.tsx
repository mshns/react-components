import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';

import { IModal } from './types/interfaces';

const Modal = ({ card, setModalActive }: IModal) => {
  const handleClick = () => {
    setModalActive(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.modal_cross} onClick={handleClick} />
        <img className={styles.modal_image} src={card.urls.regular} alt={card.description} />
        <div className={styles.modal_information}>
          <h4 className={styles.modal_author}>{card.user.name ?? 'Unknown author'}</h4>
          <h3 className={styles.modal_title}>{card.description ?? 'Untitled'}</h3>
          <p className={styles.modal_paragraph}>{card.alt_description}</p>
          <div className={styles.modal_block}>
            {card.tags.map((item) => (
              <span className={styles.card_tag} key={item.title}>
                {item.title}
              </span>
            ))}
          </div>
          <div className={styles.modal_block}>
            <span className={styles.modal_date}>{card.created_at.split('T')[0]}</span>
            <span className={styles.modal_likes}>{card.likes}</span>
          </div>
          <Link to={card.links.download} className={styles.modal_button} target="blanc">
            Download
          </Link>
        </div>
      </div>
      <div className={styles.modal_shadow} onClick={handleClick}></div>
    </div>
  );
};

export default Modal;
