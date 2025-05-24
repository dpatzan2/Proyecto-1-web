import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'
import Display from './Display'

const Calculator = () => {
  const {
    currentValue,
    previousValue,
    clearAll,
    clear,
    toggleSign,
    addDigit,
    addDecimal,
    selectOperation
  } = useCalculator()

  return (
    <div className="grid grid-cols-4 bg-black p-4 rounded-3xl shadow-xl w-[320px]">
      <Display previousValue={previousValue} currentValue={currentValue} />
      
      <Button className="masmenos" onClick={toggleSign}>+/-</Button>
      <Button className="borrar" onClick={clearAll}>C</Button>
      <Button className="borrar" onClick={clear}>&larr;</Button>
      <Button className="operador" value="dividir" onClick={selectOperation}>÷</Button>
      
      <Button onClick={addDigit}>7</Button>
      <Button onClick={addDigit}>8</Button>
      <Button onClick={addDigit}>9</Button>
      <Button className="operador" value="multiplicar" onClick={selectOperation}>×</Button>
      
      <Button onClick={addDigit}>4</Button>
      <Button onClick={addDigit}>5</Button>
      <Button onClick={addDigit}>6</Button>
      <Button className="operador" value="restar" onClick={selectOperation}>-</Button>
      
      <Button onClick={addDigit}>1</Button>
      <Button onClick={addDigit}>2</Button>
      <Button onClick={addDigit}>3</Button>
      <Button className="operador" value="sumar" onClick={selectOperation}>+</Button>
      
      <Button colSpan={2} onClick={addDigit}>0</Button>
      <Button onClick={addDecimal}>.</Button>
      <Button className="operador" value="igual" onClick={selectOperation}>=</Button>
    </div>
  )
}

export default Calculator