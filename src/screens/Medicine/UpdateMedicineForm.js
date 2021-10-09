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
import axios from "axios";
import { AUTH_TOKEN } from "../../localStorage";

const UpdateMedicineForm = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [searchSelectorData, setSearchSelectorData] = useState("");

  const validate = Yup.object({
    name: Yup.string().required("Required*"),
    in_stock_total: Yup.number().required("Required*").positive().integer(),
  });

  const searchMedicine = () => {
    let config = {
      headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
      },
    };

    axios
      .get(
        `https://abdulrashidalaskar.pythonanywhere.com/search?searchQuery=${searchedQuery}`,
        config
      )
      .then((response) => {
        setSearchSelectorData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMedicineData = (id) => {
    let config = {
      headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
      },
    };

    axios
      .get(
        `https://abdulrashidalaskar.pythonanywhere.com/api/medicine/${id}/`,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              {searchSelectorData && searchSelectorData.length && (
                <div className="search-selector-wrapper">
                  {searchSelectorData &&
                    searchSelectorData.length &&
                    searchSelectorData.map((item) => (
                      <Row>
                        <Col md={12}>
                          <div
                            onClick={() => {
                              getMedicineData(item.id);
                            }}
                            className="search-selector--item"
                          >
                            {item.name}
                          </div>
                        </Col>
                      </Row>
                    ))}
                </div>
              )}
              <Button
                type="submit"
                disabled={!searchedQuery}
                style={{
                  border: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#28b8b0",
                }}
                onClick={() => {
                  searchMedicine();
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
