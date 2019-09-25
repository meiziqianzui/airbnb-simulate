import React, { Component } from 'react';
import Footer from '../Share/Footer';
import Notice from './Components/Notice';
import Evaluation from './Components/Evaluation';
import Landlord from './Components/Landlord';

import { Anchor, Divider } from 'antd';
const { Link } = Anchor;

const num=[1,2,3,4]

const Header = () => (
    <div>
        <div style = {{ width:"50%",display:"inline-block" }}>


        </div>
        <div style = {{ width:"50%",display:"inline-block" }}>
            {
                num.map((item,index)=>(
                    <div style = {{ width:"50%",height:"50%",display:"inline-block" }}>
                    

                    </div>
                ))
            }
        </div>
    </div>
)

const a = ["详情","评价","可订日期","位置","须知","房东",]
const b = ["Details","Evaluation","Available","Location","Notice","Landlord"]

const AnchorList = () => (
    <div 
        id="anchor"
        style = {{  height:"50px",
                    width:"75%",
                    position:"sticky",
                    top:"0",
                    marginLeft:"12.5%"}}>
        <Anchor affix = { false } >
            {
                a.map( (item,index) => (
                    <div style = {{ display:"inline-block" ,
                                    height:"50px" }}
                         className = "anchor">
                        <Link   href = { "#"+ b[index] } 
                                title = { item }  />
                    </div>
                ))
            }
        </Anchor>
    </div>
)



class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    
    render() {

        return (
            <div style = {{ width:"70%",
                                margin:"0 auto" }}>

                <AnchorList/>
                <Header/>
                <div style = {{ width:"50%",display:"inline-block"}}>
                    <Evaluation/>
                    <Notice />
                    <Landlord />

                </div>
                <div style = {{ width:"50%",
                                display:"inline-block",
                                position:"sticky",
                                top:"100px",
                                verticalAlign:"top" }}>   
                    <div style = {{width:"60%",margin:"0 auto",height:"400px",backgroundColor:"yellow"}}></div>
                </div>  

            <Divider/>
            <Footer/>
            </div>
        );
    }
}

export default ProductContent;