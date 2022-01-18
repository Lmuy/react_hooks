import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './app.scss'
const Login = React.lazy(() => import('./pages/login/index'))
const Home = React.lazy(() => import('./pages/home/index'))
const Layout = React.lazy(() => import('./pages/layout/index'))

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/layout/*' element={<Layout />} />
            {/* <Route exact path='*' element={<Navigate to='/' />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
