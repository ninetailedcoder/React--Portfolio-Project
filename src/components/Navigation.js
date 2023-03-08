import { useState } from "react";
import { Nav, NavItem, Navbar, Collapse, NavbarToggler, NavbarBrand, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./loginModal";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar color="black" dark expand="md" sticky="top">
      <NavbarBrand className='navigationtxt' href="/">Navigation</NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </Link>
          </NavItem>
          <NavItem>
            <LoginModal/>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
