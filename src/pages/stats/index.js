import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import BreezeNavLaunch from "../layout/breeze-nav-launch";
import BreezeFoot from "../layout/breeze-foot";
import IEcharts from "./line";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
 
export default function Stats() {
  // const [account, setAccount] = useState("-1");
 
  return (
    <div>
      <BreezeNavLaunch />

      <div className="breeze-main breeze-margin-top-50">
        <div className="bz-title app-text-center">
          Breeze Protocol Analytics
        </div>
      </div>

      <div className="app-text-padding breeze-margin-top-50">
        <Container fluid="md" className="dapp-stats">
          <Row>
            <Col sm>
              <Card>
                <Card.Body>
                  <Card.Title>Total CFX deposited</Card.Title>
                  <Card.Text>166778899.55</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Body>
                  <Card.Title>Total cUSDT deposited</Card.Title>
                  <Card.Text>$3877,132</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Body>
                  <Card.Title>Total CYC supply</Card.Title>
                  <Card.Text>776,088</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Body>
                  <Card.Title>Liquidity Mining APY</Card.Title>
                  <Card.Text>991.37%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="breeze-main breeze-margin-top-50">
          <IEcharts/>
      </div>
      <BreezeFoot />
    </div>
  );
}
