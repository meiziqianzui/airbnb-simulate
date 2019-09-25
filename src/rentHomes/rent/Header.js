import React , { Fragment } from 'react';
import { Button} from 'antd';
import {Link} from 'react-router-dom';


const Header = (props) => (
    <Fragment>
        <div style = {{ height:"600px",
                        padding:"100px 0 200px",
                        textAlign:"center",
                        backgroundColor:"#F8F8F8" }}>
            <h6 style = {{  fontSize:"16px",
                            fontWeight:"bold" }}>
                {props.header.top.type}
            </h6>
            <h1 style = {{  fontSize:"60px",
                            fontWeight:"bold" }}>
                {props.header.top.title}
            </h1>
            <div style = {{   fontSize:"24px",
                            fontWeight:"500" }}>
                {props.header.top.content}
            </div>
            <Button type = "primary"
                    style = {{  height:"50px",
                                width:"100px",
                                fontSize:"20px",
                                fontWeight:"bold",
                                backgroundColor:"#FF5A5F"}}>
                开始
            </Button>                    
        </div> 
        <div style = {{ width:"60%",
                        textAlign:"left",
                        margin:"-120px auto 0"}}>
            <img alt = ""
                 src = { props.header.img }
                 style = {{ width:"100%",
                            margin:"0 auto 90px" }}/>

            <h1 style = {{  color:"#333333",
                            fontSize:"60px",
                            fontWeight:"bold",
                            textAlign:"center",
                            letterSpacing:"-2px",
                            lineHeight:"64px",                            
                            marginBottom:"70px" }}>
                {props.header.title}
            </h1>
            
            {
                props.header.a.map( (item,index) => (
                    <div key = { index }
                         style = {{ width:"44%",
                                    margin:"0 6% 50px 0",
                                    display:"inline-block",
                                    verticalAlign:"top" }}>
                        <img alt = ""
                             src = { item[2] }
                             style = {{ width:"40px",
                                        marginBottom:"20px" }}/>
                        <h2 style={{    color:"#484848",
                                        fontWeight:"800",
                                        fontSize:"24px",
                                        fontFamily:"Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"}}>
                            { item[0] }
                        </h2>
                        <div style={{   fontSize:"16px",
                                        fontWeight:"400" }}>
                            { item[1] }
                        </div>
                        <br/>
                        {
                            index === 1 ?
                                <Link to = '/renthomes/financials'  
                                      style = {{    color: "#767676",
                                                    fontFamily: "微软雅黑",
                                                    fontSize:"14px",
                                                    fontWeight: "bold" }}>
                                        详细了解如何通过爱彼迎赚取收入
                                </Link>
                                :null
                        }
                    </div>
                ))
            }
        </div>
    </Fragment>
)

export default Header;