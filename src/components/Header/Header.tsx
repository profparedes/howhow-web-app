import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import HowhowLogo from 'assets/images/howhow-logo.svg'

import Button from 'components/Button/Button'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'

import { Img, MenuItem } from './style'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container className="d-flex align-items-center justify-content-between mt-3">
      <Img src={HowhowLogo} alt="Howhow logo" />
      <div className="d-flex align-items-center">
        <div className="d-flex gap-3 me-3">
          <MenuItem to="#home">{t('header.home')}</MenuItem>
          <MenuItem to="#about">{t('header.about')}</MenuItem>
          <MenuItem to="#influencer">{t('header.influencer')}</MenuItem>
          <MenuItem to="#contact">{t('header.contact')}</MenuItem>
        </div>
        <div className="d-flex gap-2 me-3">
          <Button outline label={t('header.button.login')} />
          <Button label={t('header.button.register')} />
        </div>
        <div className="align-self-start">
          <LanguageSwitcher />
        </div>
      </div>
    </Container>
  )
}

export default memo(Header)
