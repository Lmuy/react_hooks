import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useLocation, Routes, Route, NavLink } from 'react-router-dom'
import Header from '../../components/Header'
import { Button } from 'antd';
import './home.scss'
const Comic = React.lazy(() => import('../comic/index.js'))
const Novel = React.lazy(() => import('../novel/index.js'))

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
      <div>布局</div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavLink to="/home/comic" className={({ isActive }) => isActive ? 'selected' : ''}>动漫</NavLink>
        <NavLink to="/home/novel" className={({ isActive }) => isActive ? 'selected' : ''}>文章</NavLink>
      </Suspense>
      <div>
        <Routes>
          <Route exact path='/comic' element={<Comic />} />
          <Route exact path='/novel' element={<Novel/>} />
        </Routes>
      </div>
      <h1>Home Page</h1>
      <div>接收到的参数是
        {/* {Object.keys(params.state).map((key) => (
          <p key={key}>
            {key} : {params.state[key]}
          </p>
        ))} */}
      </div>
      <Button onClick={toLogin}>去登录</Button>
      <Button onClick={toLayout}>去浏览</Button>
    </div>
  );
}

export default Home;