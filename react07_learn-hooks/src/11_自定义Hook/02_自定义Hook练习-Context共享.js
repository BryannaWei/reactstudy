import React, { useContext } from 'react'
// import { UserContext, TokenContext } from '../App'
import useContextHook from '../Hook/context-hook'

export default function CustomContextShareHook() {
  // const user = useContext(UserContext);
  // const token = useContext(TokenContext);
  const [ user, token] = useContextHook()
  console.log(user,token)
  return (
    <div>
      <h2>CustomContextShareHook</h2>
    </div>
  )
}
