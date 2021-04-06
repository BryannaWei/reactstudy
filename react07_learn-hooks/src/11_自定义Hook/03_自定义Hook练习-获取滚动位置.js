import React, { useState, useEffect } from 'react'
import useGetScrollHook from '../Hook/scroll-hook'

export default function CustomScrollPositionHook() {
  // const [position, setPosition] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setPosition(window.scrollY)
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const position = useGetScrollHook()

  return (
    <div style={{padding:'1000px 0'}}>
      <h2 style={{position:'fixed',left:0,top:0}}>CustomScrollPositionHook:{position}</h2>
    </div>
  )
}
