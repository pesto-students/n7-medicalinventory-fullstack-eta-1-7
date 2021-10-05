import React from "react";
import { Form } from "react-bootstrap";
import { useField, ErrorMessage } from "formik";
import "./TextField.css";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor={field.name}>{label}</Form.Label>
        <Form.Control
          {...field}
          {...props}
          autoComplete="true"
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </Form.Group>
    </div>
  );
};

export default TextField;
