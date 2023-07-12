import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

import Facebook from 'assets/images/facebook.svg'
import logo from 'assets/images/howhow-logo.svg'
import Instagram from 'assets/images/instagram.svg'
import Linkedin from 'assets/images/linkedin.svg'

import EmailContact from 'components/EmailContact/EmailContact'

import { BackToTop, FooterBackground, Img, Social, Topic } from './style'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FooterBackground>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          <Col className="mb-3">
            <Img src={logo} alt="Logo" />
            <div className="d-flex gap-3 mt-3">
              <Social>
                <img src={Instagram} alt="Instagram" />
              </Social>
              <Social>
                <img src={Facebook} alt="Facebook" />
              </Social>
              <Social>
                <img src={Linkedin} alt="Linkedin" />
              </Social>
            </div>
          </Col>
          <Col className="d-flex flex-column mb-3">
            <Topic>{t('footer.links')}</Topic>
            <Link to="#influencer">{t('footer.link-influencer')}</Link>
            <Link to="#about">{t('footer.link-about')}</Link>
          </Col>
          <Col className="d-flex flex-column mb-3">
            <Topic>{t('footer.politicy')}</Topic>
            <Link to="#influencer">{t('footer.politicy-privacy')}</Link>
            <Link to="#about">{t('footer.politicy-terms')}</Link>
          </Col>
          <Col>
            <EmailContact />
          </Col>
        </Row>
      </Container>
      <Link to="#home">
        <BackToTop>
          <IoIosArrowUp size={24} />
        </BackToTop>
      </Link>
    </FooterBackground>
  )
}

export default memo(Footer)
