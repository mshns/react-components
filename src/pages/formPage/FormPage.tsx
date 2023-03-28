import React from 'react';

import Form from '../../widgets/form/Form';
import Card from '../../widgets/card/Card';

import styles from './FormPage.module.scss';

import { IProduct, IProductList } from '../../app/types/interfaces';

class FormPage extends React.Component<Record<string, unknown>, IProductList> {
  constructor(props: Record<string, unknown>) {
    super(props);

    this.state = {
      productList: [],
    };
  }

  addProduct = (product: IProduct) => {
    this.setState((prev) => ({ productList: [...prev.productList, product] }));
  };

  render() {
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <Form addProduct={this.addProduct} />
        </section>
        <section className={styles.section}>
          {this.state.productList.map((item: IProduct) => (
            <Card card={item} key={item.id} />
          ))}
        </section>
      </main>
    );
  }
}

export default FormPage;
