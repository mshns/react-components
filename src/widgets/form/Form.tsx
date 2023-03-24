import React from 'react';

import styles from './Form.module.scss';

import { IFormProps, IFormState } from './types/interfaces';

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

    this.titleRef.current?.value && this.titleRef.current?.value.length > 4
      ? this.setState({ alertTitle: false })
      : this.setState({ alertTitle: true });

    this.dateRef.current?.value && this.dateRef.current?.value < '2023-03-27'
      ? this.setState({ alertDate: false })
      : this.setState({ alertDate: true });

    this.brandRef.current?.value != 'choose'
      ? this.setState({ alertBrand: false })
      : this.setState({ alertBrand: true });

    this.withDiscountRef.current?.checked || this.withoutDiscountRef.current?.checked
      ? this.setState({ alertDiscount: false })
      : this.setState({ alertDiscount: true });

    this.thumbnailRef?.current?.files?.length
      ? this.setState({ alertThumbnail: false })
      : this.setState({ alertThumbnail: true });

    this.agreeRef.current?.checked
      ? this.setState({ alertAgree: false })
      : this.setState({ alertAgree: true });

    if (
      this.titleRef.current?.value &&
      this.dateRef.current?.value &&
      this.brandRef.current?.value != 'choose' &&
      (this.withDiscountRef.current?.checked || this.withoutDiscountRef.current?.checked) &&
      this.thumbnailRef?.current?.files?.length &&
      this.agreeRef.current?.checked
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

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        onChange={() => this.setState({ message: false })}
      >
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
            {this.state.alertTitle && (
              <p className={styles.form_alert}>Please enter a name longer than 5 letters</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Release date</legend>
            <input ref={this.dateRef} type="date" className={styles.form_input} />
            {this.state.alertDate && (
              <p className={styles.form_alert}>Please enter a date no earlier than today</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Product brand</legend>
            <select ref={this.brandRef} className={styles.form_input}>
              <option value="choose" hidden>
                Choose a brand
              </option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Apple">Apple</option>
            </select>
            {this.state.alertBrand && <p className={styles.form_alert}>Please choose a brand</p>}
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
              <p className={styles.form_alert}>Please select one of the options</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Product image</legend>
            <input ref={this.thumbnailRef} type="file" accept="image/png, image/jpeg" />
            {this.state.alertThumbnail && (
              <p className={styles.form_alert}>Please upload an image</p>
            )}
          </fieldset>

          <fieldset className={styles.form_field}>
            <legend className={styles.form_subtitle}>Agreement</legend>
            <input ref={this.agreeRef} type="checkbox" id="agree" />
            <label htmlFor="agree">I consent to the processing of data</label>
            {this.state.alertAgree && (
              <p className={styles.form_alert}>
                Please give your consent to the processing of data
              </p>
            )}
          </fieldset>

          {this.state.message && (
            <p className={styles.form_message}>
              Product card has been successfully created.
              <br />
              You can create another card.
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
