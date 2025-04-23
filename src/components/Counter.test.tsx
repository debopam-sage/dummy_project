import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'
import { describe, it, expect } from 'vitest'

describe('Counter', () => {
  it('renders with initial values', () => {
    render(<Counter initialValue={5} />)
    expect(screen.getByText('Counter: 5')).toBeInTheDocument()
  })

  it('increments counter when increment button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('decrements counter when decrement button is clicked', () => {
    render(<Counter />)
    const decrementButton = screen.getByText('Decrement')
    fireEvent.click(decrementButton)
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
  })
}) 