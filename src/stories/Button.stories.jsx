import Button from '../components/Button'

export default {
  title: 'Calculator/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      control: { type: 'select' },
      options: ['', 'operador', 'borrar', 'masmenos'],
    },
    colSpan: {
      control: { type: 'select' },
      options: [1, 2],
    },
  },
}

export const Number = {
  args: {
    children: '7',
    className: '',
    value: '7',
    colSpan: 1,
  },
}

export const Operator = {
  args: {
    children: '+',
    className: 'operador',
    value: 'sumar',
    colSpan: 1,
  },
}

export const Clear = {
  args: {
    children: 'C',
    className: 'borrar',
    colSpan: 1,
  },
}

export const BackSpace = {
  args: {
    children: '←',
    className: 'borrar',
    colSpan: 1,
  },
}

export const Zero = {
  args: {
    children: '0',
    className: '',
    value: '0',
    colSpan: 2,
  },
}

export const Decimal = {
  args: {
    children: '.',
    className: '',
    value: '.',
    colSpan: 1,
  },
}

export const ToggleSign = {
  args: {
    children: '+/-',
    className: 'masmenos',
    colSpan: 1,
  },
}