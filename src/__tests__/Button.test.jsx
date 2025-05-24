import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button onClick={() => {}}>7</Button>)
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>7</Button>)
    fireEvent.click(screen.getByText('7'))
    expect(handleClick).toHaveBeenCalledWith('7')
  })

  test('renders with correct class for number button', () => {
    render(<Button onClick={() => {}}>7</Button>)
    const button = screen.getByText('7')
    expect(button).toHaveClass('bg-gray-700')
  })

  test('renders with correct class for operator button', () => {
    render(<Button className="operador" onClick={() => {}}>+</Button>)
    const button = screen.getByText('+')
    expect(button).toHaveClass('bg-amber-500')
  })

  test('renders with correct class for clear button', () => {
    render(<Button className="borrar" onClick={() => {}}>C</Button>)
    const button = screen.getByText('C')
    expect(button).toHaveClass('bg-gray-400')
  })
})