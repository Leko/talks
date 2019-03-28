import React from "react";
import { withFormik } from "formik";
import { MyForm } from "./MyForm";

export const formikOptions = {
  mapPropsToValues: () => ({ name: "" }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm"
};

export default withFormik(formikOptions)(MyForm);
