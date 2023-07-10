import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import BrazilFlag from 'assets/images/brazil-flag.png'
import USAFlag from 'assets/images/usa-flag.jpeg'

import { Img } from './style'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = useCallback(
    (lng: string) => i18n.changeLanguage(lng),
    [i18n],
  )

  return (
    <div className="d-flex gap-1">
      <Img
        src={USAFlag}
        alt="USA language"
        data-testid="language-switcher-en-button"
        onClick={() => handleChangeLanguage('en')}
      />
      <Img
        src={BrazilFlag}
        alt="Linguagem pt-BR"
        data-testid="language-switcher-pt-br-button"
        onClick={() => handleChangeLanguage('pt-BR')}
      />
    </div>
  )
}

export default memo(LanguageSwitcher)
