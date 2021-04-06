import React, { memo, useState, useMemo } from 'react'

const WInfo = memo((props) => {
  console.log('WInfo重新渲染')
  return <h2>名字-{props.info.name} 年龄-{props.info.age}</h2>
})

export default function MemoHookDemo02() {
  
  console.log('MemoHookDemo02重新渲染')

  // const info = {name:'bryanna',age:18}
  const [show, setShow] = useState(true)
  const info = useMemo(() => {
    return { name: 'bryanna', age: 18 }
  }, [])
  
  return (
    <div>
      <WInfo info={info} />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
