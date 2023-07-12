import { memo } from 'react'

import { Container } from 'react-bootstrap'

import Button from 'components/Button/Button'

import { BoardContainer } from './style'

interface IBoardTitleProps {
  title: string
  description: string
  buttonLabel: string
  inverted?: boolean
}

const BoardTitle: React.FC<IBoardTitleProps> = ({
  title,
  description,
  buttonLabel,
  inverted = false,
}) => (
  <Container>
    <BoardContainer $isInverted={inverted} className="text-center mx-auto mb-5">
      <h4 style={{ fontWeight: 500 }}>{title}</h4>
      <p className="mb-4">{description}</p>
      <Button label={buttonLabel} withArrow />
    </BoardContainer>
  </Container>
)

export default memo(BoardTitle)
