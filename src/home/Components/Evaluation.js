import React, { Component } from 'react';


class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }

render() {
const a = [
    {
        title:"如实描述",
        point:"5.0"
    },
    {
        title:"位置便利",
        point:"5.0"
    },
    {
        title:"沟通交流",
        point:"5.0"
    },
    {
        title:"入住顺利",
        point:"5.0"
    },
    {
        title:"干净卫生",
        point:"5.0"
    },
    {
        title:"高性价比",
        point:"5.0"
    }
]

const  comment =[
    {
        id:"",
        avatar:"头像",
        user:"孙",
        time:"2019年9月",
        comment:"位置很不错 离市区也很近 出行很方便 房东也很热情 但洗手间有味道"
    },
    {
        id:"",
        avatar:"头像",
        user:"孙",
        time:"2019年9月",
        comment:"位置很不错 离市区也很近 出行很方便 房东也很热情 但洗手间有味道"
    },

 ]
    return (
        <div id = "Evaluation"
             style = {{ margin:"30px 0"}}>
            <div>
                <h1 style = {{  fontSize:"24px",
                            fontWeight:"800",
                            color:"rgb(72,72,72)",
                            paddingTop:"2px auto",}}>评价</h1>
                <p>QQQQQ 12条评价</p>
            </div>
            <div style = {{ marginBottom:"20px" }}>
                {
                    a.map( (item,value) => (
                        <div 
                            style = {{  width:"50%",
                                        display:"inline-block" }}>

                            <div style ={{  width:"50%",
                                            display:"inline-block"  }}>
                                {item.title}
                            </div>

                            <div style ={{  width:"50%",
                                            display:"inline-block"  }}>
                                {item.point}
                            </div>
                        </div>
                    ))
                }
            </div>

        {
            comment.map( (item,key) => (
                <div 
                    key = { key }
                    style = {{  padding:"20px",
                                borderTop:"solid 1px #E4E4E4",
                                borderBottom:"solid 1px #E4E4E4" }}>
                    <div style = {{ height:"48px" }}>
                        <div style = {{ height:"48px",
                                        width:"48px",
                                        borderRadius:"24px",
                                        backgroundColor:"yellow",
                                        display:"inline-block",
                                        verticalAlign:"top" }}>
                            {item.avatar}
                        </div>
                        <div style = {{ height:"48px",
                                        margin:"0 10px",
                                        display:"inline-block" }}>
                            <div>{ item.user }</div>
                            <div>{ item.time }</div>
                        </div>
                    </div>
                    <div style = {{ margin:"10px" }}>
                        { item.comment }
                    </div>
                </div>
            ))
        }
    </div>
);
}
}

export default Evaluation;