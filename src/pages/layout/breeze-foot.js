import React from 'react';

class BreezeFoot extends React.Component {
    render() {
        return (
            <div className="breeze-main">
                <footer>
                    {/* <div className="f-breeze-token">
                    breeze token contract: cfx:aas9czfa3zswc4y835dbtu9k0w5zvry13pbgjfwdzn 
                    </div> */}
                    <div className="f-links">
                        <a target="_blank" rel="noreferrer" className="is-icon" href="/"  >
                            <i class="trnd trnd-stats"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" className="is-icon" href="/"  >
                            <i class="trnd trnd-twitter"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" className="is-icon" href="/"  >
                            <i class="trnd trnd-telegram"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" className="is-icon" href="/"  >
                            <i class="trnd trnd-github"></i>
                        </a>
                    </div>


                    <div className="f-language">
                    <span className="is-icon"  >
                            <i class="trnd trnd-en"></i>
                        </span>
                        <span className="is-icon"  >
                            <i class="trnd trnd-cn"></i>
                        </span>
                    </div> 
                    </footer>
            </div>

        );
    }
}

export default BreezeFoot;