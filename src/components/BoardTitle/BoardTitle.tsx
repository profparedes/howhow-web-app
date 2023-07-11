import { memo } from 'react'

import Button from 'components/Button/Button'

interface IBoardTitleProps {
  title: string
  description: string
  buttonLabel: string
}

const BoardTitle: React.FC<IBoardTitleProps> = ({
  title,
  description,
  buttonLabel,
}) => (
  <div className="text-center w-50 mx-auto mb-5">
    <h4>{title}</h4>
    <p className="mb-4">{description}</p>
    <Button label={buttonLabel} withArrow />
  </div>
)

export default memo(BoardTitle)
