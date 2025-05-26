export const BUTTON_CONFIG = [
  [
    { text: '+/-', className: 'masmenos', action: 'toggleSign' },
    { text: 'C', className: 'borrar', action: 'clearAll' },
    { text: '%', className: 'operador', value: 'modulo', action: 'selectOperation' },
    { text: '÷', className: 'operador', value: 'dividir', action: 'selectOperation' }
  ],
  [
    { text: '7', action: 'addDigit' },
    { text: '8', action: 'addDigit' },
    { text: '9', action: 'addDigit' },
    { text: '×', className: 'operador', value: 'multiplicar', action: 'selectOperation' }
  ],
  [
    { text: '4', action: 'addDigit' },
    { text: '5', action: 'addDigit' },
    { text: '6', action: 'addDigit' },
    { text: '-', className: 'operador', value: 'restar', action: 'selectOperation' }
  ],
  [
    { text: '1', action: 'addDigit' },
    { text: '2', action: 'addDigit' },
    { text: '3', action: 'addDigit' },
    { text: '+', className: 'operador', value: 'sumar', action: 'selectOperation' }
  ],
  [
    { text: '0', colSpan: 2, action: 'addDigit' },
    { text: '.', action: 'addDecimal' },
    { text: '=', className: 'operador', value: 'igual', action: 'selectOperation' }
  ]
]
