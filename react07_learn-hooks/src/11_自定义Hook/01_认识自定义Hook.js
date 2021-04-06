import React, { useEffect } from 'react'

const Home = (props) => {
  // useEffect(() => {
  //   console.log('Home组件被创建')
  //   return () => {
  //     console.log('Home组件被销毁')
  //   }
  // }, [])
  useLoggingLife('Home')
  return <h2>Home</h2>
}
const Profile = (props) => {
  useLoggingLife('Profile')
  return <h2>Profile</h2>
}

function useLoggingLife(name) { // 必须use开头
  useEffect(() => {
    console.log(`${name}组件被创建`)
    return () => {
      console.log(`${name}组件被销毁`)
    }
  }, [])
}

export default function CustomLifeHookDemo01() {
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  )
}
