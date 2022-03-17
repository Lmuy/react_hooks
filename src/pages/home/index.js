import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useLocation, Routes, Route, NavLink } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './home.scss'
import { Menu } from 'antd';
const Comic = React.lazy(() => import('../comic/index.js'))
const Novel = React.lazy(() => import('../novel/index.js'))

function Home(props) {
  // const navigate = useNavigate()
  let params = useLocation()

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

  const [current, setCurrent] = useState('comic')
  const handleClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <div className="home">
      {/* 头部 */}
      <Header background={color} changeColor={handleColor}/>
      {/* 主体 */}
      <div className='wrapper'>
        <div className='content'>
          {/* 菜单 */}
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="comic">
            <Suspense fallback={<div>Loading...</div>}>
              <NavLink to="/home/comic" className={({ isActive }) => isActive ? 'selected' : ''}>动漫</NavLink>
            </Suspense>
          </Menu.Item>
          <Menu.Item key="novel">
            <Suspense fallback={<div>Loading...</div>}>
              <NavLink to="/home/novel" className={({ isActive }) => isActive ? 'selected' : ''}>文章</NavLink>
            </Suspense>
          </Menu.Item>
        </Menu>
        <div>
          <Routes>
            <Route exact path='/home/comic' element={<Comic />} />
            <Route exact path='/home/novel' element={<Novel/>} />
          </Routes>
        </div>
        </div>
      </div>
      {/* 底部 */}
      <Footer />
    </div>
  );
}

export default Home;