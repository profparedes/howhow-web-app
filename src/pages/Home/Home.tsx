import { memo, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { BsMegaphone, BsPersonCheck } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { VscGraph } from 'react-icons/vsc'

import SocialMobile from 'assets/images/cta-social-mobile.png'
import GraphDesk from 'assets/images/graph-desk.png'
import HeroDash from 'assets/images/hero-dash.png'
import HistoryDesk from 'assets/images/history-desk.png'
import InfluGraphDesk from 'assets/images/influ-graph-desk.png'
import InfluencersDesk from 'assets/images/influencers-desk.png'
import ProfileDesk from 'assets/images/profile-desk.png'
import SocialDesk from 'assets/images/social-desk.png'
import TableDesk from 'assets/images/table-desk.png'

import BoardSection from 'components/BoardSection/BoardSection'
import BoardTitle from 'components/BoardTitle/BoardTitle'
import Button from 'components/Button/Button'
import CompaniesCarousel from 'components/CompaniesCarousel/CompaniesCarousel'
import ContactForm from 'components/ContactForm/ContactForm'
import EmailContact from 'components/EmailContact/EmailContact'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Results from 'components/Results/Results'
import StepCard from 'components/StepCard/StepCard'

import useTitle from 'hooks/useTitle'

import {
  ArrowDown,
  H1,
  BackgroundColor,
  RowSection,
  SectionBanner,
  TitleSpan,
  H2,
} from './style'

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
      <BackgroundColor id="about">
        <Header />
        <Container>
          <RowSection className="align-items-center row-cols-1 row-cols-lg-2">
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
          </RowSection>
          <ArrowDown>
            <IoIosArrowDown size={24} />
          </ArrowDown>
        </Container>
      </BackgroundColor>
      <div
        id="about"
        className="d-flex flex-column flex-md-row gap-4 justify-content-center my-5"
      >
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
      <Container className="d-block d-lg-flex justify-content-center gap-3 mb-5">
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
      <Container>
        <BoardSection
          title={t('section.discovery-title')}
          description={t('section.discovery-description')}
          buttonLabel={t('section.discovery-button')}
          image={TableDesk}
          outlineButton
          reverse
        />
        <BoardSection
          title={t('section.view-title')}
          description={t('section.view-description')}
          buttonLabel={t('section.view-button')}
          image={ProfileDesk}
          outlineButton
        />
        <BoardSection
          title={t('section.management-title')}
          description={t('section.management-description')}
          buttonLabel={t('section.management-button')}
          image={HistoryDesk}
          outlineButton
          reverse
        />
        <BoardSection
          title={t('section.statistics-title')}
          description={t('section.statistics-description')}
          buttonLabel={t('section.statistics-button')}
          image={GraphDesk}
          outlineButton
        />
      </Container>
      <SectionBanner className="mb-5">
        <img
          className="img-fluid mb-4"
          src={SocialMobile}
          alt="Social Mobile"
        />
        <BoardTitle
          title={t('section.mobile-title')}
          description={t('section.mobile-description')}
          buttonLabel={t('section.mobile-button')}
          inverted
        />
      </SectionBanner>
      <Container id="influencer" className="mb-5">
        <BoardTitle
          title={t('section.category-title')}
          description={t('section.category-description')}
          buttonLabel={t('section.category-button')}
        />
        <img
          className="img-fluid mt-5"
          src={InfluencersDesk}
          alt="Influencers Desk"
        />
      </Container>
      <BackgroundColor>
        <Container>
          <BoardSection
            title={t('section.analytics-title')}
            description={t('section.analytics-description')}
            buttonLabel={t('section.analytics-button')}
            image={InfluGraphDesk}
          />
          <BoardSection
            title={t('section.social-title')}
            description={t('section.social-description')}
            buttonLabel={t('section.social-button')}
            image={SocialDesk}
            reverse
          />
        </Container>
      </BackgroundColor>
      <Container id="contact" className="my-5">
        <Row className="align-items-center row-cols-1 row-cols-lg-2">
          <Col>
            <H2>{t('board.contact-title')}</H2>
            <p className="mb-4">{t('board.contact-description')}</p>
            <EmailContact />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Home)
