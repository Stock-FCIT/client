import React, { useState } from "react";

import styles from "./EditInfo.module.scss";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import Input from "../Input/Input";

const EditInfo = () => {
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

        //Pasword
        if (!values.password) {
          errors.password = "Mandatory info missing";
        }

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {},
  });
  return (
    <div className={styles.editContainer}>
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
          {...form}
        >
          Save
        </FormSubmitButton>
      </Form>
    </div>
  );
};

export default EditInfo;
