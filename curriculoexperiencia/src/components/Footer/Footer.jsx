import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()
  const t = (path) => getTranslation(language, path)

  return (
    <footer className="footer">
      <p className="footer-text">{t('footer.developed')}</p>
      <p className="footer-copyright">{t('footer.copyright')}</p>
    </footer>
  )
}

export default Footer



