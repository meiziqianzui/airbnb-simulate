import React from 'react';

const titlestyle = {    width:"20%",
                        fontSize:"16px",
                        fontWeight:"600",           
                        display:"inline-block",
                        marginRight:"10%",
                        verticalAlign:"top"
                    }
const contentstyle = {  fontSize:"16px",
                        fontWeight:"400",
                        lineHeight:"20px"
                    }


const Landlord = () => (
    <div id = "Landlord"
         style = {{ margin:"30px 0" }}>
        <h1 style = {{  fontSize:"24px",
                        fontWeight:"800",
                        color:"rgb(72,72,72)",
                        paddingTop:"2px auto",}}>
            房东
        </h1>
        <div>
            <p style = { titlestyle }>雯</p>
            <p style = {{ fontWeight:"600" }}>注册时间:2018年3月</p>
            <p style = { contentstyle }> 
                <span style = {{ marginRight:"5px" }}>超赞房东</span>
                <span style = {{ marginRight:"5px" }}>78条评价</span>
                <span style = {{ marginRight:"5px" }}>已验证</span>
            </p>
        </div>
        <div>
            <h2 style = { titlestyle }>自我介绍</h2>        
            <p style = { contentstyle }> 
            Hi~我是Hepburn,喜欢旅游也喜欢下雨天躲在被窝睡觉｡热爱生活中美好的事物并相信设计无处不在｡我们用心设计每一个房间,喜欢的画､爱看的书､亲肤的床上用品,严苛的卫生标准｡希望我的房子能让你在这个陌生的城市感到舒适和温暖,欢迎回家:)
            </p>   
        </div>
        <div>
            <h2 style = { titlestyle }>与房客的互动</h2>        
            <p style = { contentstyle }>
                有任何需要可随时call我,我会及时恢复并解决问题^ _ ^
            </p>        
        </div>     

        <p style = { contentstyle }>回复率:<span style = {{ fontWeight:"600" }}>100%</span></p>
        <p style = { contentstyle }>回复时间:<span style = {{ fontWeight:"600" }}>1小时内</span></p>        
    </div>
)

export default Landlord;