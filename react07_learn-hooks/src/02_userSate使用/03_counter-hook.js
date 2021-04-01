import React, {useState} from 'react'

export default function CounterHook1() {
  const [counter, setCount] = useState( () => 10 )
  console.log("CounterHook渲染");

  function handleAdd() {
    // setCount( counter + 10)
    // setCount( counter + 10)
    // setCount( counter + 10)
    // setCount( counter + 10)
    setCount(prev => prev + 10)
    setCount(prev => prev + 10)
    setCount(prev => prev + 10)
    setCount(prev => prev + 10)
  }
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCount(counter + 1)}>+</button>
      <button onClick={e => setCount(counter + 1)}>+</button>
      <button onClick={e => setCount(prev => prev + 10)}>+10</button>
      <button onClick={handleAdd}>add10</button>
    </div>
  )
}
