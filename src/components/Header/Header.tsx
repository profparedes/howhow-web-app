import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { AiOutlineMenu } from 'react-icons/ai'

import HowhowLogo from 'assets/images/howhow-logo.svg'

import Button from 'components/Button/Button'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'

import { Img, MenuItem } from './style'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between px-5">
      <Img src={HowhowLogo} alt="Howhow logo" />
      <div className="d-block d-lg-none mt-3">
        <AiOutlineMenu size={24} />
      </div>
      <div className="d-flex align-items-center mt-3">
        <div className="d-none d-lg-flex gap-3 me-3">
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
    </div>
  )
}

export default memo(Header)
