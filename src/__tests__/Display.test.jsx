import React from 'react'
import { render, screen } from '@testing-library/react'
import Display from '../components/Display'

describe('Display Component', () => {
  test('renders current value correctly', () => {
    render(<Display currentValue="123" previousValue="" />)
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  test('renders previous value correctly', () => {
    render(<Display currentValue="456" previousValue="123" />)
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('456')).toBeInTheDocument()
  })
})