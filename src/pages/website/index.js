import React from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import BreezeNav from '../layout/breeze-nav';

class WebSiteIndex extends React.Component {
    render() {
        return (
            <div>
                <BreezeNav />
                <div>
                    <Container className="breeze-container">
                        <Row  className="justify-content-md-center">
                            <Col sm>1 of 2</Col>
                            <Col  sm>2 of 2</Col>
                        </Row>
                       
                    </Container>
                </div>

            </div>
        );
    }
}

export default WebSiteIndex;