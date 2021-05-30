import React from 'react';
import './timeline.css';

class BzTimeline extends React.Component {
    render() {
        return (

                <div className="breeze-main">
                <div className="bz-title breeze-margin-top-define app-text-center">
                    Roadmap
                    </div>

                <div class="jazz-timeline">

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons">
                            <div class="meta-details">Planning</div>
                        </div><div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2022<span>Q1</span></div>
                            <div class="timeline-bar"></div>
                        </div>
                        <div class="timeline-content">
                            <h2 class="content-title">Common Layer for DeFi Apps</h2>
                            <div class="content-details">
                                <p>
                                In 2022 Q1, we will be focused on the adoption of Breeze Protocol by establishing partnership with all mainstream DeFi apps and products by providing anonymity to them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons"><div class="meta-details">Planning</div></div>
                        <div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021<span>Q4</span></div>
                            <div class="timeline-bar"></div>
                        </div><div class="timeline-content">
                            <h2 class="content-title">Governance DAO</h2>
                            <div class="content-details">
                              <p>The governance DAO will be activated and take the ownership of all serving contracts to make breeze protocol fully autonomous. Voters are encourage to cross-chain vote for new anonymity pools, update the parameters, among many other initiatives.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons">
                            <div class="meta-details">Planning</div>
                        </div>
                        <div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021 <span>Q3</span></div>
                            <div class="timeline-bar"></div>
                        </div>
                        <div class="timeline-content">
                            <h2 class="content-title">Liftoff on BSC</h2>
                            <div class="content-details">
                                <p>Launch Breeze Protocol with anonymity mining and liquidity mining on BSC. Breeze tokens on BSC can be seamlessly cross-chain-transferred from/to CFX and BSC at 1:1 ration, via bridges such as ShuttleFlow</p>
                                <p>More assets will be supported by the anonymity pools on BSC via community voting.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons">
                            <div class="meta-details">Ongoing</div>
                        </div><div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021 <span>Q2</span></div>
                            <div class="timeline-bar"></div>
                        </div><div class="timeline-content">
                            <h2 class="content-title">Fair Launch on Conflux</h2>
                            <div class="content-details">
                                <p>
                                Fair launches have always been lauded as the holy grail for a cryptocurrency. We advocate strongly for a fair launch for the community. Breeze tokens will be initially distributed to community supporters without a price or absurd valuation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BzTimeline;