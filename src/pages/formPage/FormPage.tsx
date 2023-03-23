import React from 'react';

import Form from '../../widgets/form/Form';
import Card from '../../widgets/card/Card';

import styles from './FormPage.module.scss';
import { IProduct } from '../../app/types/interfaces';

export type IFormPageState = {
  cards: IProduct[];
};

class FormPage extends React.Component<Record<string, never>, IFormPageState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          title: 'iPhone 13 Pro',
          date: '2023-03-24',
          discount: false,
          brand: 'Apple',
          category: 'Smartphones',
          thumbnail:
            'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/1/thumbnail.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <Form cards={this.state.cards} />
        </section>
        <section className={styles.section}>
          {this.state.cards.map((item) => (
            <Card
              title={item.title}
              date={item.date}
              discount={item.discount}
              brand={item.brand}
              category={item.category}
              thumbnail={item.thumbnail}
              key={item.id}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default FormPage;
