import React from 'react'
import { Navbar, Form, FormControl, NavDropdown, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/"><Navbar.Brand>METHWORL</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Personajes</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="danger">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HomeNavbar