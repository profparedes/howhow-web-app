import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { expect, describe, it, vi, beforeAll } from 'vitest'

import Header from './Header'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }))

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.refCount = 0
})

describe('Header', () => {
  it('should render logo and social media icons correctly', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(getByAltText('Howhow logo')).toBeInTheDocument()
  })

  it('should render links correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(getByText('header.home')).toBeInTheDocument()
    expect(getByText('header.about')).toBeInTheDocument()
    expect(getByText('header.influencer')).toBeInTheDocument()
    expect(getByText('header.contact')).toBeInTheDocument()
  })

  it('should render menu button correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(getByTestId('menu-button')).toBeInTheDocument()
  })

  it('should render login and register buttons correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(getByText('header.button.login')).toBeInTheDocument()
    expect(getByText('header.button.register')).toBeInTheDocument()
  })

  it('should show menu when menu button is clicked', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const buttonMenu = getByTestId('menu-button')
    await userEvent.click(buttonMenu)

    expect(getByTestId('canvas-menu')).toBeInTheDocument()
  })
})
