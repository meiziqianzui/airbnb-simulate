import React, { Component } from 'react';
import { Input, Select, Button} from 'antd';
import Svg from '../Share/Svg';
import './renthome.css';

const InputGroup = Input.Group;
const { Option } = Select;

class RentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
render() {
    const tenantNumber=[1,2,3,4,5,6,7,8,9,10]
return (
    <div style = {{ height:"80%",
                    width:"35%",
                    right:"75px",
                    padding:"30px 2%",
                    borderRadius:"5px",
                    backgroundColor:"white",
                    margin:"75px 75px 0 0",
                    float:"right"}}>
        <h1 style = {{  color:"#333333",
                        fontSize:"35px",
                        fontWeight:"800",
                        lineHeight:"40px"}}>
            来爱彼迎当房东，轻松赚取收入
        </h1> 

        <p style = {{ fontSize:"17px" }}>
            看看您可以赚取多少收入
        </p>   

        <Input  placeholder = "位置" 
                style = {{  height:"50px",
                            margin:"10px auto 20px"}}/> 
        <InputGroup compact>
            <Select id = "Listing"
                    defaultValue = "整套房源"
                    style = {{  width:"57%",
                                marginRight:"6%",
                                fontSize:"20px",
                                position:"static" }}>

                <Option value = "整套房源">整套房源</Option>
                <Option value = "独立房间">独立房间</Option>
                <Option value = "合住房间">合住房间</Option>
            </Select>
            <Select id = "tenantNumber"
                    defaultValue = "1位房客" 
                    style = {{  width:"37%",
                                position:"static" }}>
                {
                    tenantNumber.map( (item,index) => (
                        <Option value = {item}
                                key = {index} > 
                            {item}位房客
                        </Option>
                    ))
                } 
            </Select>           
        </InputGroup>
        <p style = {{   fontSize:"28px",
                        margin:"20px 20px 0 0",
                        display:"inline-block",
                        fontWeight:"bold"}}>
            {this.props.income}
        </p>  

        <Svg/>    

        <span style = {{ fontSize:"16px" }}>
            每月收入
        </span> 

        <Button type = "primary"
                style = {{  height:"50px",
                            fontSize:"20px",
                            fontWeight:"bold",
                            backgroundColor:"#FF5A5F"}}>
            开始
        </Button>   
    </div>            
);
}
}

export default RentCard;