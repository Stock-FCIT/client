import React, { useState } from 'react';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import visiblePassword from '../../images/eye.svg';
import closeDialog from '../../images/closeDialog.svg';

import styles from './Login.module.scss';
import Input from '../Input/Input';

const Login = ({ changeWindow, dialog2 }) => {
  const handleWindowChange = () => {
    changeWindow(true);
  };

  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);

  const form = useFormState({
    values: { email: '', password: '' },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        //Email
        if (!values.email) {
          errors.email = 'Mandatory info missing';
        }

        //Pasword
        if (!values.password) {
          errors.password = 'Mandatory info missing';
        }

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div>
        <img
          onClick={() => dialog2.hide()}
          className={styles.closeDialog}
          src={closeDialog}
          alt="closeDialog"
        />
        <div className={styles.dialogContainer}>
          <div className={styles.topSectionWrapper}>
            <div className={styles.title}>Login</div>
            <Form className={styles.form} {...form}>
              {/* EMAIL */}
              <Input
                name="email"
                placeholder="Email"
                value={form.values.email}
                error={form.errors.email}
                form={form}
              />

              {/* PASSWORD */}
              <div className={styles.inputBox}>
                <Input
                  name="password"
                  placeholder="Password"
                  value={form.values.password}
                  error={form.errors.password}
                  form={form}
                  type={passVisibility}
                />
                <img
                  className={styles.password}
                  src={visiblePassword}
                  alt="password"
                  onMouseDown={(e) => setPassVisibility('none')}
                  onMouseUp={(e) => setPassVisibility('password')}
                />
              </div>

              <FormSubmitButton
                className={styles.sumbitButton}
                onClick={() => {
                  setButtonListener(true);
                }}
                {...form}>
                Login
              </FormSubmitButton>
            </Form>
          </div>
          <div className={styles.bottomDialog}>
            <div className={styles.bottomText}>
              I have no account,{' '}
              <span className={styles.logInButton} onClick={handleWindowChange}>
                {' '}
                Register now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
