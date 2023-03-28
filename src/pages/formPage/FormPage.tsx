import React, { useState } from 'react';

import Form from '../../widgets/form/Form';
import Card from '../../widgets/card/Card';

import styles from './FormPage.module.scss';

import { IProduct } from '../../app/types/interfaces';

const FormPage = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Form setProductList={setProductList} />
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
