
import Calculator from '../components/Calculator'

export default {
  title: 'Calculator/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(to right, #3b82f6, #06b6d4)' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#f5f5f5' },
      ],
    },
  },
  tags: ['autodocs'],
}

export const Default = {}