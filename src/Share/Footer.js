import React, { Component } from 'react';
import { Divider } from 'antd';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
}

render() {
	const a = ["爱彼迎","发现","出租","其他"]
	const b = [
		[
			["工作机会","careers"],
			["新闻","news"],
			["政策","policies"],
			["帮助","help"],
			["多元化与归属感","diversity"],
			["无障碍设施","accessibility"]
		],
		[
			["信任与安全","trust"],
			["旅游基金","fond"],
			["爱彼迎公民","citizen"],
			["商务差旅","business"],
			["旅游指南","travelguide"],
			["爱彼迎杂志","magazine"]
		],
		[
			["为什么要出租","whyrent"],
			["待客之道","hospitality"],
			["房东义务","responsibility"],
			["开展体验","experience"],
			["Open Homes","openhomes"]
		],
		[
			["条款","terms"],
			["隐私政策","privacy"],
			["网站地图","sitemap"]
		]
	]
		
return (
	<div style = {{	width:"70%",
					minWidth:"600px",
					margin:"30px auto 60px"}}>
		{
			a.map( (item,index) => (
				<div key = {index}
					 style = {{	width:"25%",
								display:"inline-block",
								verticalAlign:"top",
								paddingRight:"20px"}}>
						
					<h3 style = {{	fontWeight: "bold",
									color:"green"}}>
						{item}
					</h3>

					{
						b[index].map( (item,key) => (
							<li key = {key}
								style = {{listStyleType:"none"}}>
								<Link to = {`./${item[1]}`}  
									  style = {{	color: "#767676",
													fontSize:"14px",
													fontFamily: "微软雅黑",
													fontWeight: "bold"}}>
									{item[0]}
								</Link>
							</li>    
						))
					}
				</div>
			))
		}   

		<Divider />

		<div>
			<p style={{ textAlign: 'center' }}>
				<span>京ICP备16017121号-3 京ICP证 160773号 中国公安局标志</span>
				<span>
					<img alt="警徽" 
						 src="https://z1.muscache.cn/airbnb/static/packages/public_security_bureau_logo.d0289dc0.png" 
						 style={{	width:"20px",
						 			height:"20px"}}/>		
				</span>
				<span>京公网安备 11010502032345号 安彼迎网络（北京）有限公司</span>
			</p>
			
			<p style={{ textAlign: 'center' }}>
				© 2019 Airbnb, Inc. All rights reserved.
			</p>
		</div>

	</div>
);
}
}

export default Footer;