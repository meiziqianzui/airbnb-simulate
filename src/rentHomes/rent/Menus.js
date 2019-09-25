import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Svg from '../../Share/Svg';
import '../renthome.css';
import Logo from '../../Share/Logo';

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            income:"￥9,232",
            site:""
        };
    }
render() {

    const a = ["概览","设置","安全","财务"]
    const b = ["","renthomes/setup","renthomes/safety","renthomes/financials"]

return (
            
    <div style = {{ height:"80px",
                    position:"sticky",
                    backgroundColor:"white",
                    top:"0",
                    borderBottom:"solid 1px #EBEBEB"}}>
        <Logo/>

        <div style = {{ position:"absolute",
                        top:"0",
                        left:"150px"}}>
            {
                a.map( (item,index) => (
                    <div key = {index}
                         className = "rentnav" >
                        <Link to = { `/${b[index]}` }  
                              style = {{    color: "#484848",
                                            fontFamily: "微软雅黑",
                                            fontSize:"16px",
                                            lineHeight:"80px",
                                            fontWeight: "bold"}}>
                            {item}
                        </Link>
                    </div>
                ))
            }
            

        </div>
        <div style = {{ float:"right",
                        marginRight:"100px",
                        lineHeight:"80px"} }>
            <span style = {{ fontSize:"16px" }}>
                预期月收入
            </span> 

            <Svg />
            
            <span style = {{    fontSize:"28px",
                                fontWeight:"bold" }}>
                { this.state.income }
            </span>                  
        </div>
    </div>
);
}
}

export default Menus;