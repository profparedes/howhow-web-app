import { memo } from 'react'

import { RowSection } from './style'

interface IBoardSectionProps {
  children?: React.ReactNode
  reverse?: boolean
}

const BoardSection: React.FC<IBoardSectionProps> = ({
  children,
  reverse = false,
}) => {
  const flexRowReverse = reverse ? 'flex-row-reverse' : ''

  return (
    <RowSection
      className={`${flexRowReverse} align-items-center row-cols-1 row-cols-lg-2`}
    >
      {children}
    </RowSection>
  )
}

export default memo(BoardSection)
