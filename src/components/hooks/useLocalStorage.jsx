import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // grabbing item from local storage if it exists
    const item = localStorage.getItem(key)
    // if it doesn't exist it will set the state (storedValue), to initialValue
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    // set the item on localStorage
    localStorage.setItem(key, JSON.stringify(value))
    // then return localStorage value that was set
    setStoredValue(value)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
