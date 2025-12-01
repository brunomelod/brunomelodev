import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const fullName = "Bruno Melo =)"
  const [displayedName, setDisplayedName] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedAboutTab, setSelectedAboutTab] = useState('resumo')

  const experiences = {
    'ATOM Lab': {
      period: 'NOV 2025 - ATÉ O MOMENTO',
      description: [
        'Desenvolvi e implementei CRM completo e Sistema de Gestão para clientes da ATOM Lab, criando soluções personalizadas que otimizam processos internos e melhoram a experiência do cliente.',
        'Arquitetei e desenvolvi novos módulos de serviço utilizando React e Tailwind CSS, implementando interfaces funcionais, consistentes e orientadas a boas práticas de UX/UI Design, garantindo maior usabilidade, acessibilidade e eficiência na experiência do usuário.',
        'Migrei sistemas legados em PHP para uma arquitetura moderna baseada em React com Tailwind CSS, incluindo a implementação completa do backend do zero em Python/FastAPI, seguindo padrões REST, princípios SOLID e boas práticas de escalabilidade, performance e manutenibilidade.'
      ],
      technologies: ['Python', 'FastAPI', 'NodeJS', 'Baileys', 'SQL', 'Git', 'Docker', 'Spring Boot', 'NestJS', 'AWS', 'React', 'Tailwind']
    },
    'é-Simples Auditoria': {
      period: 'OUT 2024 - ATÉ O MOMENTO',
      website: 'www.esimplesauditoria.com',
      description: [
        'Desenvolvi novos módulos de serviço utilizando React, Tailwind e styled-components, com foco na criação de interfaces funcionais e consistentes, aplicando princípios de UX/UI Design para garantir melhor experiência do usuário, além de realizar integrações complexas com APIs.',
        'Desenvolvi API de monitoramento de notas fiscais com executável automático (Python/FastAPI/NodeJS), que captura e processa XMLs de NFC-e e SAT-CF-e, armazena em banco de dados e disponibiliza rotas para visualização. Criei executável instalado pelo cliente, permitindo operação automática sem intervenção manual.',
        'Desenvolvi API de atualização de base fiscal com automação, integrando dados externos como NCMs e CEST para manter a base atualizada automaticamente, aumentando confiabilidade, reduzindo retrabalho e reduzindo o processamento de dados de 2 dias para apenas 15 minutos.',
        'Desenvolvi API de WhatsApp Web (Baileys) para envio automático de mensagens e arquivos, centralizando comunicações e melhorando a experiência do usuário final.',
        'Desenvolvi automação de consultas à Receita Federal (Simples Nacional), criando rotas que obtêm informações de Lista de compensação de débitos, Visualização de tributos e Sublimites em JSON, permitindo centralização de dados em tempo real, suporte à tomada de decisão e maior eficiência operacional.',
        'Desenvolvi funcionalidades chave da plataforma fiscal, incluindo cálculo automático do DAS, otimização de processos e emissão de relatórios em PDF.',
        'Participei ativamente em todo o ciclo de vida do software (SDLC), aplicando boas práticas, versionamento com Git, documentação e CI/CD, além de colaboração com áreas de negócio no levantamento de requisitos e melhoria contínua dos fluxos da plataforma.'
      ],
      technologies: ['Python', 'FastAPI', 'NodeJS', 'Baileys', 'SQL', 'Git', 'Docker', 'Spring Boot', 'NestJS']
    },
    'DrTranscribe': {
      period: 'JUN 2025 - Até o momento',
      website: 'www.drtranscribe.com.br',
      description: [
        'Arquitetei e desenvolvi um sistema SaaS completo do zero, implementando toda a arquitetura frontend com ReactJS e Tailwind CSS, e backend com FastAPI em Python. A solução integra inteligência artificial para transcrição de consultas médicas, sistema de gestão de agendamentos clínicos, módulo de gestão de pacientes com cadastro e armazenamento de documentos, além de funcionalidade de telemedicina com salas de reunião virtuais e compartilhamento de links de acesso.',
        'Desenvolvi APIs RESTful em Python utilizando FastAPI, implementando arquitetura escalável com manipulação segura e eficiente de dados, seguindo padrões de design e boas práticas de desenvolvimento.',
        'Implementei interfaces de usuário responsivas em React, utilizando hooks customizados, React Router para navegação SPA (Single Page Application) e integração completa com backend através de APIs REST, garantindo experiência de usuário fluida e performática.',
        'Gerenciei controle de versão utilizando Git, aplicando metodologias de versionamento semântico, branching strategies e workflows de colaboração em equipe, assegurando rastreabilidade e qualidade do código.'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'React Router', 'Tailwind', 'Git', 'SQL']
    },
    'Embrasac (DevOps)': {
      period: 'ABR 2021 - JUN 2022',
      description: [
        'Gerenciei e implantei sistemas em ambientes de homologação e produção, garantindo disponibilidade e estabilidade dos serviços.',
        'Realizei testes do início ao fim de sistemas junto aos clientes, assegurando qualidade e conformidade com os requisitos especificados.',
        'Desenvolvi soluções utilizando Java, implementando em servidores Linux/Windows, com SQL Server e Tomcat para clientes como Sky TV, Sicoob e Mercantil.',
        'Colaborei com equipes de desenvolvimento na configuração de VMs para homologação, realizando testes funcionais e monitoramento de logs para garantir a qualidade das entregas.',
        'Implementei e atualizei sistemas em produção, com monitoramento em tempo real utilizando Zabbix, garantindo alta disponibilidade e performance dos serviços.',
        'Capacitei equipes de operações através de treinamentos para homologação de novos fluxos e diálogos, promovendo conhecimento e autonomia operacional.'
      ],
      technologies: ['Java', 'Linux', 'Windows', 'SQL Server', 'Tomcat', 'Zabbix', 'Git']
    },
    'Ixia Serviços (DevOps)': {
      period: 'SET 2019 - ABR 2021',
      description: [
        'Gerenciei e implantei sistemas em ambientes de homologação e produção, garantindo disponibilidade e estabilidade dos serviços.',
        'Realizei testes do início ao fim de sistemas junto aos clientes, assegurando qualidade e conformidade com os requisitos especificados.',
        'Desenvolvi soluções utilizando Java, implementando em servidores Linux/Windows, com SQL Server e Tomcat para clientes como Sky TV, Sicoob e Mercantil.',
        'Colaborei com equipes de desenvolvimento na configuração de VMs para homologação, realizando testes funcionais e monitoramento de logs para garantir a qualidade das entregas.',
        'Implementei e atualizei sistemas em produção, com monitoramento em tempo real utilizando Zabbix, garantindo alta disponibilidade e performance dos serviços.',
        'Capacitei equipes de operações através de treinamentos para homologação de novos fluxos e diálogos, promovendo conhecimento e autonomia operacional.'
      ],
      technologies: ['Java', 'Linux', 'Windows', 'SQL Server', 'Tomcat', 'Zabbix', 'Git']
    }
  }

  const companies = Object.keys(experiences)

  // Set first company as selected by default
  useEffect(() => {
    if (!selectedCompany && companies.length > 0) {
      setSelectedCompany(companies[0])
    }
  }, [selectedCompany, companies])

  // Typing effect for name
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100) // Velocidade de digitação (100ms por letra)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="curriculo-page">
      <header className="header">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/bruno-melo-dev/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/@BrunoDevM/featured" target="_blank" rel="noopener noreferrer" className="icon-link">
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
        </div>
      </header>
      <section className="intro-section">
        <p className="intro-text">Oi, tudo bem? Eu sou o</p>
        <h1 className="name">
          {displayedName}
          <span className="cursor">|</span>
        </h1>
        <p className="description">
          Eu sou um engenheiro de software e desenvolvedor fullstack <span className="highlight-red">apaixonado</span> por <span className="highlight-red">tecnologia</span>.
        </p>
        <a href="mailto:brunomelod@gmail.com" className="email-button">
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
                  {['Python', 'FastAPI', 'NodeJS', 'Baileys', 'SQL', 'Git', 'Docker', 'Spring Boot', 'NestJS', 'AWS', 'React', 'Tailwind', 'React Router', 'Java', 'Linux', 'Windows', 'SQL Server', 'Tomcat', 'Zabbix', 'styled-components', 'HTML', 'CSS', 'JavaScript', 'PHP'].map((tech, index) => (
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
      <footer className="footer">
        <p className="footer-text">Desenvolvido por Bruno Melo usando React e Tailwind CSS</p>
        <p className="footer-copyright">© Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
