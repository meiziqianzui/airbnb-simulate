import React, { Component } from 'react';
import Header from './Header';
import {Link ,BrowserRouter as Router,Route} from 'react-router-dom';
import Activity from './Submenus/Activity';
import Attractions from './Submenus/Attractions';
import Culture from './Submenus/Culture';
import Food from './Submenus/Food';
import Store from './Submenus/Store';
import Listing from './Submenus/Listing';
import Featured from './Submenus/Featured';

const menu=[
    {
        title:"精选故事",
        aid:""
    },
    {
        title:"房源",
        aid:"listing"
    },
    {
        title:"景点",
        aid:"attractions"
    },
    {
        title:"美食",
        aid:"food"
    },
    {
        title:"文化",
        aid:"culture"
    },
    {
        title:"活动",
        aid:"activity"
    },
    {
        title:"店铺",
        aid:"store"
    }
]   

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            subnav:""
         };
    }

    handleChange = (item) =>{ 
        this.setState({
            subnav:item
        })
    }

render() {
return (
    <div>
        <Router>
            <div style={{width:"80%",borderBottom:"solid 2px #EBEBEB"}}>
                {
                    menu.map((item,index)=>(
                        <div 
                            key={index}
                            onClick={this.handleChange.bind(this,item.aid)}
                            style={{    height:"60px",
                                        marginRight:"20px",
                                        textAlign:"center",
                                        fontSize:"16px",
                                        lineHeight:"60px",
                                        fontWeight: "600",
                                        fontFamily: "微软雅黑",   
                                        backgroundColor:"white",                              
                                        display:"inline-block"}}>
                            {
                                this.state.subnav===item.aid ?
                                    <Link to={`/story/featured/${item.aid}`}>
                                        <div style={{   color: "#008489",        
                                                        borderBottom:"solid 2px #008489"}}>                                        
                                    
                                            {item.title}  
                                        </div>
                                    </Link>
                                :
                                    <Link to={`/story/featured/${item.aid}`} >
                                        <div style={{ color: "#484848" }}>             
                                            {item.title} 
                                        </div>                                         
                                    </Link>
                            }
                        </div>
                    ))
                }
            </div>
            <br/>
            <div>
                <Route exact path='/story/featured' component={Featured}  />
                <Route path='/story/featured/store' component={Store}  />
                <Route path='/story/featured/listing' component={Listing}  />
                <Route path='/story/featured/attractions' component={Attractions}  />
                <Route path='/story/featured/food' component={Food}  />
                <Route path='/story/featured/culture' component={Culture}  />
                <Route path='/story/featured/activity' component={Activity}  />                    
            </div>
        </Router>
    </div>          
);
}
}

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }   
    render() {
        return (
            <div>
                <Header/>  
                <div style={{width:"80%",margin:"50px auto"}}>
                    <h1  style={{   color:"#484848",
                                    fontSize:"32px",
                                    fontWeight:"800",}}>
                        故事
                    </h1>

                    <Menus/>
                    
                
                </div>


            </div>
        );
    }
}

export default Story;