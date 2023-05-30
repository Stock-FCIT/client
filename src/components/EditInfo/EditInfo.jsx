import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';
import Input from '../Input/Input';

import styles from './EditInfo.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import { updateUserInfo } from '../../http/userAPI';


const EditInfo = ({ user }) => {
  const [buttonListener, setButtonListener] = useState(false);

  const editHandler = async ({ fullname, email, phone, country, city, address }) => {
    await updateUserInfo(fullname, email, phone, country, city, address);
  };

  const form = useFormState({
    values: {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      country: '',
      city: '',
      address: '',
    },
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

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
          errors.email = 'Email should have correct format';
        }

        //Phone number
        if (!values.phone) {
          errors.phone = 'Mandatory info missing';
        }

        if (values.phone && !/^\+?3?8?(0\d{9})$/g.test(values.phone)) {
          errors.phone = 'Wrong phone number';
        }

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      editHandler(values);
      notify();
    },
  });

  const notify = () => toast(
    "You have successfully changed your information!"
    );

  useEffect(() => {
    form.update('fullname', user.name);
    form.update('email', user.email);
    form.update('phone', user.phone);
    form.update('country', user.country);
    form.update('city', user.city);
    form.update('address', user.address);
  }, [user]);

  return (
    <div className={styles.editContainer}>
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
      <div className={styles.title}>Main information</div>
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
        {/* COUNTRY */}
        <Input
          name="country"
          placeholder="Country"
          value={form.values.country}
          error={form.errors.country}
          form={form}
        />
        {/* CITY */}
        <Input
          name="city"
          placeholder="City"
          value={form.values.city}
          error={form.errors.city}
          form={form}
        />
        {/* ADDRESS */}
        <Input
          name="address"
          placeholder="Address"
          value={form.values.address}
          error={form.errors.address}
          form={form}
        />

        <FormSubmitButton
          className={styles.sumbitButton}
          onClick={() => {
            setButtonListener(true);
          }}
          {...form}>
          Save
        </FormSubmitButton>
      </Form>
    </div>
  );
};

export default EditInfo;
