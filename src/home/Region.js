import React, { Component } from 'react';
import {Link ,BrowserRouter as Router} from 'react-router-dom';
import Product from './Product';


class Region extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            region:"shanghai",
            dd:"dawdwa"
    };
    }


    handleChange = (value) => {  

        this.setState({
            region:value
        })
    }


    render() {


return (
    <Router>
        <div style = {{margin:"30px auto" }}>
            {
                this.props.data.map( (item,key) => (
                    <div key = {key}
                         onClick = { this.handleChange.bind(this,item[1]) }
                         style = {{ height:"48px",
                                    width:"120px",
                                    lineHeight:"48px",                                
                                    textAlign:"center",
                                    marginRight:"20px",
                                    border:"solid 1px #D8D8D8",
                                    borderRadius:"3px",
                                    boxShadow:"0px 1px 2px #0000000F",
                                    display:"inline-block",
                                    verticalAlign:"top"}}>
                        {
                            this.state.region === item[1]?
                            <div style = {{ backgroundColor:"#00848A" }}>
                                <Link to = { `/product/${item[1]}` } 
                                    style = {{  color: "white",
                                                lineHeight:"48px",
                                                fontFamily: "微软雅黑",
                                                fontSize:"16px",
                                                fontWeight: "bold" }}>
                                    {item[0]}
                                </Link>
                            </div>
                            :
                            <div>
                                <Link to = { `/product/${item[1]}` } 
                                      style = {{    color: "#484848",
                                                    fontSize:"16px",                                
                                                    fontFamily: "微软雅黑",
                                                    fontWeight: "bold"}}>
                                    { item[0] }
                                </Link>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
        <div style = {{ width:"100%"}}>
                
           <Product data={this.props.data0} /> 
        </div>
    </Router>            
);
}
}

export default Region;