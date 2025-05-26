import React from 'react'
import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import CalculatorButtons from './CalculatorButtons'

const Calculator = () => {
  const { currentValue, previousValue, clearAll, toggleSign, addDigit, addDecimal, selectOperation } = useCalculator()

  return (
    <div className="grid grid-cols-4 bg-black p-4 rounded-3xl shadow-xl w-[320px]">
      <Display previousValue={previousValue} currentValue={currentValue} />
      <CalculatorButtons toggleSign={toggleSign}clearAll={clearAll}selectOperation={selectOperation}addDigit={addDigit}addDecimal={addDecimal}
      />
    </div>
  )
}

export default Calculator