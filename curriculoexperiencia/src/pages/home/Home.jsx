import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { experiences } from '../../data/experiences'
import { projectsButton } from '../../data/projects'
import './Home.css'

function Home() {
  const fullName = "Bruno Melo =)"
  const [displayedName, setDisplayedName] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedAboutTab, setSelectedAboutTab] = useState('resumo')
  const [selectedProject, setSelectedProject] = useState('HTML & CSS')
  const [expandedProjects, setExpandedProjects] = useState({})
  const [hasAnimated, setHasAnimated] = useState({})

  const companies = Object.keys(experiences)

  useEffect(() => {
    if (!selectedCompany && companies.length > 0) {
      setSelectedCompany(companies[0])
    }
  }, [selectedCompany, companies])

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
  }, [selectedProject, hasAnimated])

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
        <p className="intro-text">Oi, tudo bem? Eu sou o</p>
        <h1 className="name">
          {displayedName}
          <span className="cursor">|</span>
        </h1>
        <p className="description">
          Eu sou um engenheiro de software e desenvolvedor fullstack <span className="highlight-red">apaixonado</span> por <span className="highlight-red">tecnologia</span>.
        </p>
        <a href="mailto:brunomelod@gmail.com" className="email-button" onClick={handleEmailClick}>
          Me envie um e-mail!
        </a>
      </section>
      <section className="about-section">
        <h2 className="about-title">Sobre mim:</h2>
        <div className="about-tabs">
          <button
            className={`about-tab-button ${selectedAboutTab === 'resumo' ? 'active' : ''}`}
            onClick={() => setSelectedAboutTab('resumo')}
          >
            {selectedAboutTab === 'resumo' && <span className="pipe-indicator">|</span>}
            Resumo
          </button>
          <button
            className={`about-tab-button ${selectedAboutTab === 'skills' ? 'active' : ''}`}
            onClick={() => setSelectedAboutTab('skills')}
          >
            {selectedAboutTab === 'skills' && <span className="pipe-indicator">|</span>}
            Minhas Skills
          </button>
        </div>
        <div className="about-content">
          <div className="about-text">
            {selectedAboutTab === 'resumo' ? (
              <>
                <p>Sou formado em Análise e Desenvolvimento de Sistemas e atualmente cursando Bacharelado em Engenharia de Software.</p>
                <p>
                  Com mais de 7 anos de experiência em desenvolvimento de software, dedico os últimos 3 anos ao desenvolvimento fullstack, especializando-me na criação de <span className="highlight-red">microserviços</span> e <span className="highlight-red">APIs</span> robustas.
                </p>
                <p>
                  No backend, trabalho com frameworks modernos como <strong>Spring Boot</strong> (Java) e <strong>FastAPI</strong> (Python), desenvolvendo soluções escaláveis e de alta performance. No frontend, utilizo <strong>ReactJS</strong> com <strong>Tailwind CSS</strong> e <strong>styled-components</strong>, além de <strong>HTML</strong> e <strong>CSS</strong> para criar interfaces modernas e responsivas.
                </p>
                <p>
                  Minha experiência abrange desde a arquitetura de sistemas até a implementação de integrações complexas, sempre buscando entregar código limpo, eficiente e alinhado com as melhores práticas do mercado.
                </p>
              </>
            ) : (
              <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  {['Python', 'FastAPI', 'NodeJS', 'Baileys', 'SQL', 'Git', 'Docker', 'Spring Boot', 'NestJS', 'AWS', 'React', 'Tailwind', 'React Router', 'Java', 'Linux', 'Windows', 'SQL Server', 'Tomcat', 'Zabbix', 'styled-components', 'HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                    <span key={index} className="tech-tag" style={{ marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>{tech}</span>
                  ))}
                </div>
                <div>
                  {['Liderança', 'Comunicação', 'Resiliência', 'Resolução de problemas', 'Pensamento crítico', 'Pensamento analítico', 'Inteligência emocional'].map((skill, index) => (
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
        <h2 className="experience-title">Minhas Experiências:</h2>
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
              <p className="experience-placeholder">Selecione uma empresa para ver os detalhes</p>
            )}
          </div>
        </div>
      </section>

      <section className="projects-section">
      <h2 className="about-title">Meus Projetos:</h2>
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
            })() : (<p className="project-placeholder">Selecione um projeto para ver os detalhes</p>)}
          </div>
          
        </div>
      </section>

      <Footer />
      </div>
    )
  }

export default Home
