import React from "react";
import { Formik } from "formik";
import "./Employee.css";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "../../components/Toast/Toast";

function Employee() {
  const history = useHistory();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post("/api/employee/", values);
      console.log(response);
      history.replace("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Authentication denied");
    }
  };
  return (
    <div className="employee__main">
      <div className="employee__container">
        <h1>Register Employee</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            username: "",
            joining_date: "",
            phone: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.username) {
              errors.username = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="employee__form">
              <div className="employee__field">
                <input
                  className="employee__field_input"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                />
                {errors.username && touched.username && errors.username}
                <input
                  className="employee__field_input"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                />
              </div>
              <div className="employee__field">
                <input
                  className="employee__field_input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="employee__field">
                <input
                  className="employee__field_input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password && touched.password && errors.password}
              </div>
              <div className="employee__field">
                <input
                  type="date"
                  className="employee__field_input"
                  placeholder="joining_date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.joining_date}
                  name="joining_date"
                />
                {errors.joining_date &&
                  touched.joining_date &&
                  errors.joining_date}
              </div>
              <div className="employee__field">
                <input
                  className="employee__field_input"
                  type="number"
                  placeholder="Mobile no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  name="phone"
                />
                {errors.phone && touched.phone && errors.phone}
              </div>
              <div className="employee__field">
                <input
                  className="employee__field_input employee__button"
                  onClick={handleSubmit}
                  type="submit"
                  value="Register "
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Employee;
