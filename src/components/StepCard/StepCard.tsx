import { memo, ReactElement } from 'react'

import { useTranslation } from 'react-i18next'

import { BackgroundCard, Title } from './style'

interface IStepCardProps {
  icon: ReactElement
  title: string
  description: string
  position: number
  onClick?: () => void
  selectedCard?: boolean
}

const StepCard: React.FC<IStepCardProps> = ({
  icon,
  title,
  description,
  position,
  selectedCard = false,
  onClick,
}) => {
  const { t } = useTranslation()

  return (
    <BackgroundCard
      className="d-flex flex-column"
      onClick={onClick}
      $isSelected={selectedCard}
    >
      <div className="d-flex justify-content-between mb-5">
        <div className="icon-card">{icon}</div>
        {!selectedCard && <p className="fs-5">0{position}</p>}
      </div>
      <Title $isSelected={selectedCard}>{title}</Title>
      <p className="flex-grow-1 mb-4">{description}</p>
      {selectedCard && (
        <p className="fs-5">
          {t('board.step')}: 0{position}
        </p>
      )}
    </BackgroundCard>
  )
}

export default memo(StepCard)
