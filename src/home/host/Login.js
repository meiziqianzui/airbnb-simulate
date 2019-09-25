import React, { Component } from 'react';
import { Modal} from 'antd';
import '../home.css';
import { Form, Icon,Input, Button, Checkbox} from 'antd';

class From10 extends React.Component {
constructor(props) {  //构造函数
    super(props);
    this.state = {
        user:'',
        password:'',
    }
    this.userChange = this.userChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getConnect = this.getConnect.bind(this);
}

    userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let text = {user:this.state.user,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串

        fetch(`http://127.0.0.1:8081/password`,{   //Fetch方法
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: send
        }).then(res => res.json()).then(
            data => {
                if(data.success) 
            //window.alert('验证成功，欢迎登录');
                window.location.href="http://localhost:3000"
                else window.alert('验证失败，用户名或密码错误')
            }
        )
    }

    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    if (!err) {
        console.log('Received values of form: ', values);
    }
    });
    };

render(){
		const { getFieldDecorator } = this.props.form;
return(
    <Form   onSubmit={this.handleSubmit} 
            style={{margin:"10px 0 0",
                    width:"60%",
                    marginLeft:"20%"}}>
      <Form.Item>
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input  prefix={<Icon type="user"/>}
                    type="username"
                    placeholder="Username"
                    onChange={this.userChange}/>,
          )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input  prefix={<Icon type="lock"  
                    style={{ color: 'rgba(0,0,0,.25)'}} />}
                    type="password"
                    placeholder="Password"
                    onChange={this.passwordChange}/>,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}


          <a href="#">
            Forgot password
          </a>
          <br/>
            Or &nbsp;&nbsp;&nbsp;
          <a href="#">
            register now!
          </a>


          <br/>
        <Button type="primary" 
                htmlType="submit"  
                onClick={this.submit}>
          Log in
        </Button>
      </Form.Item>
    </Form>
    )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
      };   

render() {
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(From10);
    return (
        <div style={{display:"inline-block"}}>
            <div className="nav"
                    onClick={this.showModal}>
                登录
            </div>
            <Modal  title={title}
                    footer=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
              <WrappedNormalLoginForm/>
            </Modal>
        </div>
    );
}
}

const title=(
  <div>
    <h2 style={{fontWeight:"800"}}>已有爱彼迎账号</h2>
    <p>没有账号？
      注册
    </p>
  </div>
)

export default Login;