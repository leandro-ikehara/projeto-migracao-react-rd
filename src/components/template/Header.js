import React from "react";
import "../template/Header.css"
import { Navbar, Form, Container, Nav, NavDropdown, FormControl, Button, Row, Col, Cards } from 'react-bootstrap';

function Header (props) {
    return (
        <header>
        <>
        <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
        <div>
            <img src="https://avatars.githubusercontent.com/u/58231546?v=4" className="profile"/>
            </div>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
        </>
        </header>
    )
}

export default Header