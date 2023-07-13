import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it } from 'vitest'

import BoardTitle from './BoardTitle'

describe('BoardTitle', () => {
  it('should render the title, description, and button label correctly', () => {
    const { getByText } = render(
      <BoardTitle
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
      />,
      { wrapper: BrowserRouter },
    )

    const titleElement = getByText('Sample Title')
    const descriptionElement = getByText('Sample Description')
    const buttonElement = getByText('Sample Button')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('should not apply inverted styles when inverted prop is false', () => {
    const { container } = render(
      <BoardTitle
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        inverted={false}
      />,
      { wrapper: BrowserRouter },
    )

    const boardContainerElement = container.firstChild
    expect(boardContainerElement).not.toHaveClass('isInverted')
  })
})
