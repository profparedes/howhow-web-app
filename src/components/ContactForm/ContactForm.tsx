import { memo } from 'react'

import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { FormContainer } from './style'

interface IContactFormProps {
  onSubmit?: () => void
}

const ContactForm: React.FC<IContactFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation()

  return (
    <FormContainer>
      <Form.Group className="mb-3">
        <p className="fw-bolder">{t('board.form-title')}</p>
        <p className="mb-3">{t('board.form-subtitle')}</p>
        <Form.Control type="text" placeholder={t('board.form-name')} />
        <Form.Control type="text" placeholder={t('board.form-company')} />
        <Form.Control type="email" placeholder={t('board.form-email')} />
        <Form.Control type="text" placeholder={t('board.form-phone')} />
        <Button variant="primary" type="submit">
          {t('board.form-button')}
        </Button>
      </Form.Group>
    </FormContainer>
  )
}

export default memo(ContactForm)
