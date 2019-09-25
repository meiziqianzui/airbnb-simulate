import React from 'react';


const title = ["基本要求","取消政策","交易提示"]
const notice = [
    ["禁止吸烟","不允许携带宠物","不允许举办派对和活动"],
    ["宽松 · 48小时内可免费取消预订。"],
    ["若需要开具房费发票，请您与房东协商。","为了保护您的账号隐私和付款安全，请不要相信其它任何平台的折扣或礼金券代订，并始终在爱彼迎站内转账和交流。。"]
]
         


const Notice = () => (
    <div id = "Notice"
         style = {{ margin:"30px 0" }}>
        <h1 style = {{  fontSize:"24px",
                        fontWeight:"800",
                        color:"rgb(72,72,72)",
                        paddingTop:"2px auto",}}>
                须知
        </h1>
        {
            title.map( (title,index) => (
                <div style = {{ margin:"5px" }}>
                    <div style = {{ width:"20%",
                                    fontSize:"16px",
                                    fontWeight:"600",           
                                    display:"inline-block",
                                    marginRight:"10%",
                                    verticalAlign:"top" }}>
                        { title }
                    </div>
                    <div style = {{ width:"70%",
                                    display:"inline-block"}}>
                        {
                            notice[index].map( (item,key) => (
                                <p  
                                    key = {key}
                                    style = {{  fontSize:"16px",
                                                fontWeight:"400",
                                                lineHeight:"20px"}}>
                                    { item }
                                </p>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
)

export default Notice;