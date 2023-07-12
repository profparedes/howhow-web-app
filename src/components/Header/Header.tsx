import { memo, useState } from 'react'

import { Offcanvas } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineMenu } from 'react-icons/ai'

import HowhowLogo from 'assets/images/howhow-logo.svg'

import Button from 'components/Button/Button'
import EmailContact from 'components/EmailContact/EmailContact'
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher'

import { Img, MenuButton, MenuItem } from './style'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between px-5">
        <Img src={HowhowLogo} alt="Howhow logo" />
        <div className="d-block d-lg-none mt-3">
          <MenuButton type="button" onClick={() => setShowMenu(true)}>
            <AiOutlineMenu size={24} />
          </MenuButton>
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

      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Img src={HowhowLogo} alt="Howhow logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column gap-4 mb-5">
            <MenuItem to="#home">{t('header.home')}</MenuItem>
            <MenuItem to="#about">{t('header.about')}</MenuItem>
            <MenuItem to="#influencer">{t('header.influencer')}</MenuItem>
            <MenuItem to="#contact">{t('header.contact')}</MenuItem>
          </div>
          <EmailContact />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default memo(Header)
