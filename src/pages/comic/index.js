import React, { useState, useRef, useEffect } from 'react';

function Comic() {
  const timer = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    timer.current = setInterval(() => {
      if (count < 10) {
        setCount(count => ++count)
      } else {
        clearInterval(timer.current)
      }
    }, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [count])

  return (
    <>
      <div>comic</div>
      <div>{count}</div>
    </>
  );
}

export default Comic;
/**
 * useState 的坑：

　　修改state后，如果直接调用此state，会发现state的值未发生改变。

　　当调用setState时，react是异步更新state的，如果setState后立即获取state的值，此时state尚未更新，因此为旧的状态。

useRef 总共有两种用法：

　　1、获取子组件的实例

　　 2、在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的 this.xxx

　　有些情况下，我们需要保证函数组件每次 render 之后，某些变量不会被重复申明，比如说 Dom 节点，定时器的 id 等等。

　　在类组件中，我们完全可以通过给类添加一个自定义属性来保留，比如说 this.xxx， 但是函数组件没有 this，我们就需要使用 useRef 来实现。

区别：

　　1、useState触发重新渲染，useRef不触发。

　　2、useState异步更新其值，useRef同步更新。
*/