import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import * as mealplansAPI from "../api/mealplan";
import { useSelector } from "react-redux";
import { Search } from "react-bootstrap-icons";

function Header() {
  const [mealplans, setMealplans] = useState([]);
  const [cookbooks, setCookbooks] = useState([]);
  const userInformation = useSelector((store) => store.userInformation);
  useEffect(() => {
    fetch(`http://localhost:8080/api/cookbook/all`) //TODO this is going to have to change to use user
      .then((response) => response.json())
      .then((data) => setCookbooks(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/mealplan/all`) //TODO this is going to have to change to use user
      .then((response) => response.json())
      .then((data) => setMealplans(data));
  }, []);

  const cookbookDropdownItems = () => {
    const dropdownItems = cookbooks.map((cookbook) => (
      <NavDropdown.Item key={cookbook.id} href={`/cookbooks/${cookbook.id}`}>
        {cookbook.name}
      </NavDropdown.Item>
    ));

    dropdownItems.push([
      <NavDropdown.Divider />,
      <NavDropdown.Item key="all" href="/cookbooks">
        View All Cookbooks
      </NavDropdown.Item>,
      <NavDropdown.Item key="new" href="/cookbooks/new">
        Create New Cookbook
      </NavDropdown.Item>,
    ]);

    return dropdownItems;
  };

  const mealPlanDropdownItems = () => {
    const dropdownItems = mealplans.map((mealplan) => (
      <NavDropdown.Item key={mealplan.id} href={`/mealplans/${mealplan.id}`}>
        {mealplan.name}
      </NavDropdown.Item>
    ));

    dropdownItems.push([
      <NavDropdown.Divider />,
      <NavDropdown.Item key="all" href="/mealplans">
        View All Mealplans
      </NavDropdown.Item>,
      <NavDropdown.Item key="new" href="/mealplans/new">
        Create New Mealplan
      </NavDropdown.Item>,
    ]);

    return dropdownItems;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className="header">
        <Navbar.Brand href="/" style={{ marginLeft: "1rem" }}>
          Cakebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="My Cookbooks" id="basic-nav-dropdown">
              {cookbookDropdownItems()}
            </NavDropdown>
            <NavDropdown title="Mealplans" id="basic-nav-dropdown">
              {mealPlanDropdownItems()}
            </NavDropdown>
            <Navbar.Toggle />
            <Nav.Item>
              <Nav.Link href="/search">
                <Search />
                Search All Recipes
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {!Object.keys(userInformation).length ? (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <span>/</span>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </>
          ) : (
            <span>Welcome, {userInformation.username}!</span>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
