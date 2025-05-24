import { useState } from 'react'

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState('')
  const [operation, setOperation] = useState(null)
  const [shouldResetScreen, setShouldResetScreen] = useState(false)

  const MAX_DISPLAY_LENGTH = 9
  const MAX_VALUE = 999999999

  const clearAll = () => {
    setCurrentValue('0')
    setPreviousValue('')
    setOperation(null)
    setShouldResetScreen(false)
  }

  const clear = () => {
    setCurrentValue('0')
  }

  const toggleSign = () => {
    if (currentValue === '0') return
    
    if (currentValue.startsWith('-')) {
      setCurrentValue(currentValue.slice(1))
    } else {
      if (currentValue.length >= MAX_DISPLAY_LENGTH) return
      setCurrentValue('-' + currentValue)
    }
  }

  const addDigit = (digit) => {
    if (currentValue.length >= MAX_DISPLAY_LENGTH) return
    
    if (shouldResetScreen) {
      setCurrentValue(digit)
      setShouldResetScreen(false)
    } else {
      setCurrentValue(currentValue === '0' ? digit : currentValue + digit)
    }
  }

  const addDecimal = () => {
    if (shouldResetScreen) {
      setCurrentValue('0.')
      setShouldResetScreen(false)
      return
    }
    
    if (currentValue.length >= MAX_DISPLAY_LENGTH) return
    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.')
    }
  }

  const calculateResult = () => {
    if (!operation || !previousValue) return

    const prev = parseFloat(previousValue)
    const current = parseFloat(currentValue)
    let result = 0

    switch (operation) {
      case 'sumar':
        result = prev + current
        break
      case 'restar':
        result = prev - current
        break
      case 'multiplicar':
        result = prev * current
        break
      case 'dividir':
        result = prev / current
        break
      case 'modulo':
        result = prev % current
        break
      default:
        return
    }

    if (result < 0) {
      setCurrentValue('ERROR')
      setPreviousValue('')
      setOperation(null)
      return
    }

    if (result > MAX_VALUE) {
      setCurrentValue('ERROR')
      setPreviousValue('')
      setOperation(null)
      return
    }

    const resultString = result.toString()
    const displayResult = resultString.length > MAX_DISPLAY_LENGTH 
      ? parseFloat(result.toFixed(MAX_DISPLAY_LENGTH - resultString.split('.')[0].length - 1)).toString()
      : resultString

    setCurrentValue(displayResult)
    setPreviousValue('')
    setOperation(null)
  }

  const selectOperation = (op) => {
    if (op === 'igual') {
      calculateResult()
      return
    }

    if (currentValue === 'ERROR') {
      clearAll()
      return
    }

    if (operation && previousValue && !shouldResetScreen) {
      calculateResult()
    }

    setPreviousValue(currentValue)
    setOperation(op)
    setShouldResetScreen(true)
  }

  return {
    currentValue,
    previousValue,
    operation,
    clearAll,
    clear,
    toggleSign,
    addDigit,
    addDecimal,
    selectOperation
  }
}