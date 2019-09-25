import React from 'react';

const Interview = (props) =>(
    <div className = "container">
        <img src = { props.data.img } 
             alt = "interview"
             style = {{ width:"50%" }}/>

        <div style = {{ width:"5%",
                        display:"inline-block",
                        verticalAlign:"top"}}>
        </div>

        <div style = {{ width:"45%",
                        height:"20%",
                        margin:"15% auto",
                        display:"inline-block",
                        verticalAlign:"top"}}>

            <p style = {{   fontSize:"32px",
                            lineHeight:"40px"}}>
                { props.data.reason } 
            </p>

            <p style = {{ color:"#767676" }}>
                { props.data.description } 
            </p>
            
        </div>
    </div>
)

export default Interview;