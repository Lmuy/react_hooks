import React, { Suspense, lazy } from 'react'
import {
  useRoutes
} from 'react-router-dom'
const router = [
  {
    path: '/',
    component: lazy(() => import('../pages/home')),
    children: [
      { path: '/home/comic', component: lazy(() => import('../pages/comic')) },
      { path: '/home/novel', component: lazy(() => import('../pages/novel')) },
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('../pages/login'))
  },
  {
    path: '*',
    component: lazy(() => import('../pages/login'))
  }
]

// 路由处理方式
const changeRouter = (routers) => {
  return routers.map(item => {
    if (item.children) {
      item.children = changeRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component />
    </Suspense>
    return item
  })
}

const Router = () => useRoutes(changeRouter(router))

export default Router