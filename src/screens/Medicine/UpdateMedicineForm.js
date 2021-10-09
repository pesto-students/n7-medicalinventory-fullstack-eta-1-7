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
import Header from "../../components/Header/Header";
import ls from 'local-storage'
import axios from "axios";

const UpdateMedicineForm = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [searchSelectorData, setSearchSelectorData] = useState("");
  const [med, setMed] = useState('')
  const [medId, setMedId] = useState('')

  const validate = Yup.object({
    // name: Yup.string().required("Required*"),
    in_stock_total: Yup.number().required("Required*").positive().integer(),
    free_strip: Yup.number().required("Required*").positive().integer()
  });

  const searchMedicine = () => {
    let config = {
      headers: {
        Authorization: `Token ${ls.get('token')}`,
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
  const updateMedicineData = (values) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${ls.get('token')}`,
      },
    };

    axios
      .patch(
        `https://abdulrashidalaskar.pythonanywhere.com/api/medicine/${medId}/`,
        values,
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

      <Container >
        <Row>
          <Col>
            <BootstrapForm
              style={{ display: "flex" }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div style={{width:"100%"}}>
                <div style={{display:"flex"}}>
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
                    onClick={() => {
                      searchMedicine();
                    }}
                  >
                    <Search size={25} />
                  </Button>
              </div>
              {searchSelectorData && searchSelectorData.length && (
                <div className="search-selector-wrapper" >
                  {searchSelectorData &&
                    searchSelectorData.length &&
                    searchSelectorData.map((item) => (
                      <Row>
                        <Col md={12}>
                          <div
                            onClick={() => {
                              setMed(item.name);
                              setMedId(item.id)
                            }}
                            className="header-form-control form-control"
                          >
                            {item.name}
                          </div>
                        </Col>
                      </Row>
                    ))}
                    
                </div>
                
              )}
              </div>
              
            </BootstrapForm>
          </Col>
          
        </Row>
        
      </Container>
      <br />
      <Formik
        validationSchema={validate}
        initialValues={{
          in_stock_total: "",
          free_strip:""
        }}
        onSubmit={(values) => {
          console.log(values);
          updateMedicineData(values)
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Container>
                <Row>
                  <Col md={4}>
                    <TextField label="Medicine Name" value={med}  name="name" type="text" />
                  </Col>
                  <Col md={4}>
                    <TextField
                      type="number"
                      name="in_stock_total"
                      label="In Stock Total"
                    />
                  </Col>
                  <Col md={4}>
                    <TextField
                      type="number"
                      name="free_strip"
                      label="Free strip"
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
