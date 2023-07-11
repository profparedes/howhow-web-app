import { memo } from 'react'

import { StyledButton } from './style'

interface IButtomProps {
  label: string
  handleClick?: () => void
  outline?: boolean
}

const Button: React.FC<IButtomProps> = ({
  label,
  handleClick,
  outline = false,
}) => {
  return (
    <StyledButton
      variant={outline ? 'outline-primary' : 'primary'}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  )
}

export default memo(Button)
