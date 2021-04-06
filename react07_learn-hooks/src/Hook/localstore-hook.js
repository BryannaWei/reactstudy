import { useState, useEffect } from 'react'

export default function useLocalStoreHook(key) {
  const [name, setName] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem(key))
    return data
  })

  useEffect(() => {
    window.localStorage.setItem(key,JSON.stringify(name))
  }, [name])

  return [name, setName]
}
