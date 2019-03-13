import React, { Component } from 'react';
import { Container, Row, Col , Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

class calPart extends Component {
    
    state = {
        height: '',
        weight: '',
    };
    handleChangeHeight = (e) => {
        this.setState({
            height : e.target.value
        })    
    }
    handleChangeWeight = (e) => {
        this.setState({
            weight : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            height:'',
            weight:'',
        })
    }
    render()
    {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="myHeight">키</Label>
              <Input value={this.state.height} onChange={this.handleChangeHeight} placeholder="cm"/>
            </FormGroup>
            <FormGroup>
              <Label for="myWeight">몸무게</Label>
              <Input value={this.state.weight} onChange={this.handleChangeWeight} placeholder="kg" />
            </FormGroup>
            <Button type="submit"> 나의 BMI 지수 확인 </Button>
            </Form>
            </div>
        )
    }
} 


export default calPart;
