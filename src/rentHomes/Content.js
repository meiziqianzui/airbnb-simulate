import React, { Component } from 'react';
import Questions from './Questions';
import RentCard from './RentCard';
import {Link} from 'react-router-dom';
import './renthome.css';

import Interview from '../Share/Interview';
import Renting from '../Share/Renting';

const a = [
    ["为什么选择在爱彼迎出租房源？", "不论您出租的是哪种类型的房屋或房间，爱彼迎都可以让您轻松、安全地接待旅行者。可订日期、价格、房屋守则、与房客的互动方式等，完全由您掌控。",],
    ["爱彼迎保护房东的利益","为了保护您、您的房源和物品的安全，我们为每笔预订均提供价值100万美元的财产损坏保障，以及价值100万美元的意外事件保障险。",],
    ["房客已验证","爱彼迎始终要求房客在提供某些信息后才可预订，如已验证的手机号和邮箱地址。 如果您想更安心，还可以要求房客提供其他房东的推荐语和已验证身份。"],
]

const rent = [
    ["1","免费发布房源","无需注册费用即可分享任意空间，从合用客厅到度假住宅不一而足"],
    ["2","自主决定出租方式","您可自主选择时间安排、价格和房客要求。我们将全程协助。"],
    ["3","欢迎您的首批房客","您的房源上线后，符合条件的房客会与您联系。如果您有任何问题，在房客入住前就可以给他们发消息。"],
]

const Reason = () => (
    <div className = "container">
        {
            a.map( (item,index) => (
                <div key = { index}
                     className = "inBox" >
                    <h2 style = {{  color:"#484848",
                                    fontSize:"24px",
                                    fontWeight:"800"}}>
                        {item[0]}
                    </h2>
                    <p style = {{ fontSize:"16px" }}>
                        {item[1]}
                    </p>

                    {
                        index === 1 ?
                            <Link to = {'/renthomes/safety'}  
                                  style = {{    color: "#767676",
                                                fontSize:"14px",
                                                fontFamily: "微软雅黑",
                                                fontWeight: "bold"}}>
                                了解爱彼迎如何保护房东
                            </Link>
                        :""
                    }
                </div>
            ))
        }
    </div>
)

const Steps = () => (
    <div className = "container">
        <h1 style = {{  textAlign:"center",
                        fontSize:"60px",
                        lineHeight:"64px",
                        letterSpacing:"-2px",
                        fontWeight:"bold"}}>
            出租三步走
        </h1>
        {
            rent.map( (item,index) => (
            <div key = {index}
                 className = "inBox">
                <div style = {{ width:"50px",
                                height:"50px",
                                color:"white",
                                fontSize:"40px",
                                lineHeight:"50px",
                                textAlign:"center",
                                borderRadius:"50%",
                                margin:"30px 0 25px",
                                backgroundColor:"#008489"}}>
                    {item[0]}
                </div>

                <h2 style = {{  color:"#484848 ",
                                fontSize:"24px",
                                fontWeight:"bold",
                                marginBottom:"20px"}}>
                    { item[1] }
                </h2>

                <p style = {{ fontSize:"16px" }}>
                    { item[2] }
                </p>

                {
                    index === 2 ?
                        <Link   to = '/renthomes/setup/'
                                style = {{  color: "#767676",
                                            fontFamily: "微软雅黑",
                                            fontSize:"14px",
                                            fontWeight: "bold"}}>
                            了解如何开始出租
                        </Link>
                    :null
                }
            </div>
        ))
        }
    </div>
)

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
render() {
return (
    <div>
        <div style = {{ height:"600px",
                        width:"85%",
                        margin:"0 7.5%",
                        overflow:"hidden",
                        backgroundImage: `url(${ this.props.img })`}}>
            <RentCard income = { this.props.income }/>           
        </div>

        <Reason/>

        <Steps/>

        <Interview data = { this.props.data }/>

        <Questions/>

        <Renting rentImg = { this.props.rentImg }/> 

    </div>            
);
}
}

export default Content;