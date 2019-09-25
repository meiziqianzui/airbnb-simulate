import React, { Component } from 'react';
import {  Col } from 'antd';

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    img:"../img/story.jpg",
                    region:"北京",
                    description:"南锣红砖房里的北欧风",
                    img2:"",
                    num:"128",
                    commentNum:"33"
                }
            ]
         };
    }
    render() {
        return (
            <div style = {{ marginBottom:"100px" }}>
                <h1>精彩旅行故事</h1>

                <div>
                    {
                        this.state.data.map( (item,value) => (
                            <Col    
                                xl = {{ span:6 }} 
                                md = {{ span:8}} 
                                xs = {{ span:12 }}>
                                <div 
                                    key = { value }
                                    style = {{ margin:"10px" }}>

                                    <img alt=""
                                         src={ require('../img/story.jpg')} 
                                         style = {{ width:"100%",
                                                    borderRadius:"5px" }}/>
                                    <div>
                                        <span> { item.region } </span>
                                        <span> { item.description } </span>
                                    </div>
                                    <div>
                                        <img alt = " "
                                             src = " "
                                             style = {{ }}/>

                                        <span> { item.num } </span>
                                        <span> { item.commentNum } </span>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Explore;