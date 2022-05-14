import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import * as cookbooksAPI from "../api/cookbook";

const cookbookDropdownItems = () => {
  
  const cookbooks = cookbooksAPI.getCookbooks();
  const dropdownItems = cookbooks.map(cookbook => <NavDropdown.Item id={cookbook.id} href={`cookbooks/${cookbook.id}`}>{cookbook.name}</NavDropdown.Item>);

  dropdownItems.push(
    [
      <NavDropdown.Divider />,
      <NavDropdown.Item href="#action/3.4">Create New Cookbook</NavDropdown.Item>
    ]
  )

  return dropdownItems;
}

function Header() {
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cakebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="My Cookbooks" id="basic-nav-dropdown">
            {cookbookDropdownItems()}
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;