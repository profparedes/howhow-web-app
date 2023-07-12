import { memo } from 'react'

import { Col } from 'react-bootstrap'

import Button from 'components/Button/Button'

import { Description, Img, RowSection, Title } from './style'

interface IBoardSectionProps {
  title: string
  description: string
  buttonLabel: string
  image: string
  reverse?: boolean
  outlineButton?: boolean
}

const BoardSection: React.FC<IBoardSectionProps> = ({
  title,
  description,
  buttonLabel,
  image,
  reverse = false,
  outlineButton = false,
}) => {
  const flexRowReverse = reverse ? 'flex-row-reverse' : ''

  return (
    <RowSection
      className={`${flexRowReverse} align-items-center row-cols-1 row-cols-lg-2`}
    >
      <Col>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button label={buttonLabel} outline={outlineButton} withArrow />
      </Col>
      <Col>
        <Img className="img-fluid" src={image} alt={title} />
      </Col>
    </RowSection>
  )
}

export default memo(BoardSection)
