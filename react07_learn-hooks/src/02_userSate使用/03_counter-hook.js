import React, {useState} from 'react'

export default function CounterHook1() {
  const [counter, setState] = useState( () => 10 )
  console.log("CounterHook渲染");

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setState(counter + 1)}>+</button>
      <button onClick={e => setState(counter + 1)}>+</button>
    </div>
  )
}
