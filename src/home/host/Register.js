import React, { Component } from 'react';
import { Modal} from 'antd';
import '../home.css';
import {Form,Input,Tooltip,Icon,
        Row,Col,Checkbox,Button,} from 'antd';

class From7 extends React.Component {
    constructor(){
      super();
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
    }      
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };
    
      handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      };	
      render() {
            const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
    return (
      <Form id="registration" 
            {...formItemLayout} 
            onSubmit={this.handleSubmit}  
            style={{marginLeft:"4%",
                    width:"80%"}}>
            <Form.Item
          label={
                <span>用户名 
                  <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }>
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              })(<Input />)}
        </Form.Item>
            <Form.Item label="邮箱">
          {getFieldDecorator('email', {
            rules:[
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                  ],
              })
            (<Input />)
          }
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules:[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
              })
              (<Input.Password />)
            }
        </Form.Item>
        <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator('confirm', {
              rules:[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
              })
              (<Input.Password onBlur={this.handleConfirmBlur} />)
            }
        </Form.Item>
        <Form.Item label="验证码" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })
                (<Input />)
              }
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
             )
          }
        </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" 
                    htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
);
}
}

class Register extends Component {
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
        const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(From7);
        return (
            <div style={{display:"inline-block"}}>
                <div className="nav"
                     onClick={this.showModal}>
                    注册
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
    <h2 style={{fontWeight:"800"}}>注册爱彼迎账号</h2>
    <p>已有账号？
      登录
    </p>
  </div>
)

export default Register;