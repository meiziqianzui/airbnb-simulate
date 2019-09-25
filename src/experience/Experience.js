import React, { Component } from 'react';
import Header from '../story/Header';
import './experience.css';
class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Header/>

                <div style={{   height:"650px",
                                padding:"120px 23%",
                                backgroundColor:"white",}}>

                        <p style={{ color:"#484848",
                                    fontWeight:"800",}}>
                            在爱彼迎开展体验
                        </p>
                        <div id="colorChange">
                            带领别人做自己热爱的事，顺便赚取收入
                        </div>
                </div>


            </div>
        );
    }
}

export default Experience;