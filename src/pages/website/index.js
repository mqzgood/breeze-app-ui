import React from 'react';
import { Button } from 'react-bootstrap';
import BreezeNavLaunch from '../layout/breeze-nav-launch';
import BreezeFoot from '../layout/breeze-foot'
import BzIntroduce from './introduce'
import BzTimeline from './timeline';
import BzdAppStates from "./dAppStates";
import B_cfx from '../../static/image/breeze-cfx.svg';
import './index.css';

class WebSiteIndex extends React.Component {
    render() {
        return (
            <div>
                <BreezeNavLaunch />
                <div className="breeze-main breeze-margin-top-50">
                    <div className="breeze-theme bz-right app-text-center">
                        <img src={B_cfx} className="app-View" alt="breeze-cfx" />
                    </div>
                    <div className="breeze-theme bz-left">
                        <div className="bz-title breeze-margin-top-define app-text-center">
                            Breeze Protocol
                        </div>
                        <ul className="bz-subject">
                            <li>
                                A fully decentralized protocol for private transactions on Conflux.
                            </li>
                            <li>
                                zkSNARKs-based privacy protocol for all DeFi apps
                            </li>
                            <li>
                                Tokens is cross-chain
                            </li>
                        </ul>
                        <div className="app-text-center">
                            <a type="button" href="/pages/mining/pool">

                                <Button variant="outline-warning" className="breeze-btn-bord">
                                    {/* <img src={bz_ico} width="20"/> */}
                                    <span className="bz_ico"></span>
                                    <span>&nbsp;Launch App</span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bz-line breeze-margin-top-50"></div>
                <BzIntroduce />
                <div className="bz-line breeze-margin-top-50"></div>
                <BzdAppStates />
                <div className="bz-line breeze-margin-top-50"></div>
                <BzTimeline />
                {/* <div className="bz-line breeze-margin-top-50"></div> */}
                <BreezeFoot />


            </div>
        );
    }
}

export default WebSiteIndex;