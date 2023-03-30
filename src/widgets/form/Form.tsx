import { useState } from 'react';
import { useForm } from 'react-hook-form';

import BrandList from './components/BrandList';

import styles from './Form.module.scss';

import { IFormProps } from './types/interfaces';

import { ValidationAlert, SubmitAlert } from './constants/messages';
import todayDate from './helpers/today';

const Form = ({ setProductList }: IFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [cardId, setCardId] = useState(1);
  const [submitAlert, setSubmitAlert] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setProductList((prev) => [
      ...prev,
      {
        id: cardId,
        title: data.title,
        date: data.date,
        discount: data.discount === 'withDiscount',
        brand: data.brand,
        thumbnail: URL.createObjectURL(data.thumbnail[0]),
      },
    ]);
    reset();
    setSubmitAlert(true);
    setCardId((prev) => prev + 1);
  });

  const handleChange = () => {
    setSubmitAlert(false);
  };

  return (
    <form onSubmit={onSubmit} onChange={handleChange}>
      <fieldset className={styles.form}>
        <legend className={styles.form_title}>Product card</legend>
        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product name</legend>
          <input
            {...register('title', { required: true, pattern: /^[A-ZА-Я]{1}[\S\s]{0,30}$/ })}
            type="text"
            className={styles.form_input}
            placeholder="Enter product name"
          />
          {errors?.title && <p className={styles.form_alert}>{ValidationAlert.Title}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Release date</legend>
          <input
            {...register('date', { required: true, validate: (value) => value <= todayDate })}
            type="date"
            className={styles.form_input}
          />
          {errors?.date && <p className={styles.form_alert}>{ValidationAlert.Date}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product brand</legend>
          <select {...register('brand', { required: true })} className={styles.form_input}>
            <BrandList />
          </select>
          {errors?.brand && <p className={styles.form_alert}>{ValidationAlert.Brand}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Discounted</legend>
          <input
            {...register('discount', { required: true })}
            type="radio"
            id="withDiscount"
            value="withDiscount"
          />
          <label htmlFor="withDiscount">On sale</label>
          <input {...register('discount', { required: true })} type="radio" id="withoutDiscount" />
          <label htmlFor="withoutDiscount">Without discount</label>
          {errors?.discount && <p className={styles.form_alert}>{ValidationAlert.Discount}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Product image</legend>
          <input
            {...register('thumbnail', { required: true })}
            type="file"
            accept="image/png, image/jpeg"
          />
          {errors?.thumbnail && <p className={styles.form_alert}>{ValidationAlert.Thumbnail}</p>}
        </fieldset>

        <fieldset className={styles.form_field}>
          <legend className={styles.form_subtitle}>Agreement</legend>
          <input {...register('agree', { required: true })} type="checkbox" id="agree" />
          <label htmlFor="agree">I consent to the processing of data</label>
          {errors?.agree && <p className={styles.form_alert}>{ValidationAlert.Agree}</p>}
        </fieldset>

        {submitAlert && (
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
