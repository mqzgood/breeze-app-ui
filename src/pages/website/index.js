import React from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import BreezeNav from '../layout/breeze-nav';
import B_cfx from '../../static/image/breeze-cfx.svg';

class WebSiteIndex extends React.Component {
    render() {
        return (
            <div>
                <BreezeNav />
                <div>
                    
                    <Container className="breeze-container">
                        <Row  className="justify-content-md-center">
                            <Col sm>1 of 2</Col>
                            <Col  sm>
                            <img src={B_cfx} className="App-View" alt="breeze-cfx" />
                            </Col>
                        </Row>
                       
                    </Container>
                </div>

            </div>
        );
    }
}

export default WebSiteIndex;