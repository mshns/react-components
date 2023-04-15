import styles from './FormPage.module.scss';

import Form from '../../widgets/form/Form';
import Card from '../../widgets/card/Card';

import { useAppSelector } from '../../hooks/redux';

import { IProduct } from '../../app/types/interfaces';

const FormPage = () => {
  const { productList } = useAppSelector((state) => state.formReducer);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Form />
      </section>
      <section className={styles.section}>
        {productList.map((item: IProduct) => (
          <Card card={item} key={item.id} />
        ))}
      </section>
    </main>
  );
};

export default FormPage;
