import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import * as cookbooksAPI from "../api/cookbook";
import * as mealplansAPI from "../api/mealplan"

const cookbookDropdownItems = () => {
  const cookbooks = cookbooksAPI.getCookbooks();
  const dropdownItems = cookbooks.map(cookbook => <NavDropdown.Item key={cookbook.id} href={`/cookbooks/${cookbook.id}`}>{cookbook.name}</NavDropdown.Item>);

  dropdownItems.push(
    [
      <NavDropdown.Divider />,
      <NavDropdown.Item key="all" href="/cookbooks">View All Cookbooks</NavDropdown.Item>,
      <NavDropdown.Item key="new" href="/cookbooks/new">Create New Cookbook</NavDropdown.Item>
    ]
  )

  return dropdownItems;
}

const mealPlanDropdownItems = () => {
  const mealplans = mealplansAPI.getMealplans();
  const dropdownItems = mealplans.map(mealplan => <NavDropdown.Item key={mealplan.id} href={`/mealplans/${mealplan.id}`}>{mealplan.week}</NavDropdown.Item>);

  dropdownItems.push(
    [
      <NavDropdown.Divider />,
      <NavDropdown.Item key="all" href="/mealplans">View All Mealplans</NavDropdown.Item>,
      <NavDropdown.Item key="new" href="/mealplans/new">Create New Mealplan</NavDropdown.Item>
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
          <NavDropdown title = "Mealplans" id = "basic-nav-dropdown">
            {mealPlanDropdownItems()}

          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;