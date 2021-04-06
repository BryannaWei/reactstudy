import React, { useState, useEffect } from 'react'
import useLocalStoreHook from '../Hook/localstore-hook'

export default function CustomLocalStoreHook() {
  // const [name, setName] = useState(() => {
  //   const data = window.localStorage.getItem('name')
  //   console.log(data)
  //   return data
  // })

  // useEffect(() => {
  //   window.localStorage.setItem('name',name)
  // }, [name])

  const [name,setName] = useLocalStoreHook("name")

  return (
    <div>
      <h2>CustomLocalStoreHook:{name}</h2>
      <button onClick={e => setName("bryanna")}>set name</button>
    </div>
  )
}
