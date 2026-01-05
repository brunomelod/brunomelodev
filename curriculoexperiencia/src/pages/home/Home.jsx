import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { experiencesPT } from '../../data/experiences.pt-BR'
import { experiencesEN } from '../../data/experiences.en-US'
import { getProjectsByLanguage } from '../../data/projects.translations.jsx'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'
import './Home.css'

function Home() {
  const { language } = useLanguage()
  const t = (path) => getTranslation(language, path)
  const fullName = "Bruno Melo =)"
  const [displayedName, setDisplayedName] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedAboutTab, setSelectedAboutTab] = useState('resumo')
  const [selectedProject, setSelectedProject] = useState('HTML & CSS')
  const [expandedProjects, setExpandedProjects] = useState({})
  const [hasAnimated, setHasAnimated] = useState({})

  const experiences = language === 'pt-BR' ? experiencesPT : experiencesEN
  const projectsButton = getProjectsByLanguage(language)
  const companies = Object.keys(experiences)

  useEffect(() => {
    if (!selectedCompany && companies.length > 0) {
      setSelectedCompany(companies[0])
    } else if (selectedCompany && !companies.includes(selectedCompany) && companies.length > 0) {
      setSelectedCompany(companies[0])
    }
  }, [selectedCompany, companies, language])

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const projectsToAnimate = ['HTML & CSS', 'Python & FastAPI', 'React & Tailwind CSS']
    
    if (!projectsToAnimate.includes(selectedProject)) return

    const projectAnimatedKey = `animated-${selectedProject}`
    if (hasAnimated && typeof hasAnimated === 'object' && hasAnimated[projectAnimatedKey]) return

    const descriptions = projectsButton[selectedProject]?.description
    if (!descriptions) return

    const groups = groupProjectDescriptions(descriptions)
    if (groups.length <= 1) return

    const firstKey = `${selectedProject}-0`

    const timer = setTimeout(() => {
      setExpandedProjects(prev => ({ ...prev, [firstKey]: true }))
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [selectedProject, hasAnimated, projectsButton])

  const handleEmailClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'Contato por Email',
        content_category: 'Contato Direto'
      });
    }
  }

  const toggleProjectExpansion = (projectKey, itemIndex) => {
    const key = `${projectKey}-${itemIndex}`
    
    const projectsToAnimate = ['HTML & CSS', 'Python & FastAPI', 'React & Tailwind CSS']
    if (projectsToAnimate.includes(projectKey) && itemIndex === 0) {
      const projectAnimatedKey = `animated-${projectKey}`
      setHasAnimated(prev => {
        if (typeof prev === 'object') {
          return { ...prev, [projectAnimatedKey]: true }
        }
        return { [projectAnimatedKey]: true }
      })
    }
    
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const groupProjectDescriptions = (descriptions) => {
    const groups = []
    let currentLink = null
    let currentDescriptions = []
    
    descriptions.forEach((item, index) => {
      if (React.isValidElement(item) && item.type === 'a') {
        if (currentLink) {
          groups.push({ 
            link: currentLink, 
            descriptions: currentDescriptions, 
            index: groups.length 
          })
        }
        currentLink = item
        currentDescriptions = []
      } else if (typeof item === 'string') {
        currentDescriptions.push(item)
      }
    })
    
    if (currentLink) {
      groups.push({ 
        link: currentLink, 
        descriptions: currentDescriptions, 
        index: groups.length 
      })
    }
    
    return groups
  }

  const projects = ['React & Tailwind CSS', 'Python & FastAPI', 'NodeJS & Baileys']

  return (
    <div className="curriculo-page">
      <Header />
      <section className="intro-section">
        <p className="intro-text">{t('intro.greeting')}</p>
        <h1 className="name">
          {displayedName}
          <span className="cursor">|</span>
        </h1>
        <p className="description">
          {t('intro.description')} <span className="highlight-red">{t('intro.passionate')}</span> {language === 'pt-BR' ? 'por' : 'about'} <span className="highlight-red">{t('intro.technology')}</span>.
        </p>
        <a href="mailto:brunomelod@gmail.com" className="email-button" onClick={handleEmailClick}>
          {t('intro.emailButton')}
        </a>
      </section>
      <section className="about-section">
        <h2 className="about-title">{t('about.title')}</h2>
        <div className="about-tabs">
          <button
            className={`about-tab-button ${selectedAboutTab === 'resumo' ? 'active' : ''}`}
            onClick={() => setSelectedAboutTab('resumo')}
          >
            {selectedAboutTab === 'resumo' && <span className="pipe-indicator">|</span>}
            {t('about.tabs.resumo')}
          </button>
          <button
            className={`about-tab-button ${selectedAboutTab === 'skills' ? 'active' : ''}`}
            onClick={() => setSelectedAboutTab('skills')}
          >
            {selectedAboutTab === 'skills' && <span className="pipe-indicator">|</span>}
            {t('about.tabs.skills')}
          </button>
        </div>
        <div className="about-content">
          <div className="about-text">
            {selectedAboutTab === 'resumo' ? (
              <>
                <p>{t('about.resumo.p1')}</p>
                <p>
                  {t('about.resumo.p2')} <span className="highlight-red">{t('about.highlights.microservices')}</span> {language === 'pt-BR' ? 'e' : 'and'} <span className="highlight-red">{t('about.highlights.apis')}</span> {language === 'pt-BR' ? 'robustas' : 'robust'}.
                </p>
                <p>
                  {language === 'pt-BR' ? 'No backend, trabalho com frameworks modernos como' : 'On the backend, I work with modern frameworks like'} <strong>{t('about.highlights.springBoot')}</strong> {language === 'pt-BR' ? '(Java) e' : '(Java) and'} <strong>{t('about.highlights.fastapi')}</strong> {language === 'pt-BR' ? '(Python), desenvolvendo soluções escaláveis e de alta performance. No frontend, utilizo' : '(Python), developing scalable and high-performance solutions. On the frontend, I use'} <strong>{t('about.highlights.reactjs')}</strong> {language === 'pt-BR' ? 'com' : 'with'} <strong>{t('about.highlights.tailwind')}</strong> {language === 'pt-BR' ? 'e' : 'and'} <strong>{t('about.highlights.styledComponents')}</strong>, {language === 'pt-BR' ? 'além de' : 'in addition to'} <strong>{t('about.highlights.html')}</strong> {language === 'pt-BR' ? 'e' : 'and'} <strong>{t('about.highlights.css')}</strong> {language === 'pt-BR' ? 'para criar interfaces modernas e responsivas.' : 'to create modern and responsive interfaces.'}
                </p>
                <p>
                  {t('about.resumo.p4')}
                </p>
              </>
            ) : (
              <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  {t('about.skills.technical').map((tech, index) => (
                    <span key={index} className="tech-tag" style={{ marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>{tech}</span>
                  ))}
                </div>
                <div>
                  {t('about.skills.soft').map((skill, index) => (
                    <span key={index} className="tech-tag" style={{ marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="about-photo">
            <img src="/perfil.png" alt="Bruno Melo" />
          </div>
        </div>
      </section>
      <section className="experience-section">
        <h2 className="experience-title">{t('experience.title')}</h2>
        <div className="experience-content">
          <div className="experience-companies">
            {companies.map((company, index) => (
              <button
                key={index}
                className={`company-button ${selectedCompany === company ? 'active' : ''}`}
                onClick={() => setSelectedCompany(company)}
              >
                {selectedCompany === company && <span className="pipe-indicator">|</span>}
                {company}
              </button>
            ))}
          </div>
          <div className="experience-details">
            {selectedCompany && experiences[selectedCompany] ? (
              <div className="experience-info">
                <h3 className="company-name">{selectedCompany}</h3>
                {experiences[selectedCompany].website && (
                  <p className="company-website">({experiences[selectedCompany].website})</p>
                )}
                {experiences[selectedCompany].period && (
                  <p className="experience-period">{experiences[selectedCompany].period}</p>
                )}
                <div className="experience-description">
                  {experiences[selectedCompany].description.map((text, index) => (
                    <p key={index} className="experience-text">
                      <span className="bullet-arrow">→</span> {text}
                    </p>
                  ))}
                </div>
                {experiences[selectedCompany].technologies.length > 0 && (
                  <div className="experience-technologies">
                    {experiences[selectedCompany].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="experience-placeholder">{t('experience.placeholder')}</p>
            )}
          </div>
        </div>
      </section>

      <section className="projects-section">
      <h2 className="about-title">{t('projects.title')}</h2>
      <div className="projects-content">
        <div className="projects-companies">
          <div className="projects-buttons">
            {Object.keys(projectsButton).sort().map((projectKey) => (
            <button 
                key={projectKey}
                className={`project-button ${selectedProject === projectKey ? 'active' : ''}`}
                onClick={() => setSelectedProject(projectKey)}
              >
                {selectedProject === projectKey && <span className="pipe-indicator">|</span>}
                {projectKey}
              </button>
            ))}
          </div>
          </div>
        

          <div className="experience-details">
            {selectedProject && projectsButton[selectedProject] ? (() => {
              const descriptions = projectsButton[selectedProject].description
              const groups = groupProjectDescriptions(descriptions)
              
              return (
                <div className="experience-info">
                <div className="experience-description">
                    {groups.map((group, groupIndex) => {
                      const expandKey = `${selectedProject}-${groupIndex}`
                      const isExpanded = expandedProjects[expandKey] || false
                      const hasDescriptions = group.descriptions && group.descriptions.length > 0
                      const hasMultipleLinks = groups.length > 1
                      
                      return (
                        <div key={groupIndex} className="project-item">
                          {group.link && (
                            <div className="project-link-wrapper">
                              {group.link}
                              {hasDescriptions && hasMultipleLinks && (
                                <button
                                  className="expand-button-inline"
                                  onClick={() => toggleProjectExpansion(selectedProject, groupIndex)}
                                >
                                  <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
                                </button>
                              )}
                            </div>
                          )}
                          
                          {hasDescriptions && (
                            <div className={`project-description-expandable ${isExpanded || !hasMultipleLinks ? 'expanded' : ''}`}>
                              {group.descriptions.map((desc, descIndex) => (
                                <div key={descIndex} className="experience-text">
                                  <span className="bullet-arrow">→</span> {desc}
                    </div>
                  ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })() : (<p className="project-placeholder">{t('projects.placeholder')}</p>)}
          </div>
          
        </div>
      </section>

      <Footer />
      </div>
    )
  }

export default Home
