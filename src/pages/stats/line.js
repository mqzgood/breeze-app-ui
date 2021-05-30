import React, { Component } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
// import ReactEchartsCore from 'echarts-for-react/lib/core';
// import echarts from 'echarts/lib/echarts';
import ReactEcharts from "echarts-for-react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

class IEcharts extends Component {
   
  getOption = (opt) => {
    const option = {
        title: {
            text: opt.titleText,
            textStyle:{
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'axis'
        },
      xAxis: {
        type: "category",
        data:opt.xAxisData,
        axisLabel:{ color:"#fff",fontSize:13}
      },
      yAxis: {
        type: "value",
        axisLabel:{ color:"#fff",fontSize:13}
      },
      series: [
        {
          data: opt.seriesData,
          type: "line",
          lineStyle:{color:"#ffc107"},
          itemStyle:{color:"#ffde7c"}
        },
      ],
    };
    return option;
  };

 
  render() {
    const opt01={
        titleText:'Tokens Deposited in Each Pool',
        xAxisData: ["2021/05", "2021/06", "2021/07", "2021/08", "2021/09", "2021/10", "2021/11"],
        seriesData: [1221, 5002, 6022, 6800, 9778, 8033, 8661],
    };
    const opt02={
        titleText:'Circulating Supply of Breeze Tokens',
        xAxisData: ["05/1", "05/8", "05/15", "05/23", "05/30", "06/6", "06/13"],
        seriesData: [100, 15002, 16022, 16800, 19778, 112033, 113661],
    };
    const opt03={
        titleText:'USD in Value',
        xAxisData: ["05/1", "05/8", "05/15", "05/23", "05/30", "06/6", "06/13"],
        seriesData: [6000, 5000, 7000, 1600, 1300, 9800, 5000],
    };
    const opt04={
        titleText:'CFX in pool',
        xAxisData: ["05/1", "05/8", "05/15", "05/23", "05/30", "06/6", "06/13"],
        seriesData: [30000, 50000, 70000, 168000, 138000, 98000, 138000],
    };
    return (
      <div>
        <Container fluid="md" className="dapp-stats">
          <Row>
            <Col sm>
              <Card>
                <Card.Body>
                  <ReactEcharts
                    option={this.getOption(opt01)}
                    style={{ height: "300px", width: "100%" }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Body>
                  <ReactEcharts
                    option={this.getOption(opt02)}
                    style={{ height: "300px", width: "100%" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="breeze-margin-top-50"></div>
          <Row>
            <Col sm>
              <Card>
                <Card.Body>
                  <ReactEcharts
                    option={this.getOption(opt03)}
                    style={{ height: "300px", width: "100%" }}
                  />
                </Card.Body>
              </Card>
            </Col>
         
            <Col sm>
              <Card>
                <Card.Body>
                  <ReactEcharts
                    option={this.getOption(opt04)}
                    style={{ height: "300px", width: "100%" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default IEcharts;
