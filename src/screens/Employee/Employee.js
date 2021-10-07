import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import './Employee.css'
import axios from '../../axios'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import ls from 'local-storage'
import { Container, Row, Col, Button } from "react-bootstrap";
import TextField from "../../components/TextField/TextField";
import { toast } from "../../components/Toast/Toast";
function Employee() {
    const history = useHistory()
    const handleSubmit = async (values) => {

        console.log(values)
            try {
                const response = await axios.post('/api/employee/',values, {headers: {
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
    const phoneRegExp = "/^[6-9]\d{9}$/"
    const validate = Yup.object({
        email: Yup.string().required("Required*").email(),
        password: Yup.string().required("Required*"),
        first_name: Yup.string().required("Required*"),
        username: Yup.string().required("Required*"),
        date_joined: Yup.string().required("Required*"),
        phone: Yup.string().required("Required*").min(10, "phone number not valid").max(10, "phone number not valid"),
      });
    const check_username_exists = async (username) => {
        console.log(username)
        if(username.trim()){
            try {
                const response = await axios.post('/username-exists/',{username:username}, {headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${ls.get('token')}`  
                }})
                if(response.data.exists){
                  toast.error("Username exists")
                }
            } 
              catch (error) {
                  console.log("here")
                  return false
    
              }

        }
        
    }
    return (
        <div className="employee__main">
            <div className="employee__container">
            <h1>Register Employee</h1>
            <Formik
            validationSchema={validate}
            initialValues={{ email: '', password: '' ,first_name:'',username:'',date_joined:'',phone:''}}
            onSubmit={handleSubmit}
            >
            {(formik) => (
                
                <div>
                <Form>
                  <Container>
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="username"
                          type="text"
                          placeholder="username"
                          onBlur={() => check_username_exists(formik.values.username)}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="first_name"
                          type="text"
                          placeholder="name"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="email"
                          type="text"
                          placeholder="Email"
                        />
                      </Col>
                    </Row>
      
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="date_joined"
                          type="date"
                          placeholder="Date"
                        />
                      </Col>
                    </Row>
      
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="phone"
                          type="number"
                          placeholder="Mobile no"
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
                      </div>
                    </Row>
                  </Container>
                </Form>
              </div>
            )}
            </Formik>
            </div>
        </div>               
  );
}

export default Employee;
