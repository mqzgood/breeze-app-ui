import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, Navbar,Form } from 'react-bootstrap';
import BreezeNav from "./breeze-nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../static/ico/logo-breeze.png";

class BreezeNavWallet extends React.Component {
    render() {
        return (

            <div>
                <Navbar bg="none" expand="lg" className="breeze-nav">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className="d-inline-block align-top breeze-logo" alt="breeze"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="breeze-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <BreezeNav />

                        <Form inline>
                            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                            <Button variant="warning">Connect Wallet</Button>
                        </Form>

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

export default BreezeNavWallet;