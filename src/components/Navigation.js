import { useState } from "react";
import { Nav, NavItem, Navbar, Collapse, NavbarToggler, NavbarBrand, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  return (
    <Navbar color="black" dark expand="md" sticky="top">
      <NavbarBrand className='navigationtxt' href="/">Navigation</NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" onClick={toggleLoginModal}>
              <i className="fa fa-sign-in fa-lg" /> Login
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Modal isOpen={loginModalOpen} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="Enter your username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleLoginModal}>Login</Button>
          <Button color="secondary" onClick={toggleLoginModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Navbar>
  );
}

export default Navigation;
