import React, { Component } from 'react';
import { Popover} from 'antd';
import '../home.css';

class Dollar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            money:"美元 - $",
         };
    }

    handleMoneyChange=(e)=>{
        this.setState({
            money:e.target.textContent
        })
    }

render() {

const a = ["美元 - $","人民币 - ￥","日元 - ¥","港币 - $","新台币 - $","欧元 - €","英镑 - £",
        "澳大利亚元 - $","阿联酋迪拉姆 - ﺩ.ﺇ","保加利亚列弗 - лв"]

    const content = (
        <div style = {{ height:"300px",
                        width:"250px",
                        overflow:"auto" }}>
            {
                a.map( (item,key) => (
                    <div key = {key}
                         class = "money">                    
                        {
                            this.state.money === item ? 
                            <div style = {{ position:"absolute",
                                            right:"15px",
                                            fontSize:"30px"}}>
                                √
                            </div> 
                            :  
                            <div style = {{ position:"absolute",
                                            right:"0"}}>
                                    
                            </div>
                        }
                        <div key = { key }
                             onClick = { this.handleMoneyChange }>
                            {item}              
                        </div>
                    </div>
                ))
            }
        </div>
    )

return (
    <div className = "nav" >                
        <Popover placement = "bottomRight" 
                 title = "常用货币" 
                 content = { content }
                 trigger = "click">
            <div>{ this.state.money }</div>
        </Popover>
    </div>
);
}
}

export default Dollar;