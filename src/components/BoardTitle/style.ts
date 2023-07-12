import { styled } from 'styled-components'

interface IStyledProps {
  $isInverted?: boolean
}

export const BoardContainer = styled.div<IStyledProps>`
  color: ${({ $isInverted }) => ($isInverted ? '#fff' : '#000')};

  @media (min-width: 1024px) {
    width: 50%;
  }
`
