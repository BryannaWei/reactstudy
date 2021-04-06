import React, { forwardRef, useRef } from 'react'

const BInput = forwardRef((props,ref) => {
  return <input ref={ref} type="text" />
})

export default function ForwardRefDemo() {
  const bRef = useRef();
  return (
    <div>
      <BInput ref={bRef} />
      <button onClick={e => bRef.current.focus()}>focus</button>
    </div>
  )
}
