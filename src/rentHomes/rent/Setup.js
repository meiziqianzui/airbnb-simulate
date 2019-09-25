import React, { Component } from 'react';
import Menus from './Menus';
import Header from './Header';
import Questions from '../Questions';
import Interview from '../../Share/Interview';
import Renting from '../../Share/Renting';
import Footer from '../../Share/Footer';
import { Divider } from 'antd';
import {Link} from 'react-router-dom';


const Help= (props) => (
    <div style = {{ width:"60%",
                    margin:"0 auto 0",
                    textAlign:"left"}}>

   
    <h1 style = {{  textAlign:"center",
                    color:"#333333",
                    fontSize:"60px",
                    marginBottom:"70px",
                    lineHeight:"64px",
                    letterSpacing:"-2px",
                    fontWeight:"bold"}}>
        { props.header.title }
    </h1>    
    <img alt = ""
         src = { props.header.img }
         style = {{ width:"100%",
                    margin:"0 auto 90px" }}/>
    {
        props.header.a.map( (item,index) => (
            <div key = {index}
                 style = {{ width:"30%",
                            margin:"0 3% 50px 0",
                            display:"inline-block",
                            verticalAlign:"top" }}>
                <img alt = ""
                     src = { item[2] }
                     style = {{ width:"40px",
                                marginBottom:"20px" }}/>
                <h2 style = {{  color:"#484848",
                                fontWeight:"800",
                                fontSize:"24px",
                                fontFamily:"Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"}}>
                    { item[0] }
                </h2>
                <div style = {{ fontSize:"16px",
                                fontWeight:"400" }}>
                    { item[1] }
                </div>
                <br/>
                {
                    index === 2 ?
                        <Link to = {'/renthomes/safety'}  
                              style = {{    color: "#767676",
                                            fontFamily: "微软雅黑",
                                            fontSize:"14px",
                                            fontWeight: "bold" }}>
                                了解爱彼迎如何帮您找到出色的房客
                        </Link>
                        :""
                }


            </div>
        ))
    }
</div>
)

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            header:{
                top:{
                    type:"SETUP",
                    title:"如何开始出租",
                    content:(<div>
                                <p>在爱彼迎发布房源，前所未有的便捷和自主化体验。您距离赚取</p>
                                <p>收入和迎接全球数百万旅行者仅几步之遥。</p>            
                            </div>
                        )
                },                
                img:"https://z1.muscache.cn/pictures/5fb428c8-6829-43ee-ba1b-3c557791c73e.jpg",
                title:"如何出租完全由您掌控",
                a:[                
                    [   "自主决定出租时间",
                        (
                            <div style={{textAlign:"left"}}>
                                <p>爱彼迎没有最低或强制出租天数限制，因此您可以屏蔽不可订的日期。</p>
                                <p>您还可以设置可订状态的具体规则，包括：</p>
                                <li>房客最短/最长入住天数</li>
                                <li>房客可预订未来多少天内的住宿</li>
                                <li>预订前需提前通知</li>
                            </div>
                        ),
                        "https://z1.muscache.cn/pictures/b1d5dc1c-34ed-442d-8b03-7914166861ce.jpg"
                    ],
                    [   "设置满意价格",
                        "由您来制定房源每晚价格，此外我们的定价工具也能帮助您做出决定。您还可以轻松添加自定义项目，例如： • 清洁费 • 周租折扣 • 一年中指定时间的优惠价格",
                        "https://z1.muscache.cn/pictures/788cdf62-dc3a-4149-ac0e-b37909436319.jpg"
                    ],
                    [   "快速同步日历",
                        "为避免您在无法出租或已有预订时收到预订，您可将其他日历与爱彼迎日历关联，即可自动更新所有日历状态。",
                        "https://z1.muscache.cn/pictures/788cdf62-dc3a-4149-ac0e-b37909436319.jpg"
                    ],
                    [   "为房源制定守则",
                        "为帮助房客设定期望，您可以添加房屋守则，房客必须同意后才可预订房源。如果房客预订后违反了房屋守则，您可以取消预订且不会受到处罚。",
                        "https://z1.muscache.cn/pictures/b1d5dc1c-34ed-442d-8b03-7914166861ce.jpg"
                    ]
                ],
            },
            header2:{
                img:"https://z1.muscache.cn/pictures/c72934e2-4c3e-4908-a867-73a44d9e5715.jpg",
                title:"向数以百万的旅行者推广您的房源",
                a:[                
                    [   "新手指南",
                        "创建房源时，我们会要求您提供一些信息，这些都是房客预订时想要了解的问题。您需要描述您的房源，比如说明其特别之处，包括房客可能会感受到的新奇的地方。"
                    ],
                    [   "全程为您提供建议",
                        "如果您在获得预订的过程中遇到问题，我们会为您提供价格、设置和其他更新方面的建议，帮助您更快地获得预订。社区中心中经验丰富的房东也会为您提供帮助。"
                    ],
                    [   "全球数以百万的房客",
                        "房源发布完成后，世界各地的房客都可以在搜索结果中找到您的房源。每晚有近200万房客在爱彼迎房源中住宿，我们会提供工具帮您获得适合的预订。",
                    ]
                ],
            },                      

            rentImg:"https://z1.muscache.cn/pictures/98a52a0a-6cb8-4928-b743-8e651f1879a8.jpg",
            interview:{
                img:"https://z1.muscache.cn/pictures/1b8b8d96-9b70-4c72-981e-e1573f534047.jpg",
                reason:"开始出租比我想的简单多了。",
                description:"JB和Ramona在波士顿出租房屋，赚取额外收入为退休做准备。",
            },
         };
    }

    render() {
        return (
            <div>
                <Menus/>
                <Header header = { this.state.header } />

                <Interview data = { this.state.interview } />

                <Help  header = { this.state.header2 } />

                <Questions/>

                <Renting rentImg = { this.state.rentImg } />
                
                <Divider/>
                
                <Footer/>

            </div>
        );
    }
}

export default Setup;