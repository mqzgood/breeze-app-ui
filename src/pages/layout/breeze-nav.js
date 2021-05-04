import React from 'react'; 
import {  Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class BreezeNav extends React.Component {
    render() {
        return ( 

                <Nav className="mr-auto">
                    <Nav.Link target="_blank" href="/pages/forum/index">forum</Nav.Link>
                    <Nav.Link target="_blank" href="/pages/forum/index">Stats</Nav.Link>
                    <Nav.Link target="_blank" href="/pages/forum/index">FAQ</Nav.Link>
                    <Nav.Link target="_blank" href="/pages/forum/index">DAO</Nav.Link>
                    <NavDropdown title="Info" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Tutorial</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Privacy Tips</NavDropdown.Item>
                    </NavDropdown>
                </Nav>   
        );
    }
}

export default BreezeNav;