import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import TextField from "../../components/TextField/TextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Search } from "react-bootstrap-icons";

const UpdateMedicineForm = () => {
  const [searchedQuery, setSearchedQuery] = useState("");

  const validate = Yup.object({
    name: Yup.string().required("Required*"),
    in_stock_total: Yup.number().required("Required*").positive().integer(),
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <BootstrapForm
              style={{ display: "flex" }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <BootstrapForm.Control
                placeholder="Search.."
                type="text"
                name="searchbox"
                value={searchedQuery}
                className="header-form-control"
                onChange={(e) => {
                  setSearchedQuery(e.target.value);
                }}
              />
              <Button
                type="submit"
                disabled={!searchedQuery}
                style={{
                  border: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#28b8b0",
                }}
              >
                <Search size={25} />
              </Button>
            </BootstrapForm>
          </Col>
        </Row>
      </Container>
      <br />
      <Formik
        validationSchema={validate}
        initialValues={{
          name: "",
          in_stock_total: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Container>
                <Row>
                  <Col md={6}>
                    <TextField label="Medicine Name" name="name" type="text" />
                  </Col>
                  <Col md={6}>
                    <TextField
                      type="number"
                      name="in_stock_total"
                      label="In Stock Total"
                    />
                  </Col>
                </Row>

                <Row>
                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      style={{
                        border: "none",
                        backgroundColor: "#28b8b0",
                      }}
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Submit
                    </Button>
                    <Button type="submit" variant="outline-secondary">
                      Cancel
                    </Button>
                  </div>
                </Row>
              </Container>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default UpdateMedicineForm;
