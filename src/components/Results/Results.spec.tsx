import { render, cleanup } from '@testing-library/react'
import { expect, describe, it, afterEach } from 'vitest'

import Results from './Results'

describe('Results', () => {
  afterEach(cleanup)

  it('should render the dataResult and description correctly', () => {
    const { getByText } = render(
      <Results dataResult="Sample Result" description="Sample Description" />,
    )

    const resultElement = getByText('Sample Result')
    const descriptionElement = getByText('Sample Description')

    expect(resultElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })
})
