
import Display from '../components/Display'

export default {
  title: 'Calculator/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Empty = {
  args: {
    previousValue: '',
    currentValue: '0',
  },
}

export const WithNumber = {
  args: {
    previousValue: '',
    currentValue: '123',
  },
}

export const WithOperation = {
  args: {
    previousValue: '123',
    currentValue: '456',
  },
}

export const WithDecimal = {
  args: {
    previousValue: '',
    currentValue: '123.456',
  },
}

export const MaxDigits = {
  args: {
    previousValue: '',
    currentValue: '123456789',
  },
}

export const Error = {
  args: {
    previousValue: '',
    currentValue: 'ERROR',
  },
}