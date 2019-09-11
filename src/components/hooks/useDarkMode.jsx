import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const UseDarkMode = () => {
  // setting key to 'dark' and value to false
  const [dark, setDark] = useLocalStorage('mode', false)

  useEffect(() => {
    // grabbing body element
    const body = window.document.body
    // ternary, if dark is true add : remove class
    dark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [dark])

  return [dark, setDark]
}

export default UseDarkMode
