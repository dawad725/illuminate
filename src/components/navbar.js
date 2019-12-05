import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Pnav extends Component {



    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Project EE</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )

    }
}

export default Pnav;