import React, { Component } from 'react';
import Menus from './Menus';
import Questions from '../Questions';
import Interview from '../../Share/Interview';
import Renting from '../../Share/Renting';
import Footer from '../../Share/Footer';
import Header from './Header';
import { Divider } from 'antd';

const b = [
    ["100万美元的财产损失保护","在造成财产损失的极少数情况下，爱彼迎房东保障金计划每次可为每个预订提供高达$1,000,000美元的财产损失保护。您可以直接向我们的调解中心提请索赔。"],
    ["意外事故保险","爱彼迎提供免费的房东保障险，责任赔偿保障高达100万美元。 该保险适用于房客在房源或爱彼迎房产入住期间遭受人身伤害或财产损失，因而提起诉讼或索赔的小概率事件。"]
]


const d = ["完全免费的保险","针对每次预订自动适用","直接向爱彼迎提请索赔"]

class Safety extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header:{
                top:{
                    type:"SAFETY",
                    title:"爱彼迎如何保护房东",
                    content:"我们采取多重手段，确保您、您的房子以及所接待房客的安全。"
                },
                img:"https://z1.muscache.cn/pictures/7ad2b738-cda0-468f-abe1-2fba843c3425.jpg",
                title:"接待优质房客",
                a:[                
                    [   "公平的双向评价",
                        (<div>
                            <p>为了帮助在爱彼迎上建立信任和树立声誉，房客和房东在每次预订完成后会互相进行评价。</p>
                            <p>在接待房客之前，您可以查看其它房东对他们的评价。</p>
                        </div>
                        ),
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ],
                    [   "与房客轻松交流",
                        "如果在房客住宿前您想提出问题或是设置预期，您可以使用我们安全的消息工具提前了解房客。",
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ],
                    [   "预订要求",
                        (<div>
                            <p>您可以要求任何一位房客在预订您的房源前将身份证件提交到爱彼迎。您还有机会提前审查预订或是添加额外条件来控制可进行预订的人。</p>
                            <p>作为进一步的核查，每次爱彼迎预订都会进行风险评分，而且我们会取消任何可疑的预订。</p>
                        </div>
                        ),
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ],
                    [   "您的空间您做主",
                        "您可以添加房屋守则，明确您对房客的要求，房客在预订前必须先同意遵守您的守则。比如，您可以在守则中写明禁止吸烟和举办活动。如果房客在预订后没有遵守要求，您可以取消他们的预订。",
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ]
                ],
            },                  
            rentImg:"https://z1.muscache.cn/pictures/b6f44e52-9082-4a5f-b056-16b1d6ad33c3.jpg",
            interview:{
                img:"https://z1.muscache.cn/pictures/8b843665-c5b3-4daf-b11a-1e037443ef79.jpg",
                reason:"我学到了人性本善。我可以信任他人。",
                description:"Milaida在波多黎各出租房源来赚取额外收入。",
            },
    }
}
    render() {
        return (
            <div style = {{ position:"relative" }}>
                <Menus/>
                
                <Header header = { this.state.header }/>

                <Interview data = { this.state.interview }/>


                <div style={{   width:"60%",
                                margin:"50px auto 100px" }}>
                    <h1 style = {{  textAlign:"center",
                                    color:"#333333",
                                    fontSize:"60px",
                                    marginBottom:"70px",
                                    lineHeight:"64px",
                                    letterSpacing:"-2px",
                                    fontWeight:"bold" }}>
                            放心出租
                        </h1>
                        {
                            b.map( (item,key) => (
                                <div key = {key}
                                    style = {{  width:"44%",
                                                margin:"0 3%",
                                                display:"inline-block",
                                                verticalAlign:"top"}}>
                                    <h2> { item[0] } </h2>
                                    <p> { item[1] } </p>
                                </div>
                            ))

                        }
                </div>
                <div style = {{ width:"60%",
                                margin:"50px auto 100px" }}>
                        {
                            d.map( (item,key) => (
                                <div key = {key}
                                     style = {{ width:"30%",
                                                margin:"0 1%",
                                                display:"inline-block",
                                                verticalAlign:"top" }}>
                                    <div style = {{ height:"50px",
                                                    width:"50px",
                                                    borderRadius:"25px",
                                                    border:"solid 1px #484848",
                                                    fontSize:"50px",
                                                    lineHeight:"50px",
                                                    textAlign:"center",
                                                    fontWeight:"bold",
                                                    display:"inline-block"}}>
                                        √
                                    </div>
                                    <div style = {{ lineHeight:"50px",
                                                    display:"inline-block",
                                                    fontSize:"20px",
                                                    whiteSpace:"nowrap",
                                                    overflow:"hidden",
                                                    textOverflow:"ellipsis",}}>
                                        { item }
                                    </div>
                                </div>
                            ))
                        }
                </div>

                <Questions/>

                <Renting rentImg = { this.state.rentImg }/>
                    
                <Divider/>
                
                <Footer/>
            </div>
        );
    }
}

export default Safety;