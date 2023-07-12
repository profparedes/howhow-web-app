import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

interface IStyledProps {
  $isOutline?: boolean
}

export const StyledButton = styled(Link) <IStyledProps>`
  background-color: ${({ $isOutline }) =>
    $isOutline ? '#fff' : 'var(--primary)'};
  color: ${({ $isOutline }) => ($isOutline ? 'var(--primary)' : '#fff')};
  border: ${({ $isOutline }) =>
    $isOutline ? '1px solid var(--primary)' : 'none'};
  border-radius: 2rem;
  padding: 0.7rem 1.2rem;

  &:hover {
    background-color: ${({ $isOutline }) => ($isOutline ? '#eee' : '#0069d9')};
    color: ${({ $isOutline }) => ($isOutline ? '#0069d9' : '#fff')};
  }
`
