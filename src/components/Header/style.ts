import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const LoginButton = styled(Button)`
  border-radius: 2rem;
  padding: 0.7rem 1rem;
`

export const HeaderLink = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`

export const Img = styled.img`
  width: 10.625rem;
  height: 2.875rem;
`
