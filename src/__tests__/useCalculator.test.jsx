import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'

describe('useCalculator Hook', () => {
  test('initializes with default values', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.currentValue).toBe('0')
  })

  test('adds digits correctly', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => {
      result.current.addDigit('1')
    })
    expect(result.current.currentValue).toBe('1')
  })

  test('clears display correctly', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => {
      result.current.addDigit('1')
    })
    
    act(() => {
      result.current.clearAll()
    })
    expect(result.current.currentValue).toBe('0')
  })

})