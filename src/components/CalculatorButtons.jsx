import React from 'react'
import Button from './Button'
import { BUTTON_CONFIG } from '../../buttonConfig'
import { CalculatorButtonsPropTypes } from '../types/propTypes'

const CalculatorButtons = ({ toggleSign, clearAll, selectOperation, addDigit, addDecimal }) => {
  const actions = { toggleSign, clearAll, selectOperation, addDigit, addDecimal }
  return (
    <>
      {BUTTON_CONFIG.flat().map((btn, idx) => (
        <Button key={`${btn.text}-${idx}`} className={btn.className} value={btn.value} colSpan={btn.colSpan} onClick={actions[btn.action]}>
          {btn.text}
        </Button>
      ))}
    </>
  )
}; CalculatorButtons.propTypes = CalculatorButtonsPropTypes

export default CalculatorButtons