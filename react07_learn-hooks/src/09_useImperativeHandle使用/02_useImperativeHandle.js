import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const BInput = forwardRef((props,ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }), [inputRef])

  return <input ref={inputRef} type="text" />
})

export default function UseImperaticeHandleHookDemo() {
  const inputRef = useRef();
  return (
    <div>
      <BInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>focus</button>
    </div>
  )
}
