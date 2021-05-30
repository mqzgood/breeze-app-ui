import React , { useState } from "react";
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Table,
  Button,
} from "react-bootstrap";
import BreezeNavWallet from "../layout/breeze-nav-wallet";
import myContext from "../public/createContext";
import BreezeFoot from "../layout/breeze-foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Dao() {
    const [account, setAccount] = useState("-1");

  return (
    <div>
      <myContext.Provider value={{ setAccount }}>
                <BreezeNavWallet account={account} />
            </myContext.Provider>


      <div className="breeze-main breeze-margin-top-50">
        <div className="bz-title app-text-center">Proposals</div>
      </div>

      <div className="app-text-padding breeze-margin-top-50">
     

        <Container fluid="md" className="dapp-stats mining-stats">
                    <Row>
                        <Col>
                            <Card className="dao-info">
                            
                                    <p className="bz-subtitle bz-list-info">Proposal #1:Test Breeze Voting on Conflux</p>
                                    <div className="dao-bottom">
                                        <span><i className="dao-state closed">Closed</i></span>
                                        <span>Start Date: 22/5/2021</span>
                                        <span>End Date: 2/6/2021</span>
                                        <span>Quorum: 99%</span>
                                     </div> 
                            </Card>
                        </Col> 
                    </Row>
                </Container>


      </div>

      <BreezeFoot />
    </div>
  );
}
