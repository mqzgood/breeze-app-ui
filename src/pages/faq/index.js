import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Table,
  Button,
} from "react-bootstrap";
import BreezeNavLaunch from "../layout/breeze-nav-launch";
import BreezeFoot from "../layout/breeze-foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { list } from "./question";

export default function Faq() {
  const [qList, setQList] = useState(list);

  return (
    <div>
      <BreezeNavLaunch />

      <div className="breeze-main breeze-margin-top-50">
        <div className="bz-title app-text-center">
          Frequently asked questions
        </div>
      </div>

      <div className="app-text-padding breeze-margin-top-50">
        <Accordion className="bz-mining-Card">
          {qList.map((item, index) => (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={item.title}>
                <p className="bz-subtitle bz-list-info"> 
                  {item.title}
                  <span className="mining-down"></span>
                </p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.title}>
                <Card.Body>
                  <div className="mining-from">{item.memo}</div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>

      <BreezeFoot />
    </div>
  );
}
