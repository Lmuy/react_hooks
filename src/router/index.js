import React, { lazy, Suspense } from 'react';
import { Navigate } from "react-router-dom";
const Comic = React.lazy(() => import('../pages/comic'))
const Novel = React.lazy(() => import('../pages/novel'))
const Movies = React.lazy(() => import('../pages/movies'))
const Login = React.lazy(() => import('../pages/login'))
const Home = React.lazy(() => import('../pages/home'))

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const Menu = [
  {
    path:'/',
    exact: true,
    render: () =>  <Navigate to='/login' />
  },
  {
    path: '/login',
    exact: true,
    component: SuspenseComponent(Login)
  },
  {
    path: '/home',
    component: SuspenseComponent(Home),
    routes: [{
      path: '/home/comic',
      exact: true,
      component: SuspenseComponent(Comic)
    }]
  }
]

// const Menu = [
//   {
//     path: '/comic',
//     name: 'comic',
//     title: '动漫',
//     component: Comic
//   },
//   {
//     path: '/novel',
//     name: 'novel',
//     title: '文章',
//     component: Novel
//   },
//   {
//     path: '/movies',
//     name: 'movies',
//     title: '电影',
//     component: Movies
//   }
// ]

export default Menu