import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BreezeNav extends React.Component {
    render() {
        return (

            <div>
                <Navbar bg="none" expand="lg" className="breeze-nav">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="breeze-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link target="_blank" href="/pages/forum/index">forum</Nav.Link>
                            <Nav.Link target="_blank" href="/pages/forum/index">Stats</Nav.Link>
                            <Nav.Link target="_blank" href="/pages/forum/index">FAQ</Nav.Link>
                            <NavDropdown title="Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Tutorial</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Privacy Tips</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <a href="/pages/mining/pool">
                            <Button variant="outline-warning" className="breeze-btn-bord">Launch App</Button>
                        </a>

                    </Navbar.Collapse>
                </Navbar>

                {/* <Link to="/" style={{ color: 'black' }}>
                        <div>点击跳转到首页</div>
                    </Link>
                    <Link to="/pages/forum/index/" style={{ color: 'black' }}>
                        <div>点击跳转到forum</div>
                    </Link>
                    <Link to="/Page3/" style={{ color: 'black' }}>
                        <div>点击跳转到Page3</div>
                    </Link>
                    <Link to="/Page4/" style={{ color: 'black' }}>
                        <div>点击跳转到Page4</div>
                    </Link>
                    <Link to="/cfx/" style={{ color: 'black' }}>
                        <div>cfx</div>
                    </Link> */}
            </div>

        );
    }
}

export default BreezeNav;