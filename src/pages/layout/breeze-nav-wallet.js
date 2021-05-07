import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Navbar, Form ,Dropdown} from 'react-bootstrap';
import BreezeNav from "./breeze-nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../static/ico/logo-breeze.png";
import myContext from "../public/createContext";
import { replaceStr } from '../../utils/common'

const BreezeNavWallet = (props = {}) => {
    const { setAccount } = useContext(myContext);//  
    useEffect(() => {
        // if (props.account == "-1") {
        //     openConfluxPortal();
        // }
        // console.log(confluxParams)
        // console.log(account)
    }, []);

    //open wallet
    async function openConfluxPortal() {
        if (checkConfluxPortal()) {
            const accounts = await window.conflux.enable();
            setAccount(accounts[0] || "");
            // setTimeout(() => {
            //     if (account == "-1") {
            //         openConfluxPortal();
            //     } 
            // }, 2000); 
        } else {
            alert("No wallet installed");
        }
    }
    //
    function checkConfluxPortal() {
        // setConfluxParams(window.conflux);
        if (typeof window.conflux == 'undefined' || !window.conflux) {
            return false;
        }
        if (!window.conflux.isConfluxPortal) {
            // console.debug('Unknown Conflux.')
            return false;
        }
        return true;

    }
    
    
  const renderPortalButton = () => { 
    if (props.account!=="-1") {
      return (
        // <Button variant="warning"> {replaceStr(props.account, '****')}</Button> 
        <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
        {replaceStr(props.account, '****')}
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Copy Address</Dropdown.Item>
          <Dropdown.Item href="#/action-2">View on Confluxscan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
    } else {
      return (
        <Button variant="warning" onClick={openConfluxPortal}>Connect Wallet</Button> 
      )
    }
  }

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
                       {renderPortalButton()}
                    </Form>

                </Navbar.Collapse>
            </Navbar>

            
        </div>

    );

}

export default BreezeNavWallet;