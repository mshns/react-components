import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';

import Spinner from '../spinner/Spinner';
import { useGetPhotoByIdQuery } from '../../store/reducers/apiSlice';

import { IModal } from './types/interfaces';

const Modal = ({ cardActive, setModalActive }: IModal) => {
  const { data, isFetching } = useGetPhotoByIdQuery(cardActive);

  const handleClick = () => {
    setModalActive(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.modal_cross} onClick={handleClick} />
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <img className={styles.modal_image} src={data?.urls.regular} />
            <div className={styles.modal_information}>
              <h4 className={styles.modal_author}>{data?.user.name ?? 'Unknown author'}</h4>
              <h3 className={styles.modal_title}>{data?.description ?? 'Untitled'}</h3>
              <p className={styles.modal_paragraph}>{data?.alt_description ?? 'No description'}</p>
              <div className={styles.modal_block}>
                {data?.tags.slice(0, 3).map((item) => (
                  <span className={styles.data_tag} key={item.title}>
                    {item.title}
                  </span>
                ))}
              </div>
              <div className={styles.modal_block}>
                <span className={styles.modal_date}>{data?.created_at.split('T')[0]}</span>
                <span className={styles.modal_likes}>{data?.likes}</span>
              </div>
              <Link
                to={data?.links.download as string}
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
