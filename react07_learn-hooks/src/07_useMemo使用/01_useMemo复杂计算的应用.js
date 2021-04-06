import React, {useState, useMemo} from 'react'

function calcNum(count) {
  console.log('重新计算');
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total;
}
export default function MemoHookDemo01() {

  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)
  
  // let total = 0;
  // console.log('重新计算')
  // for (let i = 1; i < count; i++) {
  //   total += i;
  // }//切换时会重新计算

  const total = useMemo(() => calcNum(count), [count])
  
  return (
    <div>
      <h2>计算数字的和:{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
