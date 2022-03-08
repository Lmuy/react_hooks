import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
import './header.scss'

function Header(props) {
  const { background, changeColor } = props
  const navigate = useNavigate()
  const signout = () => {
    navigate('/login')
  }
  const login = (
    <div>
      <Button type="text" onClick={signout}>退出</Button>
      <Button type="text" onClick={changeColor}>换肤</Button>
    </div>
  )
  const unLogin = (
    <div>
      <Button type="text">注册</Button>
      <Button type="text">登陆</Button>
    </div>
  )

  const editButton = localStorage.getItem('username') ? login : unLogin
  return (
    <div className="header" style={{background: background}}>
      <span>元气鉴赏平台</span>
      { editButton }
    </div>
  );
}

export default Header;