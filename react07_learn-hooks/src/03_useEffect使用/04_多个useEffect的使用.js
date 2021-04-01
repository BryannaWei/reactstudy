import React, {useState, useEffect} from 'react'

export default function MoreEffectUse() {

  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

useEffect(() => {
  console.log('修改DOM',count)
}, [count])

useEffect(() => {
  console.log('订阅事件')
}, [])

useEffect(() => {
  console.log('网络请求')
}, [])

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={e => setCount(count + 1)}>+</button>
      <h2>{isLogin ? 'Bryanna' : 'no login'}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>{isLogin ? '注销' : '登录'}</button>
    </div>
  )
}
