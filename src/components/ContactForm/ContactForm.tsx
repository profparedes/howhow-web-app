import { memo, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'

import Config from 'Config'

import { FormContainer } from './style'

type FormDataType = {
  name: string
  email: string
  company: string
  phone: string
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<FormDataType>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FormDataType): Promise<void> => {
    try {
      setLoading(true)
      await axios.post(`${Config.api.url}/contact`, data)
      setSuccessMessage(true)
      toast.success(`${t('toaster.success')}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      setLoading(false)
    } catch (error) {
      toast.error(`${t('toaster.error')}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <p className="fw-bolder">{t('board.form-title')}</p>
          <p className="mb-3">{t('board.form-subtitle')}</p>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', { required: true })}
            type="text"
            placeholder={t('board.form-name')}
          />
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('company', { required: true })}
            type="text"
            placeholder={t('board.form-company')}
          />
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', { required: true })}
            type="email"
            placeholder={t('board.form-email')}
          />
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('phone', { required: true })}
            type="text"
            placeholder={t('board.form-phone')}
          />
          <Button variant="primary" type="submit" disabled={loading}>
            {t('board.form-button')}
          </Button>
          {successMessage && <p>Email enviado com sucesso</p>}
        </Form.Group>
      </FormContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default memo(ContactForm)
