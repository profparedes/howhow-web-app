import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import HowhowLogo from 'assets/images/howhow-logo.svg'

import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'

import { HeaderLink, Img, LoginButton } from './style'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container className="d-flex align-items-center justify-content-between mt-3">
      <Img src={HowhowLogo} alt="Howhow logo" />
      <div className="d-flex align-items-center">
        <div className="d-flex gap-3 me-3">
          <HeaderLink to="#home">{t('header.home')}</HeaderLink>
          <HeaderLink to="#about">{t('header.about')}</HeaderLink>
          <HeaderLink to="#influencer">{t('header.influencer')}</HeaderLink>
          <HeaderLink to="#contact">{t('header.contact')}</HeaderLink>
        </div>
        <div className="d-flex gap-2 me-3">
          <LoginButton variant="outline-primary">
            {t('header.button.login')}
          </LoginButton>
          <LoginButton variant="primary">
            {t('header.button.register')}
          </LoginButton>
        </div>
        <div className="align-self-start">
          <LanguageSwitcher />
        </div>
      </div>
    </Container>
  )
}

export default memo(Header)
