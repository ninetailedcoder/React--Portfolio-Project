import { Field, Formik, Form } from "formik";
import { Button, Col, Container, FormGroup, Label, Row } from "reactstrap";
import CaroselSpin from "../components/CaroselSpin";
import SlidingRows from "../components/SlidingRows";

const ContactPage = () => {
  return (
    <Container>
      <SlidingRows animationDelay={0.5} direction='up'>
        <Row>
          <CaroselSpin/>
        </Row>
      </SlidingRows>
        <Row>
          <Col className="contactformhead rounded" xs='12'>
            <h2>Message Us!</h2>
            <hr/>
          </Col>
          <Col xs='12'>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phoneNum: "",
                email: "",
                agree: false,
                contactType: "By Phone",
                message: "",
              }}
            >
              <Form>
                <FormGroup row>
                  <Label htmlFor="firstName" md="2">
                    First Name
                  </Label>
                  <Col md="10">
                    <Field
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                    />
                    {/* <ErrorMessage name="firstName">
                      {(msg) => <p className="text-danger">{msg}</p>}
                    </ErrorMessage> */}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md="2">Last Name</Label>
                      <Col md="10">
                          <Field className="form-control" name='lastName'
                          placeholder='Last Name' />
                      </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="phoneNum" md='2'>Phone</Label>
                      <Col md='10'>
                          <Field className='form-control' name='phoneNum' 
                          placeholder='Phone Number' />
                      </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md='2'>Email</Label>
                      <Col md='10'>
                          <Field className='form-control' name='email' 
                          placeholder='Email' />
                      </Col>
                </FormGroup>
                <FormGroup row>
                  <Label check md={{size: 4, offset: 1}}>
                      <Field name='agree' type='checkbox' className='form-check-input' /> {' '} May we contact you ?
                  </Label>
                  <Col md='7'>
                      <Field className='form-control' as='select' name='contactType'>
                          <option>By Phone</option>
                          <option>By Email</option>

                      </Field>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md='2'>message</Label>
                  <Col md='10'>
                    <Field className='form-control' name='message' as='textarea' rows='12' />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 10, offset: 2}} className='d-flex justify-items-start'>
                    <Button type='submit' color="primary">Send Message</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    );
  };

export default ContactPage;
