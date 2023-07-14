import { Row } from 'react-bootstrap'
import { styled } from 'styled-components'

import BannerBackground from 'assets/images/back-cta-desk.png'

export const BackgroundColor = styled.div`
  padding: 1.5rem 0;
  background-color: #f2f2fd;
`

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
`

export const TitleSpan = styled.span`
  color: var(--primary);
  font-weight: 900;
`

export const ArrowDown = styled.div`
  display: inline-block;
  padding: 1rem 1.1rem;
  color: #fff;
  text-align: center;
  background-color: var(--primary);
  border: 0.5rem solid var(--soft-primary);
  border-radius: 2.5rem;
`

export const RowSection = styled(Row)`
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`

export const SectionBanner = styled.div`
  border-radius: 44px 44px 0 0;
  background-image: url(${BannerBackground});
  background-color: #09112a;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
