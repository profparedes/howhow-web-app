import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import EmailContact from './EmailContact'

describe('EmailContact', () => {
  it('should render correct informations', () => {
    const { getByText } = render(<EmailContact />)

    expect(getByText('contato@howhow.com')).toBeInTheDocument()
  })
})
