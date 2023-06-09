import React, { useState, useEffect, useContext } from 'react';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import visiblePassword from '../../images/eye.svg';
import closeDialog from '../../images/closeDialog.svg';

import styles from './Register.module.scss';
import Input from '../Input/Input';
import { registration} from '../../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const Register = observer(({ changeWindow, dialog1 }) => {
  const handleWindowChange = () => {
    changeWindow(false);
  };

  const { user } = useContext(Context);

  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState('');

  const registerHandler = async ({ fullname, email, phone, password }) => {
    try {
      const data = await registration(fullname, email, phone, password);
      setButtonListener(true);
      user.setIsAuth(true);
      dialog1.hide();
    } catch (e) {
      setResponse(e.response.data.message);
    }
  };

  const form = useFormState({
    values: { fullname: '', email: '', phone: '', password: '' },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        // Full name
        if (!values.fullname) {
          errors.fullname = 'Mandatory info missing';
        }

        if (values.fullname && !/([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/gi.test(values.fullname)) {
          errors.fullname = 'Example: Tony Stark';
        }

        //Email
        if (!values.email) {
          errors.email = 'Mandatory info missing';
        }

        if (response === 'User with this e-mail is already existed') {
          errors.email = response;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
          errors.email = 'Email should have correct format';
        }

        //Phone number
        if (!values.phone) {
          errors.phone = 'Mandatory info missing';
        }

        if (response === 'User with this phone is already existed') {
          errors.phone = response;
        }

        if (values.phone && !/^\+?3?8?(0\d{9})$/g.test(values.phone)) {
          errors.phone = 'Wrong phone number';
        }

        if (response === 'User with this e-mail and phone is already existed') {
          errors.email = 'User with this e-mail is already existed';
          errors.phone = 'User with this phone is already existed';
        }

        //Pasword
        if (!values.password) {
          errors.password = 'Mandatory info missing';
        }

        if (
          values.password &&
          !/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g.test(
            values.password,
          )
        ) {
          errors.password =
            'The password has to be at least 1 uppercase, 1 special symbol and 1 number';
        }

        setResponse('');

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      registerHandler(values);
    },
  });

  useEffect(() => {
    if (response === 'User with this e-mail is already existed') {
      form.update('email', form.values.email);
    }

    if (response === 'User with this phone is already existed') {
      form.update('phone', form.values.phone);
    }

    if (response === 'User with this e-mail and phone is already existed"') {
      form.update('email', form.values.email);
      form.update('phone', form.values.phone);
    }
  }, [response]);

  return (
    <div>
      <img
        onClick={() => dialog1.hide()}
        className={styles.closeDialog}
        src={closeDialog}
        alt="closeDialog"
      />
      <div className={styles.dialogContainer}>
        <div className={styles.topSectionWrapper}>
          <div className={styles.title}>Register</div>
          <Form className={styles.form} {...form}>
            {/* FULL NAME */}
            <Input
              name="fullname"
              placeholder="Full name"
              value={form.values.fullname}
              error={form.errors.fullname}
              form={form}
            />

            {/* EMAIL */}
            <Input
              name="email"
              placeholder="Email"
              value={form.values.email}
              error={form.errors.email}
              form={form}
            />

            {/* PHONE */}
            <Input
              name="phone"
              placeholder="Phone number"
              value={form.values.phone}
              error={form.errors.phone}
              form={form}
              type="number"
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

              {form.errors.password ? (
                <></>
              ) : (
                <span className={styles.passwordHint}>
                  The password has to be at least 1 uppercase, 1 special symbol and 1 number
                </span>
              )}
            </div>

            <FormSubmitButton
              className={styles.sumbitButton}
              onClick={() => {
                setButtonListener(true);
              }}
              {...form}>
              Register
            </FormSubmitButton>
          </Form>
        </div>
        <div className={styles.bottomDialog}>
          <div className={styles.bottomText}>
            I already have an account,{' '}
            <span className={styles.logInButton} onClick={handleWindowChange}>
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
