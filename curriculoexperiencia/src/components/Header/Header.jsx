import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'
import './Header.css'

function Header() {
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const isOrcamentoPage = location.pathname === '/orcamento'
  const t = (path) => getTranslation(language, path)

  return (
    <header className="header">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/bruno-melo-dev/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a href="https://www.youtube.com/@BrunoMelo-Dev" target="_blank" rel="noopener noreferrer" className="icon-link">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>YouTube</span>
        </a>
        <a href="https://www.instagram.com/brunodiasmelo/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/brunomelod" target="_blank" rel="noopener noreferrer" className="icon-link">
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        {isOrcamentoPage ? (
          <Link to="/" className="icon-link">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4" fill="currentColor"/>
              <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" fill="currentColor"/>
            </svg>
            <span>{t('header.about')}</span>
          </Link>
        ) : (
          <Link to="/orcamento" className="icon-link">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="4" width="14" height="16" rx="2" fill="currentColor" opacity="0.1"/>
              <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <line x1="8" y1="9" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <text x="15.5" y="17.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="700" fill="currentColor">$</text>
            </svg>
            <span>{t('header.budget')}</span>
          </Link>
        )}
        <div className="language-selector-container">
          <button 
            onClick={() => language !== 'pt-BR' && toggleLanguage()}
            className={`language-flag-button ${language === 'pt-BR' ? 'active' : ''}`}
            aria-label="Português"
          >
            <svg className="flag-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="circleClipBR">
                  <circle cx="10" cy="10" r="10"/>
                </clipPath>
              </defs>
              <g clipPath="url(#circleClipBR)">
                <rect width="20" height="20" fill="#009739"/>
                <path d="M10 2.5L3.5 10L10 17.5L16.5 10L10 2.5Z" fill="#FEDD00"/>
                <circle cx="10" cy="10" r="3.5" fill="#002776"/>
                <path d="M7.5 10L8.5 10.5L9 9.5L8 9L7.5 10Z" fill="#FFFFFF"/>
                <path d="M10 7.5L10.5 9L11.5 8.5L10.5 8L10 7.5Z" fill="#FFFFFF"/>
                <path d="M12.5 10L11.5 10.5L12 9.5L13 9L12.5 10Z" fill="#FFFFFF"/>
                <path d="M10 12.5L9.5 11L8.5 11.5L9.5 12L10 12.5Z" fill="#FFFFFF"/>
                <path d="M10 10L9.5 9.5L10 9L10.5 9.5L10 10Z" fill="#FFFFFF"/>
                <path d="M7.5 10.5L8 11L8.5 10.5L8 10L7.5 10.5Z" fill="#FFFFFF"/>
                <path d="M12.5 10.5L12 11L11.5 10.5L12 10L12.5 10.5Z" fill="#FFFFFF"/>
                <path d="M10 7L9.5 7.5L10 8L10.5 7.5L10 7Z" fill="#FFFFFF"/>
                <path d="M10 13L9.5 12.5L10 12L10.5 12.5L10 13Z" fill="#FFFFFF"/>
              </g>
            </svg>
          </button>
          <button 
            onClick={() => language !== 'en-US' && toggleLanguage()}
            className={`language-flag-button ${language === 'en-US' ? 'active' : ''}`}
            aria-label="English"
          >
            <svg className="flag-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="circleClipUS">
                  <circle cx="10" cy="10" r="10"/>
                </clipPath>
              </defs>
              <g clipPath="url(#circleClipUS)">
                <rect width="20" height="20" fill="#B22234"/>
                <rect y="1.54" width="20" height="1.54" fill="#FFFFFF"/>
                <rect y="4.62" width="20" height="1.54" fill="#FFFFFF"/>
                <rect y="7.7" width="20" height="1.54" fill="#FFFFFF"/>
                <rect y="10.78" width="20" height="1.54" fill="#FFFFFF"/>
                <rect y="13.86" width="20" height="1.54" fill="#FFFFFF"/>
                <rect y="16.94" width="20" height="1.54" fill="#FFFFFF"/>
                <rect width="7.7" height="7.7" fill="#3C3B6E"/>
                <circle cx="1.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6.5" cy="1.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="7" cy="2.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6.5" cy="3.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="7" cy="4.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6.5" cy="5.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="7" cy="6.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="1.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="2.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="3.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="4.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="5.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
                <circle cx="6.5" cy="7.5" r="0.3" fill="#FFFFFF"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

