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
      className="d-inline-block align-items-center"
      $isOutline={outline}
      onClick={handleClick}
      to="*"
    >
      {label}{' '}
      {withArrow && <MdKeyboardArrowRight data-testid="arrow-down" size={24} />}
    </StyledButton>
  )
}

export default memo(Button)
