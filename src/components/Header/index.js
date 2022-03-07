import React from 'react';
import { Button } from 'antd';
import './header.scss'

const login = () => {
  return (
    <div>
      <Button type="text">退出</Button>
    </div>
  )
}
const unLogin = () => {
  return (
    <div>
      <Button type="text">注册</Button>
      <Button type="text">登陆</Button>
    </div>
  )
}

function Header() {
  const editButton = localStorage.getItem('username') ? login : unLogin
  return (
    <div className="header">
      <span>元气鉴赏平台</span>
      { editButton }
    </div>
  );
}

export default Header;