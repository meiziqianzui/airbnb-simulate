import React, { Component } from 'react';
import './home.css'
import { Row, Col } from 'antd';


const Card = (props) =>(
    <div style = {{ width:"100%" }}>
    <Row>
        {
            props.data.map( (item,key) => (          
                <Col    
                    xl = {{ span:8 }} 
                    md = {{ span:12}} 
                    xs = {{ span:24 }}>
                    <div 
                        id = "card"
                        key = { key }
                        style = {{  padding:"3px 3px 10px",
                                    overflow:"hidden",
                                    marginTop:"10px",
                                    display:"inline-block",
                                    borderRadius:"5px",
                                    float:"left"}}>
                        <img src = { require("../img/" + item.url) }
                             alt = ""
                             style = {{ width:"98%",
                                        margin:"0 1% 5px",
                                        borderRadius:"5px" }}/> 

                        <div style = {{ width:"98%",
                                        margin:"0 2%",
                                        color:"brown",
                                        marginBottom:"5px",
                                        fontWeight:"600" }}>

                            <h4 style = {{ color:"green" }}>
                                { item.type }
                            </h4>

                            <p style = {{   fontSize:"16px",
                                            marginBottom:"1px"}}>
                                { item.description }
                            </p>

                            <p style = {{   fontSize:"15px",
                                            margin:"1px"}}>
                                ￥ { item.price } 每晚
                            </p>

                            <p style = {{   fontWeight:"300",
                                            color:"black",
                                            fontSize:"14px",
                                            margin:"1px",
                                            WebkitLineClamp:"2",
                                            textOverflow:"ellipsis" }}>
                                { item.commen }
                            </p>

                        </div>
                    </div>
                </Col>
            ))
        }
    </Row></div>
)


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
/*             data:[
                {   id:"1",
                    tag0:"shanghai",
                    tag1:"",                  
                    url:"01.jpg",
                    type:"整套房子 · 2张床",
                    description:"北欧ins风,南山站E出口100m步行至深大,临近春茧、海岸城、口岸,地铁直达机场",
                    price:"243",
                    comment:"AAAAA 25 · 超赞房东"                  
                },
                {   id:"2",
                    tag0:"beijing",                
                    tag1:"",
                    url:"02.jpg",
                    type:"小屋·两张床 ",
                    description:"临近深圳北站､香港福田口岸,双地铁口,轻工业风1室1厅住宅,近商圈,内外设施一应俱全",
                    price:"302",
                    comment:"AAAAA 25 · 超赞房东"    
                },
                {   id:"3",
                    tag0:"chengdu",                
                    tag1:"",
                    url:"03.jpg",
                    type:"整套普通公寓·2室2床1卫 ",
                    description:"毗邻福田CBD/购物公园/平安大厦/会展中心/福田区委CBC/福田皇岗口岸片区",
                    price:"408",
                    comment:"AAAAA 25 · 超赞房东"    
                },
                {   id:"4",
                    tag0:"chongqing",   
                    tag1:"",             
                    url:"04.jpg",
                    type:"整套普通公寓·2室2床1卫 ",
                    description:"深圳北cococity特别能够消磨时间舒适的房子",
                    price:"399",
                    comment:"AAAAA 25 · 超赞房东"    
                }           
            ],  */
         };
    }
componentDidMount() {
    console.log(this.props)
}

    render() {
        return (
            <div>
                 <Card data = { this.props.data } />  
            </div>
        );
    }
}


export default Product;