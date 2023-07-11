import { Button } from 'react-bootstrap'
import { styled } from 'styled-components'

export const StyledButton = styled(Button)`
  border-radius: 2rem;
  padding: 0.7rem 1.2rem;

  &.btn-outline-primary {
    &:hover {
      background-color: #eee;
      color: var(--primary);
    }
  }
`
