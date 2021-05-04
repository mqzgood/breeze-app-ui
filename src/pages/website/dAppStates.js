import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class BzdAppStates extends React.Component {
    render() {
        return (
<div className="breeze-main">
<div className="bz-title breeze-margin-top-define app-text-center">
    dApp Stats
    </div>

<Container fluid="md" className="dapp-stats">
    <Row>
        <Col sm>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>TVL</Card.Title>
                    <Card.Text>$319,224,542.27</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>BREEZE PRICE</Card.Title>
                    <Card.Text>$73.51</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>CONFLUX ACTIVE ADDRESSES</Card.Title>
                    <Card.Text>10,088</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

</div>
        );
    }
}

export default BzdAppStates;