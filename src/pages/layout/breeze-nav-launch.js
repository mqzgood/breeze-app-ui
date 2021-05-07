import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, Navbar} from 'react-bootstrap';
import BreezeNav from "./breeze-nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../static/ico/logo-breeze.png"; 

class BreezeNavLaunch extends React.Component {
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
                       <BreezeNav/>

                        <a href="/pages/mining/pool"> 
                            <Button variant="outline-warning" className="breeze-btn-bord">Launch App</Button>
                        </a>

                    </Navbar.Collapse>
                </Navbar>
 
            </div>

        );
    }
}

export default BreezeNavLaunch;