import { useState } from "react";
import { Nav,NavItem,Navbar,Collapse,NavbarToggler,NavLink,NavbarBrand } from "reactstrap";
import React from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
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
              <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
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
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Navigation