import React, { useState, useEffect } from 'react'

export default function EffectTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count;
  })

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
