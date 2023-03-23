import React from 'react';

import styles from './Form.module.scss';

import { IForm } from './types/interfaces';

class Form extends React.Component<IForm> {
  constructor(props: IForm) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  titleRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  brandRef = React.createRef<HTMLSelectElement>();
  firstCategoryRef = React.createRef<HTMLInputElement>();
  secondCategoryRef = React.createRef<HTMLInputElement>();
  firstDiscountedRef = React.createRef<HTMLInputElement>();
  secondDiscountedRef = React.createRef<HTMLInputElement>();
  thumbnailRef = React.createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log(this.titleRef.current?.value);
    // console.log(this.dateRef.current?.value);
    // console.log(this.brandRef.current?.value);
    // console.log(this.firstCategoryRef.current?.checked);
    // console.log(this.secondCategoryRef.current?.checked);
    // console.log(this.firstDiscountedRef.current?.checked);
    // console.log(this.secondDiscountedRef.current?.checked);
    // console.log(this.thumbnailRef?.current?.files);

    this.props.addProduct({
      id: 2,
      title: 'iPhone 14 Pro',
      date: '2023-03-24',
      discount: false,
      brand: 'Apple',
      category: 'Smartphones',
      thumbnail:
        'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/1/thumbnail.jpg',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={styles.form}>
          <legend className={styles.form_title}>Product card</legend>
          <fieldset className={styles.form_field}>
            <legend>Product title</legend>
            <input ref={this.titleRef} type="text" />
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Date of creation</legend>
            <input ref={this.dateRef} type="date" />
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Brand</legend>
            <select ref={this.brandRef}>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Apple">Apple</option>
            </select>
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Category</legend>
            <input ref={this.firstCategoryRef} type="checkbox" id="smartphones" />
            <label htmlFor="smartphones">Smartphones</label>

            <input ref={this.secondCategoryRef} type="checkbox" id="laptops" />
            <label htmlFor="laptops">Laptops</label>
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Discounted</legend>
            <input ref={this.firstDiscountedRef} type="radio" id="yes" name="discounted" />
            <label htmlFor="yes">Yes</label>

            <input ref={this.secondDiscountedRef} type="radio" id="no" name="discounted" />
            <label htmlFor="no">No</label>
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Image</legend>
            <input ref={this.thumbnailRef} type="file" accept="image/png, image/jpeg" />
          </fieldset>

          <button className={styles.form_button} type="submit">
            Create a card
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
