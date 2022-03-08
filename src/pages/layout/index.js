import React, { Suspense } from 'react';
import Header from '../../components/Header'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './layout.scss'
const Comic = React.lazy(() => import('../comic/index.js'))
const Novel = React.lazy(() => import('../novel/index.js'))


function Layout() {
  return (
    <div className="layout">
      <Header />
      <div>布局</div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavLink to="/layout/comic" className={({ isActive }) => isActive ? 'selected' : ''}>动漫</NavLink>
        <NavLink to="/layout/novel" className={({ isActive }) => isActive ? 'selected' : ''}>文章</NavLink>
      </Suspense>
      <div>
        <Routes>
          <Route exact path='/comic' element={<Comic />} />
          <Route exact path='/novel' element={<Novel/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;