import { memo } from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md'

import { StyledButton } from './style'

interface IButtomProps {
  label: string
  handleClick?: () => void
  outline?: boolean
  withArrow?: boolean
}

const Button: React.FC<IButtomProps> = ({
  label,
  handleClick,
  outline = false,
  withArrow = false,
}) => {
  return (
    <StyledButton
      // variant={outline ? 'outline-primary' : 'primary'}
      $isOutline={outline}
      onClick={handleClick}
      to="*"
    >
      {label} {withArrow && <MdKeyboardArrowRight size={24} />}
    </StyledButton>
  )
}

export default memo(Button)
