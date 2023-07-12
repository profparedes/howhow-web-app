import { memo } from 'react'

import { Col } from 'react-bootstrap'

import Button from 'components/Button/Button'

import { RowSection } from './style'

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
        <h1>{title}</h1>
        <p className="fs-5">{description}</p>
        <div className="mt-2 d-flex gap-2">
          <Button label={buttonLabel} outline={outlineButton} />
        </div>
      </Col>
      <Col>
        <img className="img-fluid" src={image} alt={title} />
      </Col>
    </RowSection>
  )
}

export default memo(BoardSection)
