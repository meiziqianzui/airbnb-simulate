import React, { Component } from 'react';
import Menus from './Menus';
import Header from './Header';
import Interview from '../../Share/Interview';
import Footer from '../../Share/Footer';
import Renting from '../../Share/Renting';

class Financials extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rentImg:"https://z1.muscache.cn/pictures/85c788f7-2c25-4640-8b89-174d2dbebfcf.jpg",
            header:{
                top:{
                    type:"FINANCALS",
                    title:"如何在爱彼迎上赚取收入",
                    content:"在爱彼迎，您无需支付高昂手续费，就可轻松使用支付系统，并自主决定收费金额。"
                    },
                img:"https://z1.muscache.cn/pictures/7ad2b738-cda0-468f-abe1-2fba843c3425.jpg",
                title:"简单流畅的支付方式",
                a:[                
                    [   "免费发布房源",
                        "您可以向数百万旅行者宣传房源，没有任何附加条件——无需注册费或会员费。",
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ],
                    [   "接受预订",
                        "爱彼迎会在房客到达前向其收取费用，以保证您能按时获得出租收入。从始至终您都无需直接进行钱款交易。",
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ],
                    [   "房客入住后即可收款",
                        "爱彼迎通常在房客预订的入住时间24小时后向您发放收款，以确保入住流程的顺利。",
                        "https://z1.muscache.cn/pictures/bce40f63-1755-4a11-b30c-5505f6231035.jpg"
                    ]
                ],
            },    
            interview:{
                img:"https://z1.muscache.cn/pictures/1b8b8d96-9b70-4c72-981e-e1573f534047.jpg",
                reason:"我们可以攒点钱用于退休后的生活以及支付孩子们的学费。",
                description:"JB和Ramona在波士顿出租房屋，赚取额外收入为退休做准备。",
            },      
        };
    }
    render() {
        return (
            <div>
                <Menus/>
                <div style = {{ height:"600px",
                                backgroundColor:"#F8F8F8",
                                textAlign:"center"}}>

                    <Header header = { this.state.header }/>

                    <Interview data = { this.state.interview } />

                    <Renting rentImg = { this.state.rentImg }/>

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Financials;