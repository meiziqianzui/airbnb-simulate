import React, { Component } from 'react';
import Header from './Header';
import Region from './Region';
import Footer from '../Share/Footer';
import {Divider} from 'antd';
import './home.css'
import Explore from '../Share/Explore';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region:"shanghai",
            data0:[
                {   id:"1",
                    tag0:"shanghai",
                    tag1:"",                  
                    url:"01.jpg",
                    type:"整套房子 · 2张床",
                    description:"北欧ins风,南山站E出口100m步行至深大,临近春茧、海岸城、口岸,地铁直达机场",
                    price:"243",
                    comment:"AAAAA 25 · 超赞房东"                  
                },
                {   id:"2",
                    tag0:"beijing",                
                    tag1:"",
                    url:"02.jpg",
                    type:"小屋·两张床 ",
                    description:"临近深圳北站､香港福田口岸,双地铁口,轻工业风1室1厅住宅,近商圈,内外设施一应俱全",
                    price:"302",
                    comment:"AAAAA 25 · 超赞房东"    
                },
                {   id:"3",
                    tag0:"chengdu",                
                    tag1:"",
                    url:"03.jpg",
                    type:"整套普通公寓·2室2床1卫 ",
                    description:"毗邻福田CBD/购物公园/平安大厦/会展中心/福田区委CBC/福田皇岗口岸片区",
                    price:"408",
                    comment:"AAAAA 25 · 超赞房东"    
                },
                {   id:"4",
                    tag0:"chongqing",   
                    tag1:"",             
                    url:"04.jpg",
                    type:"整套普通公寓·2室2床1卫 ",
                    description:"深圳北cococity特别能够消磨时间舒适的房子",
                    price:"399",
                    comment:"AAAAA 25 · 超赞房东"    
                }           
            ], 
            data1:[
                ["上海","Shanghai"],
                ["北京","Beijing"],
                ["成都","Chengdu"],
                ["重庆","Chongqing"],
            ],
            data2:[
                ["雍和宫","YongHePalace"],
                ["国家大剧院","theater"],
                ["雁栖湖","YanQiLake"],
                ["三里屯太古里","SanLiTun"],
            ],

         };
    }

    handleClick=()=>{
        this.setState({
            region:this.refs.region.state.region
        })
    }
    
render() {
    return (
        <div>   

            <Header/>
            <div 
                style = {{ margin:"30px 12.5%" }}>
                <h3 style = {{  color: "#484848",
                                fontSize:"24px",
                                fontFamily: "微软雅黑",
                                lineHeight: "28px",
                                fontWeight:" bold"}}>
                    秋季特惠房源
                </h3>
                <h4 style = {{  color: "#484848",
                                fontFamily: "微软雅黑",
                                fontSize:"17px",
                                lineHeight: "17px",
                                fontWeight:"500"}}>
                    低至 7 折，可叠加使用礼券
                </h4>	

                <Region data0 = { this.state.data0 }
                        data = { this.state.data1 }/> 

                <Region data0 = { this.state.data0 }
                        data = { this.state.data2 }/> 

                <Divider/>
                
                <Explore/>

                <Divider/>

                <Protection/>

            </div>
        

            <Divider/>
            
            <Footer/>
        </div>
        );
    }
}

const a =[
    {
        img:"",
        title:"安心房源保障",
        content:"人工审核所有中国房源页面信息，入住更放心"
    },
    {
        img:"",
        title:"专业中文客服",
        content:"(86)400-120-8508、(86)010-8783-3463,24小时服务"
    },
    {
        img:"",
        title:"旅行安全保障",
        content:"多重风险控制设计，全方位保障您的行程安全"
    }
]

const Protection = () => (
    <div style = {{ marginTop:"60px" }}>
        <h2>爱彼迎旅行保障</h2>
        {
            a.map( (item,key) => (
                <div key = {key}
                     style = {{ width:"30%",
                                height:"60px",
                                marginRight:"3%",
                                display:"inline-block"}}>
                    <div style = {{ height:"60px",
                                    display:"inline-block"}}>
                        <span style = {{    fontSize:"20px",
                                            lineHeight:"30px" }}> 
                            { item.title }
                        </span>
                        <span> 
                            { item.content }
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
)

export default Index;