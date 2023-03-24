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
  discountRef = React.createRef<HTMLInputElement>();
  thumbnailRef = React.createRef<HTMLInputElement>();
  agreeRef = React.createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.addProduct({
      id: 2,
      title: this.titleRef.current?.value ?? '',
      date: this.dateRef.current?.value ?? '',
      discount: this.discountRef.current?.checked ?? false,
      brand: this.brandRef.current?.value ?? '',
      thumbnail: this.thumbnailRef?.current?.files
        ? URL.createObjectURL(this.thumbnailRef.current.files[0])
        : '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={styles.form}>
          <legend className={styles.form_title}>Product card</legend>
          <fieldset className={styles.form_field}>
            <legend>Enter product name</legend>
            <input ref={this.titleRef} type="text" required />
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Enter release date</legend>
            <input ref={this.dateRef} type="date" required />
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Choose a product brand</legend>
            <select ref={this.brandRef}>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Apple">Apple</option>
            </select>
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Discounted</legend>
            <input ref={this.discountRef} type="radio" id="withDiscount" name="discount" required />
            <label htmlFor="withDiscount">On sale</label>
            <input type="radio" id="withoutDiscount" name="discount" />
            <label htmlFor="withoutDiscount">Without discount</label>
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Image</legend>
            <input ref={this.thumbnailRef} type="file" accept="image/png, image/jpeg" required />
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend>Agreement</legend>
            <input ref={this.agreeRef} type="checkbox" id="agree" required />
            <label htmlFor="agree">I consent to the processing of data</label>
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
