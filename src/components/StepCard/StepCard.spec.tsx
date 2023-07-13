import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it, vi } from 'vitest'

import StepCard from './StepCard'

describe('StepCard', () => {
  it('should render the title and description correctly', () => {
    const { getByText } = render(
      <StepCard
        icon={<span>Sample Icon</span>}
        title="Sample Title"
        description="Sample Description"
        position={1}
      />,
      { wrapper: BrowserRouter },
    )

    const titleElement = getByText('Sample Title')
    const descriptionElement = getByText('Sample Description')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should display position when not selected', () => {
    const { getByText } = render(
      <StepCard
        icon={<span>Sample Icon</span>}
        title="Sample Title"
        description="Sample Description"
        position={1}
      />,
      { wrapper: BrowserRouter },
    )

    const positionElement = getByText('01')

    expect(positionElement).toBeInTheDocument()
  })

  it('should not display position when selected', () => {
    const { queryByText } = render(
      <StepCard
        icon={<span>Sample Icon</span>}
        title="Sample Title"
        description="Sample Description"
        position={1}
        selectedCard
      />,
      { wrapper: BrowserRouter },
    )

    const positionElement = queryByText('01')

    expect(positionElement).not.toBeInTheDocument()
  })

  it('should render the step text when selected', () => {
    const useTranslation = vi.fn()
    useTranslation.mockReturnValue({
      t: (str: string) => str,
    })

    const { getByText } = render(
      <StepCard
        icon={<span>Sample Icon</span>}
        title="Sample Title"
        description="Sample Description"
        position={1}
        selectedCard
      />,
      { wrapper: BrowserRouter },
    )

    const stepElement = getByText('board.step: 01')

    expect(stepElement).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const onClickMock = vi.fn()

    const { getByText } = render(
      <StepCard
        icon={<span>Sample Icon</span>}
        title="Sample Title"
        description="Sample Description"
        position={1}
        onClick={onClickMock}
      />,
      { wrapper: BrowserRouter },
    )

    const cardElement = getByText('Sample Title')
    cardElement.click()

    expect(onClickMock).toHaveBeenCalled()
  })
})
