import React, { useRef, useState } from 'react';

import BrandList from './components/BrandList';

import styles from './Form.module.scss';

import { IFormProps } from './types/interfaces';

import { ValidationAlert, SubmitAlert } from './constants/messages';
import todayDate from './helpers/today';

const Form = ({ setProductList }: IFormProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const brandRef = useRef<HTMLSelectElement | null>(null);
  const withDiscountRef = useRef<HTMLInputElement | null>(null);
  const withoutDiscountRef = useRef<HTMLInputElement | null>(null);
  const thumbnailRef = useRef<HTMLInputElement | null>(null);
  const agreeRef = useRef<HTMLInputElement | null>(null);

  const [alertTitle, setAlertTitle] = useState(false);
  const [alertDate, setAlertDate] = useState(false);
  const [alertBrand, setAlertBrand] = useState(false);
  const [alertDiscount, setAlertDiscount] = useState(false);
  const [alertThumbnail, setAlertThumbnail] = useState(false);
  const [alertAgree, setAlertAgree] = useState(false);
  const [id, setId] = useState(1);
  const [message, setMessage] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const titleValidation = titleRef.current?.value && titleRef.current?.value.length > 4;
    setAlertTitle(titleValidation ? false : true);

    const dateValidation = dateRef.current?.value && dateRef.current?.value <= todayDate;
    setAlertDate(dateValidation ? false : true);

    const brandValidation = brandRef.current?.value != '';
    setAlertBrand(brandValidation ? false : true);

    const discountValidation =
      withDiscountRef.current?.checked || withoutDiscountRef.current?.checked;
    setAlertDiscount(discountValidation ? false : true);

    const thumbnailValidation = thumbnailRef?.current?.files?.length;
    setAlertThumbnail(thumbnailValidation ? false : true);

    const agreeValidation = agreeRef.current?.checked;
    setAlertAgree(agreeValidation ? false : true);

    if (
      titleValidation &&
      dateValidation &&
      brandValidation &&
      discountValidation &&
      thumbnailValidation &&
      agreeValidation
    ) {
      setProductList((prev) => [
        ...prev,
        {
          id: id,
          title: titleRef.current?.value ?? '',
          date: dateRef.current?.value ?? '',
          discount: withDiscountRef.current?.checked ?? false,
          brand: brandRef.current?.value ?? '',
          thumbnail: thumbnailRef?.current?.files
            ? URL.createObjectURL(thumbnailRef.current.files[0])
            : '',
        },
      ]);

      setMessage(true);
      formRef.current?.reset();
      setId((prev) => prev + 1);
    }
  };

  const handleChange = () => {
    setMessage(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
      <fieldset className={styles.form}>
        <legend className={styles.form_title}>Product card</legend>
        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product name</legend>
          <input
            ref={titleRef}
            type="text"
            className={styles.form_input}
            placeholder="Enter product name"
          />
          {alertTitle && <p className={styles.form_alert}>{ValidationAlert.Title}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Release date</legend>
          <input ref={dateRef} type="date" className={styles.form_input} />
          {alertDate && <p className={styles.form_alert}>{ValidationAlert.Date}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product brand</legend>
          <select ref={brandRef} className={styles.form_input}>
            <BrandList />
          </select>
          {alertBrand && <p className={styles.form_alert}>{ValidationAlert.Brand}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Discounted</legend>
          <input ref={withDiscountRef} type="radio" id="withDiscount" name="discount" />
          <label htmlFor="withDiscount">On sale</label>
          <input ref={withoutDiscountRef} type="radio" id="withoutDiscount" name="discount" />
          <label htmlFor="withoutDiscount">Without discount</label>
          {alertDiscount && <p className={styles.form_alert}>{ValidationAlert.Discount}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product image</legend>
          <input ref={thumbnailRef} type="file" accept="image/png, image/jpeg" />
          {alertThumbnail && <p className={styles.form_alert}>{ValidationAlert.Thumbnail}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Agreement</legend>
          <input ref={agreeRef} type="checkbox" id="agree" />
          <label htmlFor="agree">I consent to the processing of data</label>
          {alertAgree && <p className={styles.form_alert}>{ValidationAlert.Agree}</p>}
        </fieldset>

        {message && (
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
};

export default Form;
