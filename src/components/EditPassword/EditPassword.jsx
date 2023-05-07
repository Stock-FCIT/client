import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import styles from './EditPassword.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../Input/Input';
import visiblePassword from '../../images/eye.svg';
import { updateUserPassword } from '../../http/userAPI';

const EditPassword = () => {
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState('');

  const [passVisibility, setPassVisibility] = useState('password');
  const [newPassVisibility, setNewPassVisibility] = useState('password');
  const [confirmPassVisibility, setConfirmPassVisibility] = useState('password');

  const editHandler = async ({ password, newPassword }) => {
    try {
      const data = await updateUserPassword(password, newPassword);
      setButtonListener(true);
      notify();
      form.update('password', '');
      form.update('newPassword', '');
      form.update('confirmPassword', '');
      setButtonListener(false);
    } catch (e) {
      setButtonListener(true);
      setResponse(e.response.data.message);
    }
  };

  const form = useFormState({
    values: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        // Password
        if (!values.password) {
          errors.password = 'Mandatory info missing';
        }

        //Check old password and new
        if (values.password === values.newPassword) {
          errors.newPassword = 'The new password must be different';
        }

        // New Password
        if (!values.newPassword) {
          errors.newPassword = 'Mandatory info missing';
        }

        // Confirm Password
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Mandatory info missing';
        } else if (values.confirmPassword !== values.newPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }

        if (response === 'Current Password is incorrect!') {
          errors.password = 'Current Password is incorrect';
        }

        if (Object.keys(errors).length) {
          throw errors;
        }

        setResponse('');

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      editHandler(values);
    },
  });

  const notify = () => toast('You have successfully changed your password!');

  useEffect(() => {
    if (response === 'Current Password is incorrect!') {
      form.update('password', form.values.password);
    }
  }, [response]);

  return (
    <div className={styles.editPassword}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.title}>Change password</div>
      <Form className={styles.form} {...form}>
        {/* PASSWORD */}
        <Input
          name="password"
          placeholder="Current password"
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

        <Input
          name="newPassword"
          placeholder="New password"
          value={form.values.newPassword}
          error={form.errors.newPassword}
          form={form}
          type={newPassVisibility}
        />
        <img
          className={styles.newPassword}
          src={visiblePassword}
          alt="newPassword"
          onMouseDown={(e) => setNewPassVisibility('none')}
          onMouseUp={(e) => setNewPassVisibility('password')}
        />

        <Input
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.values.confirmPassword}
          error={form.errors.confirmPassword}
          form={form}
          type={confirmPassVisibility}
        />
        <img
          className={styles.confirmPassword}
          src={visiblePassword}
          alt="confirmPassword"
          onMouseDown={(e) => setConfirmPassVisibility('none')}
          onMouseUp={(e) => setConfirmPassVisibility('password')}
        />

        <FormSubmitButton
          className={styles.sumbitButton}
          onClick={() => {
            setResponse('');
            setButtonListener(true);
          }}
          {...form}>
          Save
        </FormSubmitButton>
      </Form>
    </div>
  );
};

export default EditPassword;
