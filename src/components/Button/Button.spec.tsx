import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it, vi } from 'vitest'

import Button from './Button'

describe('Button', () => {
  it('should render the button with correct label', () => {
    const { getByText } = render(<Button label="Sample Button" />, {
      wrapper: BrowserRouter,
    })

    const buttonElement = getByText('Sample Button')

    expect(buttonElement).toBeInTheDocument()
  })

  it('should not apply outline styles when outline prop is false', () => {
    const { container } = render(
      <Button label="Sample Button" outline={false} />,
      { wrapper: BrowserRouter },
    )

    const buttonElement = container.firstChild
    expect(buttonElement).not.toHaveClass('outline')
  })

  it('should call handleClick when button is clicked', () => {
    const handleClick = vi.fn()

    const { getByText } = render(
      <Button label="Sample Button" handleClick={handleClick} />,
      { wrapper: BrowserRouter },
    )

    const buttonElement = getByText('Sample Button')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalled()
  })

  it('should display an arrow when withArrow prop is true', () => {
    const { getByTestId } = render(<Button label="Sample Button" withArrow />, {
      wrapper: BrowserRouter,
    })

    const arrowElement = getByTestId('arrow-down')

    expect(arrowElement).toBeInTheDocument()
  })

  it('should not display an arrow when withArrow prop is false', () => {
    const { queryByTestId } = render(
      <Button label="Sample Button" withArrow={false} />,
      { wrapper: BrowserRouter },
    )

    const arrowElement = queryByTestId('arrow-down')

    expect(arrowElement).not.toBeInTheDocument()
  })
})
