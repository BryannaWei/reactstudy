import { useState, useEffect } from 'react'

export default function useGetScrollHook() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return position
}
