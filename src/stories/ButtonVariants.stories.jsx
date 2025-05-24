import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Calculator/ButtonVariants',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-4 gap-2 p-4 bg-black rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export const NumberButtons = {
  render: () => (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <Button key={num} onClick={() => console.log(num)}>
          {num}
        </Button>
      ))}
    </>
  ),
};

export const OperatorButtons = {
  render: () => (
    <>
      <Button className="operador" value="sumar" onClick={() => console.log('+')}>
        +
      </Button>
      <Button className="operador" value="restar" onClick={() => console.log('-')}>
        -
      </Button>
      <Button className="operador" value="multiplicar" onClick={() => console.log('×')}>
        ×
      </Button>
      <Button className="operador" value="dividir" onClick={() => console.log('÷')}>
        ÷
      </Button>
      <Button className="operador" value="igual" onClick={() => console.log('=')}>
        =
      </Button>
    </>
  ),
};

export const FunctionButtons = {
  render: () => (
    <>
      <Button className="borrar" onClick={() => console.log('C')}>
        C
      </Button>
      <Button className="borrar" onClick={() => console.log('←')}>
        ←
      </Button>
      <Button className="masmenos" onClick={() => console.log('+/-')}>
        +/-
      </Button>
      <Button onClick={() => console.log('.')}>
        .
      </Button>
    </>
  ),
};