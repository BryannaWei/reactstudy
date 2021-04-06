import React, { useRef } from 'react'

class TestCpn extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return <h2>TestCpn</h2>
  }
}
function TestCpn2(props) {
  return <h2>TestCpn2</h2>
}//组件引入DOM得为class

export default function RefHookDemo01() {
  const titleRef = useRef();
  const inputRef = useRef();
  const testCpnRef = useRef();
  const testCpnRef2 = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = 'Hello World';
    inputRef.current.focus()
    console.log(testCpnRef.current)
    console.log(testCpnRef2.current)
  }
  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type='text' />
      <TestCpn ref={testCpnRef} />
      <TestCpn2 ref={testCpnRef2} />

      <br/><button onClick={e => changeDOM()}>change</button>
    </div>
  )
}
