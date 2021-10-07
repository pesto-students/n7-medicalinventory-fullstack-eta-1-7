import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextField from "../../components/TextField/TextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from '../../axios'
import {useDispatch,useSelector} from 'react-redux'
import { instanceShop } from "../../features/shop/shopSlice";
import ls from 'local-storage'
import { toast } from "../../components/Toast/Toast";
import { useHistory } from 'react-router'
const MedicineForm = () => {
  const history =  useHistory()
  const shop_id = useSelector(instanceShop)
  const handleSubmit = async (values) => {

    
    console.log(values)
        try {
            const response = await axios.post('/api/medicine/',values, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${ls.get('token')}` 
                
            }})
            console.log(response)
            history.replace('/')
        } 
          catch (error) {
              console.log(error)
              toast.error("Authentication denied")

          }
}

  const validate = Yup.object({
    name: Yup.string().required("Required*"),
    company: Yup.string().required("Required*"),
    manufacture: Yup.string().required("Required*"),
    qty_in_strip: Yup.number().required("Required*").positive().integer(),
    in_stock_total: Yup.number().required("Required*").positive().integer(),
    free_strip: Yup.number().required("Required*").positive().integer(),
    description: Yup.string().required("Required*"),
    shelf_no: Yup.string().required("Required*"),
    batch_no: Yup.string().required("Required*"),
    s_gst: Yup.string().required("Required*"),
    c_gst: Yup.string().required("Required*"),
    sell_price: Yup.number().required("Required*").positive().integer(),
    buy_price: Yup.number().required("Required*").positive().integer(),
    medicine_tags: Yup.string().required("Required*"),
  });
  return (
    <Formik
      validationSchema={validate}
      initialValues={{
        name: "",
        company: shop_id,
        manufacture: "",
        qty_in_strip: "",
        in_stock_total: "",
        free_strip: "",
        description: "",
        shelf_no: "",
        batch_no: "",
        s_gst: "",
        c_gst: "",
        sell_price: "",
        buy_price: "",
        // medicine_tags: "",
      }}
      onSubmit={(values) => {
        handleSubmit(values)
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
                  <TextField label="Company Name" name="company" value={shop_id}  disabled type="text" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="manufacture"
                    label="Manufacturer Name"
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    type="number"
                    name="qty_in_strip"
                    label="Quantity In Strip"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField
                    type="number"
                    name="in_stock_total"
                    label="In Stock Total"
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    type="number"
                    name="free_strip"
                    label="Free Strip"
                  />
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
                  <TextField type="text" name="shelf_no" label="Shelf Number" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="text" name="batch_no" label="Batch Number" />
                </Col>
                <Col md={6}>
                  <TextField type="text" name="s_gst" label="SGST" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="text" name="c_gst" label="CGST" />
                </Col>
                <Col md={6}>
                  <TextField type="number" name="sell_price" label="Sell Price" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <TextField type="number" name="buy_price" label="Buy Price" />
                </Col>
                <Col md={6}>
                  <TextField
                    type="text"
                    name="medicine_tags"
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
