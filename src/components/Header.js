import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../app/img/final logo.png";

const Header = () => {
  return (
    <Container className="header rounded">
      <Row>
        <Col md="3">
          <a href="/">
            <img src={logo} alt="Company logo" />
          </a>
        </Col>
        <Col className="text-center mt-5" md="9">
          <Card className="bg-transparent border-0">
            <CardBody className="card-transparent">
              <blockquote className="blockquote card-transparent">
                <q>
                  Commited to providing our community with the nourishment and
                  essentials they need to stay well in the continued flight for
                  racial equality and civil injustice{" "}
                </q>
                <footer className="blockquote-footer text-center mt-2">
                  Rachel Nelson: Twin Cities Relief Initiative Founder
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center float-end">
          <a href="https://donorbox.org/test-orginization" target='_blank' className="btn bg-dark">
            Donations
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
