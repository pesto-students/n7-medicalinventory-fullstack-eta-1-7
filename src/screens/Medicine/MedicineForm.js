import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextField from "../../components/TextField/TextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const MedicineForm = () => {
  const validate = Yup.object({
    medicineName: Yup.string().required("Required*"),
    companyName: Yup.string().required("Required*"),
    buyerName: Yup.string().required("Required*"),
    manufacturerName: Yup.string().required("Required*"),
    qtyInStrip: Yup.string().required("Required*"),
    inStockTotal: Yup.string().required("Required*"),
    freeStrip: Yup.string().required("Required*"),
    description: Yup.string().required("Required*"),
    shelfNo: Yup.string().required("Required*"),
    batchNo: Yup.string().required("Required*"),
    sGst: Yup.string().required("Required*"),
    cGst: Yup.string().required("Required*"),
    sellPrice: Yup.string().required("Required*"),
    buyPrice: Yup.string().required("Required*"),
    medicineTags: Yup.string().required("Required*"),
  });
  return (
    <Formik
      validationSchema={validate}
      initialValues={{
        medicineName: "",
        companyName: "",
        buyerName: "",
        manufacturerName: "",
        qtyInStrip: "",
        inStockTotal: "",
        freeStrip: "",
        description: "",
        shelfNo: "",
        batchNo: "",
        sGst: "",
        cGst: "",
        sellPrice: "",
        buyPrice: "",
        medicineTags: "",
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
                  <TextField
                    label="Medicine Name"
                    name="medicineName"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Company Name"
                    name="companyName"
                    type="text"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="manufacturerName"
                    label="Manufacturer Name"
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="qtyInStrip"
                    label="Quantity In Strip"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="inStockTotal"
                    label="In Stock Total"
                  />
                </Col>
                <Col md={6}>
                  <TextField type="text" name="freeStrip" label="Free Strip" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="description"
                    label="Description"
                  />
                </Col>
                <Col md={6}>
                  <TextField type="text" name="shelfNo" label="Shelf Number" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="text" name="batchNo" label="Batch Number" />
                </Col>
                <Col md={6}>
                  <TextField type="text" name="sGst" label="SGST" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="text" name="cGst" label="CGST" />
                </Col>
                <Col md={6}>
                  <TextField type="text" name="sellPrice" label="Sell Price" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="text" name="buyPrice" label="Buy Price" />
                </Col>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="medicineTags"
                    label="Medicine Tags"
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
  );
};

export default MedicineForm;
