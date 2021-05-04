import React from 'react';
import B_tree from '../../static/image/bz-tree-1.png';

class BzIntroduce extends React.Component {
    render() {
        return (
            <div className="breeze-main breeze-margin-top-50">
                <div className="breeze-theme bz-left app-bz-treewrap">
                    <img src={B_tree} className="app-bz-tree" alt="breeze-cfx" />
                </div>
                <div className="breeze-theme bz-right app-text-center">
                    <div className="bz-subtitle  app-text-center">
                        Breeze is a transaction privacy protocol based on zkSNARKs
    </div>

                    <div className="bz-text app-text-padding">
                        Breeze is built to address these problems and aims to provide
                        enhanced economic incentives. Breeze is a cross-chain, non-custodial,
                        universal privacy-preserving protocol with the decentralized governance.
                        Breeze applies zkSNARKs to enable transactional privacy for all DeFi
                        componentsking the on-chain link between depositor and recipient addresses.
                        It uses a smart contract that accepts coins/tokens deposits, which can be
                        withdrawn by a different address. Whenever an asset is withdrawn from
                        Breeze, there is no way to link the withdrawal to the deposit for absolute
                        privacy.
    </div>
                </div>

            </div>
        );
    }
}

export default BzIntroduce;