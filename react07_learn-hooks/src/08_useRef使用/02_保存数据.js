import React, { useState, useEffect, useRef } from 'react'

export default function RefHookDemo02() {

  const [count, setCount] = useState(0)

  const numCount = useRef(count)
  
  useEffect(() => {
    console.log(numCount)
    numCount.current = count
  }, [count])
  
  return (
    <div>
      <h2>count上一次值:{numCount.current}</h2>
      <h2>count当前值:{count}</h2>
      <button onClick={ e => setCount(count + 10) }>+10</button>
    </div>
  )
}
