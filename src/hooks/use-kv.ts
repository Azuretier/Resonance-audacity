import { useState, useEffect } from 'react'

/**
 * Custom hook for persisting state to localStorage
 * @param key - The localStorage key to use
 * @param initialValue - The initial value if no stored value exists
 * @returns A tuple of [state, setState] similar to useState
 */
export function useKV<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      // Check if item exists and is not empty/whitespace before parsing
      if (item && item.trim()) {
        return JSON.parse(item)
      }
      return initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const serialized = JSON.stringify(state)
      // Only write to localStorage if the value has actually changed
      const currentValue = localStorage.getItem(key)
      if (currentValue !== serialized) {
        localStorage.setItem(key, serialized)
      }
    } catch {
      console.error('Failed to save to localStorage')
    }
  }, [key, state])

  return [state, setState]
}
