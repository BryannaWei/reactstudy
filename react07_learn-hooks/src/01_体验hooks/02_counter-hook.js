import React, {useState} from 'react'

export default function CounterHook() {
  const [counter, setState] = useState(0)

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setState(counter - 1)}>-</button>
      <button onClick={e => setState(counter + 1)}>+</button>
    </div>
  )
}
