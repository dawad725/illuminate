import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends Component {



    render() {
        return (
            <>
                <Navbar style={{ backgroundColor: '#1d4d4f' }}>
                    <Navbar.Brand href="/" className="text-light">Illuminate</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="text-light">Home</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )

    }
}

export default NavBar;