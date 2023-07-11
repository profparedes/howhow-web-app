import { memo, useEffect } from 'react'

import { Col, Container } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import HeroDash from 'assets/images/hero-dash.png'

import BoardSection from 'components/BoardSection/BoardSection'
import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

import useTitle from 'hooks/useTitle'

import { ArrowDown, H1, HomeBackground, TitleSpan } from './style'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <HomeBackground>
        <Header />
        <Container>
          <BoardSection>
            <Col>
              <H1>
                <Trans i18nKey="board.home-title">
                  <TitleSpan />
                </Trans>
              </H1>
              <p className="fs-5">
                <Trans i18nKey="board.home-subtitle">
                  <span className="fw-bold" />
                </Trans>
              </p>
              <div className="mt-2 d-flex gap-2">
                <Button label={t('board.home-company-button')} />
                <Button outline label={t('board.home-influencer-button')} />
              </div>
            </Col>
            <Col>
              <img src={HeroDash} alt="Conectando influenciadores" />
            </Col>
          </BoardSection>
          <ArrowDown>
            <IoIosArrowDown size={24} />
          </ArrowDown>
        </Container>
      </HomeBackground>
      <h1>Teste</h1>
    </>
  )
}

export default memo(Home)
