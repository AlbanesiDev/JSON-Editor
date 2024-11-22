import { useState, useEffect } from 'react'

export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string>(() => {
    return localStorage.getItem(key) || initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  const clearValue = () => {
    setValue('')
    localStorage.removeItem(key)
  }

  return { value, setValue, clearValue }
}
