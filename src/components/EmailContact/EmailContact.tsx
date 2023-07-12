import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { RiMailSendLine } from 'react-icons/ri'

const EmailContact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <p className="fs-5">{t('board.contact')}</p>
      <div className="d-flex gap-3">
        <RiMailSendLine size={24} color="#007bff" />
        <p>contato@howhow.com</p>
      </div>
    </>
  )
}

export default memo(EmailContact)
