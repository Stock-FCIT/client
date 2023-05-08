import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import Input from "../Input/Input";

import styles from "./CartUserInfo.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CartUserInfo = ({ user }) => {
  const [buttonListener, setButtonListener] = useState(false);

  const form = useFormState({
    values: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      country: "",
      city: "",
      address: "",
    },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        // Full name
        if (!values.fullname) {
          errors.fullname = "Mandatory info missing";
        }

        if (
          values.fullname &&
          !/([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/gi.test(values.fullname)
        ) {
          errors.fullname = "Example: Tony Stark";
        }

        //Email
        if (!values.email) {
          errors.email = "Mandatory info missing";
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
          errors.email = "Email should have correct format";
        }

        //Phone number
        if (!values.phone) {
          errors.phone = "Mandatory info missing";
        }

        if (values.phone && !/^\+?3?8?(0\d{9})$/g.test(values.phone)) {
          errors.phone = "Wrong phone number";
        }

        if (!values.country) {
          errors.country = "Mandatory info missing";
        }

        if (!values.city) {
          errors.city = "Mandatory info missing";
        }
        if (!values.address) {
          errors.address = "Mandatory info missing";
        }

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      notify();
    },
  });

  const notify = () => toast("You have successfully make order!");

  useEffect(() => {
    form.update("fullname", user.name);
    form.update("email", user.email);
    form.update("phone", user.phone);
    form.update("country", user.country);
    form.update("city", user.city);
    form.update("address", user.address);
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

      <Form className={styles.form} {...form}>
        {/* FULL NAME */}
        <Input
          name="fullname"
          placeholder="Full name"
          value={form.values.fullname}
          error={form.errors.fullname}
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

        <div className={styles.itemsTotalWrapper}>
          <div className={styles.totalInfoWrapper}>
            <div className={styles.totalTitle}>Items</div>
            <div className={styles.totalValue}>2</div>
          </div>
          <div className={styles.totalInfoWrapper}>
            <div className={styles.totalTitle}>Total</div>
            <div className={styles.totalValue}>$ 74.23</div>
          </div>
        </div>

        <FormSubmitButton
          className={styles.sumbitButton}
          onClick={() => {
            setButtonListener(true);
          }}
          {...form}
        >
          Save
        </FormSubmitButton>

        <Link className={styles.continueButton} to="/">
          Continue shopping
        </Link>
      </Form>
    </div>
  );
};

export default CartUserInfo;
