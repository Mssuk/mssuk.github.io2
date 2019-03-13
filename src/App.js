import React, { Component } from 'react';
import { Container, Row, Col , Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import './App.css';
import CalPart  from './calPart';
import BmiResult from './bmiResult';
import bimanImg from './img/biman.png';

class App extends Component {
  state = {
    bmi : '',
  }

  handleCreate = (data) => {
    this.setState({
      bmi : (data.weight/ ((data.height / 100) * (data.height / 100))).toFixed(2)
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="header"> BMI 계산기 (체질량 지수) </Col>
        </Row>
        <Row>
          <Col md={{size:6, offset: 3}} className="subHeader">
          신체질량지수는 BMI(Body Mass Index)라고 부르며, 키와 몸무게를 이용하여 비만 정도를 추정하는 계산법이다.
          </Col>
        </Row>

        <Row>
          <Col md={{size:4, offset: 4}} className="calPart">
          <CalPart onCreate={this.handleCreate} />
        </Col>
        </Row>

      <Row>
        <Col md={{size:7, offset: 3}} className="bimanImg">
          <img style={{maxHeight:"68%"}} src={bimanImg}/>
        </Col>
        </Row>

        <Row>
          <Col md={{size:6, offset:3}} className="resultPart">
          {this.state.bmi ==='' ? (<div></div>) : (<BmiResult BMI={this.state.bmi}/>)}
          </Col>
          </Row>

      </Container>
    );
  }
}

export default App;
