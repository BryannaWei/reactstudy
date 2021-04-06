import React, { useState, useCallback, memo } from 'react'

export const WButton = memo((props) => {
  console.log('WButton重新渲染' + props.title)
  return <button onClick={props.increment}>W+</button>
})

export default function CallbackHookDemo02() {
  console.log('CallbackHookDemo02重新渲染')
  
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment01 = () => {
    console.log('increment01')
    setCount(count + 1)
  }//有函数的创建过程

  const increment02 = useCallback(() => {
    console.log('increment02')
    setCount(count + 1)
  },[count])
    
  return (
    <div>
      <h2>CallbackHookDemo02:{count}</h2>
      {/* <button onClick={increment01}>+1</button>
      <button onClick={increment02}>+1</button> */}
      <WButton title="btn1" increment={increment01} />
      <WButton title="btn2" increment={increment02} />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
