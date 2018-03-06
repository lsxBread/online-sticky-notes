import React from 'react'
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Auth extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTabKey: '1',
      action: 'login'
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.checkPassword = this.checkPassword.bind(this);
  }

  handleOk() {
    let fieldName = 
      this.state.activeTabKey === '1' 
        ? ['username', 'password'] 
        : ['r_username', 'r_password', 'r_confirmPassword'];
    this.props.form.validateFields(fieldName, (err, values) => {
      if (!err) {
        if (fieldName.length === 2) {
          console.log('Received values of form: ', values)
          this.props.triggerLogin(values)
        } else {
          this.props.triggerRegister(values)
        }
      }
    })
  }

  handleCancel() {
    this.props.closeAuthModal()
  }

  changeTab(activeKey) {
		let action = activeKey === '1' ? 'login' : 'register'
		this.setState({
			activeTabKey: activeKey,
			action: action
		})
  }
  
  checkPassword(rule, value, callback) {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('r_password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	}

  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title='User Account'
        wrapClassName='verticle-center'
        visible={this.props.user.isAuthModalShown}
				onCancel={this.handleCancel}
				onOk={this.handleOk}
      >
        <Tabs
          type='card'
          activeKey={this.state.activeTabKey}
					onChange={this.changeTab}
        >
          <TabPane tab='Login' key='1'>
            <Form layout='vertical'>
              <FormItem label='Username'>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter username...' />)}
              </FormItem>
              <FormItem label='Password'>
                {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }] })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter password...' />)}
              </FormItem>
            </Form>
          </TabPane>

          <TabPane tab='Register' key='2'>
            <Form layout='vertical'>
              <FormItem label='Username'>
                {getFieldDecorator('r_username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter username...' />)}
              </FormItem>
              <FormItem label='Password'>
                {getFieldDecorator('r_password', { rules: [{ required: true, message: 'Please input your password!' }] })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter password...' />)}
              </FormItem>
              <FormItem label='Password Again'>
                {getFieldDecorator('r_confirmPassword', {
                  rules: [
                    { required: true, message: 'Please verify your password!' },
                    { validator: this.checkPassword }
                  ]
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Verify password' />)}
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default Auth = Form.create({})(Auth)