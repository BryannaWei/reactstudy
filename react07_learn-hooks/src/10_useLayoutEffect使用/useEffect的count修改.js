import React, { useState, useEffect } from 'react'

export default function EffectCountDemo() {
  const [count, setCount] = useState(10)

  useEffect(() => {//在DOM更新后执行,不会阻塞
    if (count == 9) {
      setCount(Math.random() + 200)
    }
  }, [count])

  return (
    <div>
      <h2>number:{count}</h2>
      <button onClick={e => setCount(9)}>change</button>
    </div>
  )
}
