import React from 'react';
import {Button} from 'antd';

const Renting = (props) => (
    <div style={{   width:"70%",
                    minInlineSize:"900px",
                    height:"440px",
                    margin:"60px auto 140px",
                    backgroundImage: `url(${props.rentImg})` ,
                    backgroundSize:" 100%  440px" }}>
        <div style = {{ 
                        color:"white",
                        fontSize:"60px",
                        fontWeight:"800",
                        lineHeight:"64px",                        
                        letterSpacing:"-2.5px",
                        float:"left",
                        margin:"100px 0 0 120px"}}>
            
                <p style = {{ fontSize:"60px", lineHeight:"8px" }}>准备好当房东赚</p>

                <p style = {{ fontSize:"60px",lineHeight:"8px" }}>钱了吗？</p>

            <Button type = "primary"
                    style = {{  width:"100px",
                                height:"50px",
                                color:"#484848",
                                fontSize:"20px",
                                fontWeight:"bold",
                                marginTop:"50px",
                                backgroundColor:"white"}}>
                开始
            </Button> 

        </div>
    </div>
)

export default Renting;