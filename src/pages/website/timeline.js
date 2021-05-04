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
                            <div class="meta-details">Sharon Stone</div>
                        </div><div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2022<span>Q1</span></div>
                            <div class="timeline-bar"></div>
                        </div>
                        <div class="timeline-content">
                            <h2 class="content-title">Passover</h2>
                            <div class="content-details">
                                <p>Passover marks the Israelites' liberation from slavery and their exodus                             from Egypt around 3000 years ago. They may do this by inviting people into their homes or                             giving them a gift basket.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons"><div class="meta-details">Billy Matzeger</div></div>
                        <div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021<span>Q4</span></div>
                            <div class="timeline-bar"></div>
                        </div><div class="timeline-content">
                            <h2 class="content-title">Easter Sunday</h2>
                            <div class="content-details">
                                <p>Easter Sunday is an important day in the Christian church calendar because it                             celebrates Jesus Christ's resurrection. The Easter date depends on the ecclesiastical                             approximation of the March equinox.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons">
                            <div class="meta-details">Pierre Morgul</div>
                        </div>
                        <div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021 <span>Q3</span></div>
                            <div class="timeline-bar"></div>
                        </div>
                        <div class="timeline-content">
                            <h2 class="content-title">Valentine's Day</h2>
                            <div class="content-details">
                                <p>Valentine's Day is celebrated on February 14. It is a festival of romantic love and                             many people give cards, letters, flowers or presents to their spouse or partner.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-post">
                        <div class="timeline-meta for-large-icons">
                            <div class="meta-details">Chris Williams</div>
                        </div><div class="timeline-icon icon-larger iconbg-orange icon-color-white">
                            <div class="icon-placeholder">2021 <span>Q2</span></div>
                            <div class="timeline-bar"></div>
                        </div><div class="timeline-content">
                            <h2 class="content-title">New Year's Day</h2>
                            <div class="content-details">
                                <p>New Year's Day falls on January 1 and marks the start of a new year according to the Gregorian calendar.                             It marks the end of New Year's Eve celebrations across and Worldwide and gives all people a chance to                             remember the previous year.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BzTimeline;