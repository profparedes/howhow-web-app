import { styled } from 'styled-components'

import StepBackground from 'assets/images/stepbg.png'

interface IStyledProps {
  $isSelected?: boolean
}

export const BackgroundCard = styled.div<IStyledProps>`
  background-image: ${({ $isSelected }) =>
    $isSelected && `url(${StepBackground})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'var(--primary)' : '#f3f6fc'};
  color: ${({ $isSelected }) => $isSelected && '#fff'};
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: ${({ $isSelected }) => ($isSelected ? '50%' : '25%')};
  }

  .icon-card {
    color: ${({ $isSelected }) => (!$isSelected ? 'var(--primary)' : '#fff')};
  }
`

export const Title = styled.h4<IStyledProps>`
  font-weight: ${({ $isSelected }) => ($isSelected ? '300' : '600')};
  font-size: ${({ $isSelected }) => ($isSelected ? '2rem' : '1.25rem')};
`
