import React from 'react'; 
import {  Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class BreezeNav extends React.Component {
    render() {
        return ( 

                <Nav className="mr-auto">
                    <Nav.Link target="_blank" href="https://forum.conflux.fun/">forum</Nav.Link>
                    <Nav.Link href="#action/1.1">Stats</Nav.Link>
                    <Nav.Link href="#action/1.2">FAQ</Nav.Link>
                    <Nav.Link href="#action/1.3">DAO</Nav.Link>
                    <Nav.Link href="#action/1.4">bNFT</Nav.Link>
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