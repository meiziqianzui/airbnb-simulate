import React, { Component } from 'react';
import './renthome.css';
import Content from './Content';
import Footer from '../Share/Footer';
import Svg from '../Share/Svg';
import Logo from '../Share/Logo';

import { Divider } from 'antd';

const Header = (props) => (
    <div style = {{ width:"100%",
                    height:"80px",
                    backgroundColor:"white",
                    borderRadius:"5px",
                    borderBottom:"solid 1px #e6e6fa",
                    position:"sticky",
                    top:"0"}}>
        <Logo/>
        
        <div style = {{ float:"right",
                        marginRight:"100px",
                        lineHeight:"80px" }}>
            <span style={{ fontSize:"16px" }}>
                预期月收入
            </span> 

            <Svg/>
            
            <span style = {{    fontSize:"28px",
                                fontWeight:"bold" }}>
                {props.income}
            </span>                  
        </div>
    </div>
)

class Renthomes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            income:"￥9,232",
            img:"https://z1.muscache.cn/pictures/61f948dd-aab5-4e32-b9d2-1e849ae180b0.jpg",
            rentImg:"https://z1.muscache.cn/pictures/6ccbb3ea-fd7d-4681-ad4d-1d50ed595e34.jpg",
            interview:{
                img:"https://z1.muscache.cn/pictures/2b6774ff-f366-4c1a-b941-198b92e87ffd.jpg" ,
                reason:"出租房源帮助我支付了新厨房和其他装修项目的费用。」。",
                description:"Tessa在伦敦出租房屋赚取额外收入"
            }
        }
    }
    render() {
        return (
            <div>
                
                <Header income = {this.state.income} />
                
                <Content img = {this.state.img} 
                         rentImg = {this.state.rentImg} 
                         income = {this.state.income}
                         data = {this.state.interview} />

                <Divider/>

                <Footer/>

            </div>
        );
    }
}

export default Renthomes;