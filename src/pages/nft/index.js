import React from 'react';
import { Form, Col,Button } from 'react-bootstrap';
// import { util } from 'js-conflux-sdk'  
//import myContext from "../public/createContext";
import BreezeNavLaunch from '../layout/breeze-nav-launch';
import BreezeFoot from '../layout/breeze-foot'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function MiningPool() {
    // const [account, setAccount] = useState("-1");

    return (
        <div>
            <BreezeNavLaunch />

            <div className="breeze-main breeze-margin-top-50">
                <div className="bz-title app-text-center">
                    b-NFT
    </div>
            </div>
            <div className="bz-line"></div>
            <div className="mining-wrap app-text-padding breeze-margin-top-50">
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} controlId="swapname" md="2"> 
                            <Form.Control as="select" defaultValue="">
                                <option>Moonswap</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="nftid" md="7"> 
                            <Form.Control  placeholder="NFT id" />
                        </Form.Group>

                      
                        <Form.Group as={Col} md="3" className="app-text-center"> 
                        <Button variant="warning">CHECK</Button>{' '}
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
            <BreezeFoot />

        </div>
    );

};