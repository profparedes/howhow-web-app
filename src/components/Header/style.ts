import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const MenuItem = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`

export const Img = styled.img`
  width: 10.625rem;
  height: 2.875rem;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
`
