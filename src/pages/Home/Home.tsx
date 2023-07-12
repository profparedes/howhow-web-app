import { memo, useEffect, useState } from 'react'

import { Col, Container } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { BsMegaphone, BsPersonCheck } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { VscGraph } from 'react-icons/vsc'

import HeroDash from 'assets/images/hero-dash.png'

import BoardSection from 'components/BoardSection/BoardSection'
import BoardTitle from 'components/BoardTitle/BoardTitle'
import Button from 'components/Button/Button'
import CompaniesCarousel from 'components/CompaniesCarousel/CompaniesCarousel'
import Header from 'components/Header/Header'
import Results from 'components/Results/Results'
import StepCard from 'components/StepCard/StepCard'

import useTitle from 'hooks/useTitle'

import { ArrowDown, H1, HomeBackground, TitleSpan } from './style'

const Home: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(1)
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const step1 = selectedStep === 1
  const step2 = selectedStep === 2
  const step3 = selectedStep === 3

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
                <Trans i18nKey="board.home-description">
                  <span className="fw-bold" />
                </Trans>
              </p>
              <div className="mt-2 d-flex gap-2">
                <Button label={t('board.home-company-button')} />
                <Button outline label={t('board.home-influencer-button')} />
              </div>
            </Col>
            <Col>
              <img
                className="img-fluid"
                src={HeroDash}
                alt="Conectando influenciadores"
              />
            </Col>
          </BoardSection>
          <ArrowDown>
            <IoIosArrowDown size={24} />
          </ArrowDown>
        </Container>
      </HomeBackground>
      <div className="d-flex flex-column flex-md-row gap-4 justify-content-center my-5">
        <Results
          dataResult="+6.916"
          description={t('board.results-campaigns')}
        />
        <Results
          dataResult="+12.400"
          description={t('board.results-influencers')}
        />
        <Results dataResult="+62" description={t('board.results-companies')} />
      </div>
      <BoardTitle
        title={t('board.about-title')}
        description={t('board.about-description')}
        buttonLabel={t('board.about-button')}
      />
      <div className="mb-5">
        <h5 className="text-center mb-3">{t('board.about-brands')}</h5>
        <CompaniesCarousel />
      </div>
      <p className="text-center">{t('board.steps-intro')}</p>
      <BoardTitle
        title={t('board.steps-title')}
        description={t('board.steps-description')}
        buttonLabel={t('board.steps-button')}
      />
      <Container className="d-block d-md-flex justify-content-center gap-3 mb-5">
        <StepCard
          icon={<BsMegaphone size={46} />}
          title={t('board.step-1-title')}
          description={
            step1
              ? t('board.step-1-description')
              : t('board.step-1-short-description')
          }
          position={1}
          onClick={() => setSelectedStep(1)}
          selectedCard={step1}
        />
        <StepCard
          icon={<BsPersonCheck size={46} />}
          title={t('board.step-2-title')}
          description={
            step2
              ? t('board.step-2-description')
              : t('board.step-2-short-description')
          }
          position={2}
          onClick={() => setSelectedStep(2)}
          selectedCard={step2}
        />
        <StepCard
          icon={<VscGraph size={46} />}
          title={t('board.step-3-title')}
          description={
            step3
              ? t('board.step-3-description')
              : t('board.step-3-short-description')
          }
          position={3}
          onClick={() => setSelectedStep(3)}
          selectedCard={step3}
        />
      </Container>
    </>
  )
}

export default memo(Home)
