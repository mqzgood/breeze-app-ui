import React, { useState, useEffect } from 'react';
import { Form, Tabs, Tab, Container, Row, Col, Card, Accordion, Table, Button } from 'react-bootstrap';
// import { util } from 'js-conflux-sdk'  
import myContext from "../public/createContext";
import BreezeNavWallet from '../layout/breeze-nav-wallet';
import BreezeFoot from '../layout/breeze-foot'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pool.css'
import { miningLiquidity, anonymityPools } from "./tokens";
// class MiningPool extends React.Component{  
// render(){
//         return(
//         <div>
//              <BreezeNavWallet />
//         </div>
//         );
//     }
// }
//export default MiningPool;

export default function MiningPool() {
    const [account, setAccount] = useState("-1");
    const [miningLiq, setMiningLiq] = useState(miningLiquidity);
    const [anonyPools, setAnonyPools] = useState(anonymityPools);
    // 
    // async function openConfluxPortal() { 
    // }

    return (
        <div>
            {/* <myContext.Provider value={{ setAccount, openConfluxPortal }}> */}
            <myContext.Provider value={{ setAccount }}>
                <BreezeNavWallet account={account} />
            </myContext.Provider>

            <div className="breeze-main breeze-margin-top-30">
                <Container fluid="md" className="dapp-stats mining-stats">
                    <Row>
                        <Col sm>
                            <Card >
                                <Card.Body>
                                    {/* <Card.Text>Add to ConfluxPortal</Card.Text>
                                    <Card.Text>Add to PancakeSwap</Card.Text> */}
                                    <Card.Title>Breeze Earned</Card.Title>
                                    <Card.Text>***</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Current TVL($)</Card.Title>
                                    <Card.Text>319,224,542.27</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Token Price($)</Card.Title>
                                    <Card.Text>73.51</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Created by Mining</Card.Title>
                                    <Card.Text>180,0888</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </Container>

            </div>

            <div className="breeze-main mining-opt-box">
                 <a className="add-confluxportal"  href="#">Add to ConfluxPortal</a>
                 <a className="add-moonswap" href="#">Add to MoonSwap</a>
            </div>

            <div className="mining-wrap app-text-padding breeze-margin-top-50">
                <Tabs defaultActiveKey="Deposit" transition={false} id="bz-noanim-tab" className="bz-mining-tab">
                    <Tab eventKey="Deposit" title="Deposit">
                        <Table className="bz-mining-tableheader breeze-margin-top-30">
                            <thead>
                                <tr>
                                    <th className="width-33">Liquidity Mining</th>
                                    <th className="width-33">APY</th>
                                    <th className="width-33">TVL</th>
                                </tr>
                            </thead>
                        </Table>

                        <Accordion className="bz-mining-Card">
                            {
                                miningLiq.map((item, index) => (
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey={item.name}>
                                            <Table className="bz-mining-tbody">
                                                <tbody>
                                                    <tr>
                                                        <td className="width-33">
                                                            <div className="td-tokenname">
                                                                <img src={item.img} alt="" className="mining-token-ico" />
                                                                <span className="mining-param">
                                                                    {item.name}&nbsp;LP
                                                            </span>
                                                            </div>
                                                        </td>
                                                        <td className="width-33 mining-param">{item.apy}%</td>
                                                        <td className="width-33 mining-param">${item.tvl}
                                                            <span className="mining-down"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={item.name}>
                                            <Card.Body>

                                                <div className="mining-from">
                                                    <div className="from-item from-balance">
                                                        <p>Balance: 0 LP</p>
                                                        <div className="from-text">
                                                            <input type="number" value="0" />
                                                            <Button variant="link">Max</Button>
                                                        </div>
                                                        <div className="from-btn">
                                                            <Button variant="warning" size="lg" block disabled>
                                                                STAKE
  </Button>
                                                        </div>
                                                    </div>
                                                    <div className="from-item from-staked">
                                                        <p>Staked: 0 LP</p>
                                                        <div className="from-text">
                                                            <input type="number" value="0" />
                                                            <Button variant="link">Max</Button>
                                                        </div>
                                                        <div className="from-btn">
                                                            <Button variant="warning" size="lg" block disabled>
                                                                UNSTAKE
  </Button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p>
                                                    <span>BREEZE/CFX Pool Token</span>
                                                    <a target="_blank" className="bz-btn-right color-yellow" href="https://moonswap.fi/">Add Liquidity</a>
                                                </p>
                                                <p className="bz-line"></p>
                                                <p>
                                                    <span>Earned：</span><span>0 BREEZE</span>
                                                    <Button variant="secondary" className="bz-btn-right mining-claim">Claim</Button>
                                                </p>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))
                            }
                        </Accordion>

                        <Table className="bz-mining-tableheader breeze-margin-top-50">
                            <thead>
                                <tr>
                                    <th className="width-33">Anonymity Pools</th>
                                    <th className="width-33">APY</th>
                                    <th className="width-33 bz-text-center">TVL</th>
                                </tr>
                            </thead>
                        </Table>

                        <Accordion className="bz-mining-Card">
                            {
                                anonyPools.map((item, index) => (
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey={item.name}>
                                            <Table className="bz-mining-tbody">
                                                <tbody>
                                                    <tr>
                                                        <td className="width-33">
                                                            <div className="td-tokenname">
                                                                <img src={item.img} alt="" className="mining-token-ico" />
                                                                <span className="mining-param">
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="width-33 mining-param">{item.apy}%</td>
                                                        <td className="width-33 mining-param">${item.tvl}
                                                            <span className="mining-down"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={item.name}>
                                            <Card.Body>
                                            <p>
                                            <Button variant="warning">Approve {item.name}</Button>
                                                    <span className="color-grey">&nbsp;&nbsp;Insufficient {item.name} Balance </span>
                                                </p>

                                                <div className="mining-from">
                                                    <div className="from-item from-balance">
                                                        <p>Balance: 0 LP</p>
                                                        <div className="from-text">
                                                            <input type="number" value="0" />
                                                            <Button variant="link">Max</Button>
                                                        </div>
                                                        <div className="from-btn">
                                                            <Button variant="warning" size="lg" block disabled>
                                                                STAKE
  </Button>
                                                        </div>
                                                    </div>
                                                    <div className="from-item from-staked">
                                                        <p>Staked: 0 LP</p>
                                                        <div className="from-text">
                                                            <input type="number" value="0" />
                                                            <Button variant="link">Max</Button>
                                                        </div>
                                                        <div className="from-btn">
                                                            <Button variant="warning" size="lg" block disabled>
                                                                UNSTAKE
  </Button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <p>
                                                    <span>BREEZE/CFX Pool Token</span>
                                                    <a target="_blank" className="bz-btn-right color-yellow" href="https://moonswap.fi/">Add Liquidity</a>
                                                </p>*/}
                                                <p className="bz-line"></p> 
                                                <p>
                                                    <span>Earned：</span><span>0 BREEZE</span>
                                                    <Button variant="secondary" className="bz-btn-right mining-claim">Claim</Button>
                                                </p>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))
                            }
                        </Accordion>


                    </Tab>
                    <Tab eventKey="Withdraw" title="Withdraw">
                        456
                </Tab>
                    <Tab eventKey="Note" title="Note">
                        789
                </Tab>
                </Tabs>
            </div>


            <BreezeFoot />

        </div>
    );

};