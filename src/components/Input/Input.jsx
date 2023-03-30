import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

import { unstable_FormInput as FormInput, unstable_FormMessage as FormMessage } from 'reakit/Form';
const Input = ({ name, error, value, placeholder, form, type }) => {
  return (
    <div className={styles.inputBox}>
      <FormInput
        className={error ? styles.formInputError : styles.formInput}
        {...form}
        name={name}
        type={type}
      />
      <span
        className={classNames(styles.formSpanEmpty, {
          [styles.formSpanEmptyError]: value === '' && error,
          [styles.formSpanFilledError]: value !== '' && error,
          [styles.formSpanFilled]: value !== '',
        })}>
        {placeholder}
      </span>
      <FormMessage className={styles.formMessage} {...form} name={name} />
    </div>
  );
};

export default Input;
