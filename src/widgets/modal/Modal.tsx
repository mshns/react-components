import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';

import Spinner from '../spinner/Spinner';

import { Api } from '../../pages/home/constants/unsplash';

import { IModal } from './types/interfaces';
import { ICardItem } from '../cardItem/types/interfaces';

const Modal = ({ cardActive, setModalActive }: IModal) => {
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<ICardItem>();

  const handleClick = () => {
    setModalActive(false);
  };

  useEffect(() => {
    const resource = `${Api.URL}${Api.ByID}${cardActive}?${Api.ClientID}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => setCard(data))
      .then(() => setIsLoading(false));
  }, [card, cardActive]);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.modal_cross} onClick={handleClick} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <img className={styles.modal_image} src={card?.urls.regular} />
            <div className={styles.modal_information}>
              <h4 className={styles.modal_author}>{card?.user.name ?? 'Unknown author'}</h4>
              <h3 className={styles.modal_title}>{card?.description ?? 'Untitled'}</h3>
              <p className={styles.modal_paragraph}>{card?.alt_description ?? 'No description'}</p>
              <div className={styles.modal_block}>
                {card?.tags.slice(0, 3).map((item) => (
                  <span className={styles.card_tag} key={item.title}>
                    {item.title}
                  </span>
                ))}
              </div>
              <div className={styles.modal_block}>
                <span className={styles.modal_date}>{card?.created_at.split('T')[0]}</span>
                <span className={styles.modal_likes}>{card?.likes}</span>
              </div>
              <Link
                to={card?.links.download as string}
                className={styles.modal_button}
                target="blanc"
              >
                Download
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={styles.modal_shadow} onClick={handleClick}></div>
    </div>
  );
};

export default Modal;
