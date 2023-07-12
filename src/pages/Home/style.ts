import { Row } from 'react-bootstrap'
import { styled } from 'styled-components'

export const HomeBackground = styled.div`
  padding: 1.5rem 0;
  background-color: #f2f2fd;
`

export const H1 = styled.h1`
  font-size: 3.3rem;
  font-weight: 700;
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
  margin-top: 10rem;
  margin-bottom: 10rem;
`
