import React, { useState, useRef, useEffect } from 'react';

function Comic() {
  const timer = useRef()
  let i = 0
  const [count, setCount] = useState(0)

  useEffect(() => {
    timer.current = setInterval(() => {
      if (i < 10) {
        setCount(i++)
      } else {
        clearInterval(timer.current)
      }
    }, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  return (
    <>
      <div>comic</div>
      <div>{count}</div>
    </>
  );
}

export default Comic;