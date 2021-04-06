import React, { useState, useLayoutEffect } from 'react'

export default function LayoutEffectCountDemo() {
  const [count, setCount] = useState(10)

  useLayoutEffect(() => {//在DOM更新前执行,会阻塞
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
