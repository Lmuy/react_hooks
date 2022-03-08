import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import { Button } from 'antd';
import './home.scss'

function Home(props) {
  const navigate = useNavigate()
  let params = useLocation()

  const toLogin = () => {
    navigate('/login')
  }
  const toLayout = () => {
    navigate('/layout')
  }

  const [color, setColor] = useState('transparent')
  useEffect(() => {
    console.log(params)
    handleColor()
  },[])
  const handleColor = () => {
    const arr = ['red', 'black', 'yellow', 'transparent']
    const No = parseInt(Math.random()*3)
    setColor(arr[No])
  }

  return (
    <div className="home">
      <Header background={color} changeColor={handleColor}/>
      <h1>Home Page</h1>
      <div>接收到的参数是
        {Object.keys(params.state).map((key) => (
          <p key={key}>
            {key} : {params.state[key]}
          </p>
        ))}
      </div>
      <Button onClick={toLogin}>去登录</Button>
      <Button onClick={toLayout}>去浏览</Button>
    </div>
  );
}

export default Home;