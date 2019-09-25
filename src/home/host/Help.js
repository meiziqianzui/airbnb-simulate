import React, { Component } from 'react';
import { Drawer } from 'antd';
import '../home.css';

class Help extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, };
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
      };

    onClose = () => {
        this.setState({
            visible: false,
        });
      }; 

    render() {
        return (
            <div style = {{ display:"inline-block" }}>
                <div className = "nav"
                     onClick = { this.showDrawer }>
                    帮助
                </div>
                <Drawer id = "drawer"
                        title = "推荐帮助"
                        placement = "right"
                        closable = { false }
                        onClose = { this.onClose }
                        visible = { this.state.visible }>
                    <div>
                        <h6>推荐文章</h6>
                        
                        <br></br>

                        <div>
                            <h3>如何创建爱彼迎账号</h3>
                            <p> 如果您还没有爱彼迎账号，请前往airbnb.com，然后点击注册。
                                您可以使用电子邮件地址、Facebook账号、Google账号或Amex账号注册。
                                注册和创建爱彼迎账号完全免费。注册后，请务必在预订住宿之前完成账号资料的填写。
                            </p>
                        </div>      
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Help;