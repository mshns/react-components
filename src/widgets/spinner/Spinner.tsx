import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>Loading...</p>
    </div>
  );
};

export default Spinner;
