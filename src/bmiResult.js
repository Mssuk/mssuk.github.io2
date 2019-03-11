import React, { Component } from 'react';
import { VictoryBar, VictoryStack } from 'victory';
class bmiResult extends Component {

    judgeFunc = () => {
    if(this.props.BMI<18.5)
    {
        return "저체중"    
    }
    else if(this.props.BMI<23)
    {
        return "정상"
    }
    else if(this.props.BMI<25)
    {
        return "비만 전 단계"
    }
    else if(this.props.BMI<30)
    {
        return "1단계 비만"
    }
    else if(this.props.BMI<35)
    {
        return "2단계 비만"
    }
    else if(this.props.BMI>=35)
    {
        return "3단계 비만"
    }
    
}
    render()
    {
        return(
            <div>
            <div style={{fontSize: "1.5rem", textAlign:"center"}}>
            당신의 BMI 지수는 <b>{this.props.BMI}</b>({this.judgeFunc()}) 입니다.
            </div>
            </div>
        );
    }
}

export default bmiResult;