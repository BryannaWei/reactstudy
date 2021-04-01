import React, {useReducer} from 'react'
import reducer from './reducer'

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h2>Profile</h2>
      <h2>{state.count}</h2>
      <button onClick={e => dispatch({type:"increment"})}>+</button>
      <button onClick={e => dispatch({type:"decrement"})}>-</button>
    </div>
  )
}
