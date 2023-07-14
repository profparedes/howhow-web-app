import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it, vi } from 'vitest'

import Footer from './Footer'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

describe('Footer', () => {
  it('should render logo and social media icons correctly', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(getByAltText('Instagram')).toBeInTheDocument()
    expect(getByAltText('Facebook')).toBeInTheDocument()
    expect(getByAltText('Linkedin')).toBeInTheDocument()
  })

  it('should render links correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )

    expect(getByText('footer.link-influencer')).toBeInTheDocument()
    expect(getByText('footer.link-about')).toBeInTheDocument()
    expect(getByText('footer.politicy-privacy')).toBeInTheDocument()
    expect(getByText('footer.politicy-terms')).toBeInTheDocument()
  })
})
