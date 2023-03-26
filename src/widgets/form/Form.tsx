import React from 'react';

import BrandList from './components/BrandList';

import styles from './Form.module.scss';

import { IFormProps, IFormState } from './types/interfaces';

import { ValidationAlert, SubmitAlert } from './constants/messages';
import todayDate from './helpers/today';

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      alertTitle: false,
      alertDate: false,
      alertBrand: false,
      alertDiscount: false,
      alertThumbnail: false,
      alertAgree: false,
      id: 1,
      message: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  formRef = React.createRef<HTMLFormElement>();
  titleRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  brandRef = React.createRef<HTMLSelectElement>();
  withDiscountRef = React.createRef<HTMLInputElement>();
  withoutDiscountRef = React.createRef<HTMLInputElement>();
  thumbnailRef = React.createRef<HTMLInputElement>();
  agreeRef = React.createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const titleValidation = this.titleRef.current?.value && this.titleRef.current?.value.length > 4;
    this.setState({ alertTitle: titleValidation ? false : true });

    const dateValidation = this.dateRef.current?.value && this.dateRef.current?.value <= todayDate;
    this.setState({ alertDate: dateValidation ? false : true });

    const brandValidation = this.brandRef.current?.value != '';
    this.setState({ alertBrand: brandValidation ? false : true });

    const discountValidation =
      this.withDiscountRef.current?.checked || this.withoutDiscountRef.current?.checked;
    this.setState({ alertDiscount: discountValidation ? false : true });

    const thumbnailValidation = this.thumbnailRef?.current?.files?.length;
    this.setState({ alertThumbnail: thumbnailValidation ? false : true });

    const agreeValidation = this.agreeRef.current?.checked;
    this.setState({ alertAgree: agreeValidation ? false : true });

    if (
      titleValidation &&
      dateValidation &&
      brandValidation &&
      discountValidation &&
      thumbnailValidation &&
      agreeValidation
    ) {
      this.props.addProduct({
        id: this.state.id,
        title: this.titleRef.current?.value ?? '',
        date: this.dateRef.current?.value ?? '',
        discount: this.withDiscountRef.current?.checked ?? false,
        brand: this.brandRef.current?.value ?? '',
        thumbnail: this.thumbnailRef?.current?.files
          ? URL.createObjectURL(this.thumbnailRef.current.files[0])
          : '',
      });

      this.setState({ message: true });
      this.formRef.current?.reset();
      this.setState((prev) => ({ id: prev.id + 1 }));
    }
  }

  handleChange() {
    this.setState({ message: false });
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <fieldset className={styles.form}>
          <legend className={styles.form_title}>Product card</legend>
          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Product name</legend>
            <input
              ref={this.titleRef}
              type="text"
              className={styles.form_input}
              placeholder="Enter product name"
            />
            {this.state.alertTitle && <p className={styles.form_alert}>{ValidationAlert.Title}</p>}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Release date</legend>
            <input ref={this.dateRef} type="date" className={styles.form_input} />
            {this.state.alertDate && <p className={styles.form_alert}>{ValidationAlert.Date}</p>}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Product brand</legend>
            <select ref={this.brandRef} className={styles.form_input}>
              <BrandList />
            </select>
            {this.state.alertBrand && <p className={styles.form_alert}>{ValidationAlert.Brand}</p>}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Discounted</legend>
            <input ref={this.withDiscountRef} type="radio" id="withDiscount" name="discount" />
            <label htmlFor="withDiscount">On sale</label>
            <input
              ref={this.withoutDiscountRef}
              type="radio"
              id="withoutDiscount"
              name="discount"
            />
            <label htmlFor="withoutDiscount">Without discount</label>
            {this.state.alertDiscount && (
              <p className={styles.form_alert}>{ValidationAlert.Discount}</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Product image</legend>
            <input ref={this.thumbnailRef} type="file" accept="image/png, image/jpeg" />
            {this.state.alertThumbnail && (
              <p className={styles.form_alert}>{ValidationAlert.Thumbnail}</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Agreement</legend>
            <input ref={this.agreeRef} type="checkbox" id="agree" />
            <label htmlFor="agree">I consent to the processing of data</label>
            {this.state.alertAgree && <p className={styles.form_alert}>{ValidationAlert.Agree}</p>}
          </fieldset>

          {this.state.message && (
            <p className={styles.form_message}>
              {SubmitAlert.Success}
              <br />
              {SubmitAlert.Another}
            </p>
          )}

          <button className={styles.form_button} type="submit">
            Create a card
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
