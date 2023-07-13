import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it } from 'vitest'

import BoardSection from './BoardSection'

describe('BoardSection', () => {
  it('should render the title, description, and button label correctly', () => {
    const { getByText } = render(
      <BoardSection
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        image="/path/to/sample/image.jpg"
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

  it('should apply reverse styles when reverse prop is true', () => {
    const { container } = render(
      <BoardSection
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        image="/path/to/sample/image.jpg"
        reverse
      />,
      { wrapper: BrowserRouter },
    )

    const rowSectionElement = container.firstChild
    expect(rowSectionElement).toHaveClass('flex-row-reverse')
  })

  it('should not apply reverse styles when reverse prop is false', () => {
    const { container } = render(
      <BoardSection
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        image="/path/to/sample/image.jpg"
        reverse={false}
      />,
      { wrapper: BrowserRouter },
    )

    const rowSectionElement = container.firstChild
    expect(rowSectionElement).not.toHaveClass('flex-row-reverse')
  })

  it('should not render the button as an outline when the outlineButton prop is false', () => {
    const { getByText } = render(
      <BoardSection
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        image="/path/to/sample/image.jpg"
        outlineButton={false}
      />,
      { wrapper: BrowserRouter },
    )

    const buttonElement = getByText('Sample Button')

    expect(buttonElement).not.toHaveClass('outline')
  })

  it('should render the correct image passed in props', () => {
    const { getByAltText } = render(
      <BoardSection
        title="Sample Title"
        description="Sample Description"
        buttonLabel="Sample Button"
        image="/path/to/sample/image.jpg"
      />,
      { wrapper: BrowserRouter },
    )

    const imageElement = getByAltText('Sample Title')

    expect(imageElement).toHaveAttribute('src', '/path/to/sample/image.jpg')
  })
})
