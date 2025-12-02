import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.css'

function Home() {
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
      <Footer />
    </div>
  )
}

export default Home

