import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import './login.scss'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const onFinish = () => {
    setLoading(true)
    setTimeout(() => {
      message.success(`用户${username}登录成功`);
      setLoading(false)
      navigate('/home', { state: { username: username } })
    }, 2000)
  }

  const onFinishFailed = () => {
    message.warning('请补全登录信息')
  }

  return (
    <div className="login">
      <Spin tip="正在登录..." spinning={isLoading}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="请输入账号" onChange={(e) => {setUserName(e.target.value)}} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="请输入密码" onChange={(e) => {setPassWord(e.target.value)}} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}

export default Login;