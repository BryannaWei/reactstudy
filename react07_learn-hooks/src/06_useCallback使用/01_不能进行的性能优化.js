import React, { useState, useCallback } from 'react'

export default function CallbackHookDemo01() {
  
  const [count, setCount] = useState(0)

  const increment01 = () => {
    console.log('increment01')
    setCount(count + 1)
  }//有函数的创建过程
  const increment02 = useCallback(
    () => {
      console.log('increment02')
      setCount(count + 1)
    },[count])//也有函数的创建过程,没有任何的性能优化;占据的内存多些,除了匿名函数还有increment02函数;
    
  return (
    <div>
      <h2>CallbackHookDemo01:{count}</h2>
      <button onClick={increment01}>+1</button>
      <button onClick={increment02}>+1</button>
    </div>
  )
}
