import { styled } from 'styled-components'

export const Img = styled.img`
  width: 2rem;
  height: 1.5rem;
  border-radius: 0.25rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0.25rem var(--primary);
    transform: scale(1.1);
  }
`
