import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../macro/Sidebar.css'


function Sidebar() {

    return(
        <>

<Navbar className="sidebar" variant="light">
    <Nav className="me-auto">
        <Navbar.Brand href="/Main">Dashboard</Navbar.Brand>
      <Nav.Link href="/Cards">Default Cards</Nav.Link>
      <Nav.Link href="/Pricing">Pricing Tables</Nav.Link>
      <Nav.Link href="/Blocks">Content Blocks</Nav.Link>
      <Nav.Link href="/Forms">Forms</Nav.Link>
    </Nav>
    </Navbar>
 
</>
    )
}

export default Sidebar