import React, { useState } from "react";

import styles from "./EditPassword.module.scss";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import Input from "../Input/Input";
import visiblePassword from "../../images/eye.svg";

const EditPassword = () => {
  const [buttonListener, setButtonListener] = useState(false);

  const [passVisibility, setPassVisibility] = useState("password");
  const [newPassVisibility, setNewPassVisibility] = useState("password");
  const [confirmPassVisibility, setConfirmPassVisibility] = useState("password");

  const form = useFormState({
    values: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        // Password
        if (!values.password) {
          errors.password = "Mandatory info missing";
        }

        // New Password
        if (!values.newPassword) {
          errors.newPassword = "Mandatory info missing";
        }

        // Confirm Password
        if (!values.confirmPassword) {
          errors.confirmPassword = "Mandatory info missing";
        } else if (values.confirmPassword !== values.newPassword) {
          errors.confirmPassword = "Passwords do not match";
        }

        //Check old password and new
        if(values.password === values.newPassword){
          errors.newPassword = "The new password must be different";
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
    <div className={styles.editPassword}>
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
          onMouseDown={(e) => setPassVisibility("none")}
          onMouseUp={(e) => setPassVisibility("password")}
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
          onMouseDown={(e) => setNewPassVisibility("none")}
          onMouseUp={(e) => setNewPassVisibility("password")}
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
          onMouseDown={(e) => setConfirmPassVisibility("none")}
          onMouseUp={(e) => setConfirmPassVisibility("password")}
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

export default EditPassword;
