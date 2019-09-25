import React  from 'react';
import Logo from '../Share/Logo';
import {Link} from 'react-router-dom';

const a =[
    {
        title:"首页",
        urltitle:""   
    },
    {
        title:"出租房源",
        urltitle:"renthomes/"   
    },
    {
        title:"体验",
        urltitle:"experience/"   
    },
    {
        title:"故事",
        urltitle:"story/"   
    }
]

const Header = () => (
    <div style={{   height:"80px",
                    position:"sticky",
                    top:"0",
                    borderBottom:"solid 1px #EBEBEB",
                    backgroundColor:"white"}}>

        <Logo/>
        
        <div  id="storyHeader"
                style={{    position:"absolute",
                            top:"0",
                            right:"50px"}}>
                {
                    a.map((item,key)=>(
                        <div key={key}
                            class="nav">     
                            <Link to={`/${item.urltitle}`}  
                                style={{    color: "#484848",
                                            fontSize:"16px",
                                            fontFamily: "微软雅黑",
                                            fontWeight: "bold"}}>
                                {item.title}
                            </Link>
                        </div>
                    ))
                }
            </div>    
    </div>
)

export default Header;