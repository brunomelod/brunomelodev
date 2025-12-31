import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../../config/emailjs.config'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Orcamento.css'

function Orcamento() {
  const navigate = useNavigate()
  const fullText = "Precisando de um sistema ou automação para o seu negócio?"
  const successText = "Solicitação enviada com sucesso! Entraremos em contato."
  const [displayedText, setDisplayedText] = useState('')
  const [displayedSuccessText, setDisplayedSuccessText] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    demanda: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Typing effect
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50) // Velocidade de digitação (50ms por letra - mais rápido)

    return () => clearInterval(typingInterval)
  }, [])

  const handleButtonClick = () => {
    // Rastreia evento InitiateCheckout no Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Solicitação de Orçamento',
        content_category: 'Serviços'
      });
    }

    setIsAnimating(true)
    setTimeout(() => {
      setShowForm(true)
      setIsAnimating(false)
    }, 500) // Tempo da animação
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        {
          from_name: formData.nome,
          from_email: formData.email,
          phone_number: telefone,
          message: formData.demanda
        },
        EMAILJS_CONFIG.publicKey
      )

      // Rastreia evento Lead no Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Formulário de Orçamento',
          content_category: 'Contato'
        });
      }

      // Se o envio foi bem-sucedido, mostra a mensagem de sucesso
      setShowForm(false)
      setShowSuccess(true)
      
      // Inicia o efeito de digitação da mensagem de sucesso
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < successText.length) {
          setDisplayedSuccessText(successText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 50) // Velocidade de digitação (50ms por letra)

      // Limpa o formulário
      setFormData({ nome: '', email: '', demanda: '' })
      setTelefone('')
      setIsSubmitting(false)
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      alert('Erro ao enviar solicitação. Por favor, tente novamente.')
      setIsSubmitting(false)
    }
  }

  const handleGoToHome = () => {
    navigate('/')
  }

  const handleNewOrcamento = () => {
    // Reseta todos os estados para começar do zero
    setShowSuccess(false)
    setShowForm(false)
    setIsAnimating(false)
    setDisplayedSuccessText('')
    setDisplayedText('')
    setTelefone('')
    setFormData({ nome: '', email: '', demanda: '' })
    
    // Pequeno delay para garantir que os estados foram resetados
    setTimeout(() => {
      // Reinicia o efeito de digitação
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 50)
    }, 100)
  }

  // Função para formatar telefone
  const formatTelefone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')
    
    // Limita a 11 dígitos (DDD + número)
    const limitedNumbers = numbers.slice(0, 11)
    
    // Aplica a formatação
    if (limitedNumbers.length <= 10) {
      // Telefone fixo: (XX) XXXX-XXXX
      if (limitedNumbers.length <= 2) {
        return limitedNumbers.length > 0 ? `(${limitedNumbers}` : ''
      } else if (limitedNumbers.length <= 6) {
        return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`
      } else {
        return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`
      }
    } else {
      // Celular: (XX) XXXXX-XXXX
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`
    }
  }

  const handleTelefoneChange = (e) => {
    const formatted = formatTelefone(e.target.value)
    setTelefone(formatted)
  }

  // Função para renderizar o texto de sucesso com palavras em laranja
  const renderSuccessTextWithHighlight = (text) => {
    const highlightedWords = ['enviada', 'sucesso', 'contato']
    // Divide por espaços e quebras de linha, mantendo os separadores
    const parts = text.split(/(\s+|\n)/)
    
    return parts.map((part, index) => {
      if (part === '\n') {
        return <br key={index} />
      }
      const cleanWord = part.trim().replace(/[.,!?]/g, '').toLowerCase()
      const isHighlighted = highlightedWords.includes(cleanWord)
      
      if (isHighlighted) {
        return <span key={index} className="highlight-orange">{part}</span>
      }
      return <span key={index}>{part}</span>
    })
  }

  // Função para renderizar o texto com palavras em laranja
  const renderTextWithHighlight = (text) => {
    const highlightedWords = ['sistema', 'automação']
    const words = text.split(/(\s+)/)
    
    return words.map((word, index) => {
      const cleanWord = word.trim().toLowerCase()
      const isHighlighted = highlightedWords.includes(cleanWord)
      
      if (isHighlighted) {
        return <span key={index} className="highlight-orange">{word}</span>
      }
      return <span key={index}>{word}</span>
    })
  }

  return (
    <div className="orcamento-page">
      <Header />
      
      <main className="orcamento-main">
        {!showForm && !showSuccess && (
          <section className={`orcamento-intro ${isAnimating ? 'fade-out-up' : ''}`}>
            <p className="orcamento-intro-text">Você está</p>
            <h1 className="orcamento-title">
              {renderTextWithHighlight(displayedText)}
              <span className="cursor">|</span>
            </h1>
            <button className="orcamento-button" onClick={handleButtonClick}>
              Solicite um orçamento
            </button>
          </section>
        )}
        {showSuccess && (
          <section className="orcamento-intro">
            <h1 className="orcamento-title">
              {renderSuccessTextWithHighlight(displayedSuccessText)}
              <span className="cursor">|</span>
            </h1>
            {displayedSuccessText.length === successText.length && (
              <div className="success-buttons">
                <button className="success-button" onClick={handleGoToHome}>
                  Sobre mim
                </button>
                <button className="success-button" onClick={handleNewOrcamento}>
                  Novo orçamento
                </button>
              </div>
            )}
          </section>
        )}
        {showForm && !showSuccess && (
          <section className="orcamento-form-section">
            <div className="form-container">
              <div className="form-explanation">
                <h2 className="explanation-title">Precisa de um bot/robô?</h2>
                <p className="explanation-text">
                  Descreva em <span className="highlight-orange">detalhes</span> o que precisa ser automatizado <span className="highlight-orange">(quais passos manuais gostaria de automatizar).</span>
                </p>
                <p className="explanation-text">
                  Mencione <span className="highlight-orange">site</span> e quais <span className="highlight-orange">passos/processos</span> gostaria de automatizar
                </p>

                <h2 className="explanation-title" style={{ marginTop: '2rem' }}>Precisa de um sistema?</h2>
                <p className="explanation-text">
                  Descreva a <span className="highlight-orange">visão</span> ou quais <span className="highlight-orange">funcionalidades</span> imagina serem necessárias;
                </p>
                <p className="explanation-text">
                  Quero um sistema para <span className="highlight-orange">Fazer X,Y,Z</span>
                </p>
                <p className="explanation-text">
                  Esse sistema deve me <span className="highlight-orange">permitir fazer A,B,C,D</span>
                </p>
              </div>
              <div className="form-wrapper">
                <form className="orcamento-form" onSubmit={handleFormSubmit}>
                  <div className="form-field">
                    <label htmlFor="nome" className="form-label">Nome Completo:</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="form-input"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="telefone" className="form-label">
                      Telefone <span className="highlight-orange">(WhatsApp)</span>:
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="form-input"
                      value={telefone}
                      onChange={handleTelefoneChange}
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="form-label">
                      Seu email <span className="highlight-orange">para retorno</span>:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="demanda" className="form-label">
                      Descreva a sua <span className="highlight-orange">demanda</span>:
                    </label>
                    <textarea
                      id="demanda"
                      name="demanda"
                      className="form-textarea"
                      rows="6"
                      value={formData.demanda}
                      onChange={(e) => setFormData({ ...formData, demanda: e.target.value })}
                      required
                    />
                    <p className="form-hint">
                      Descreva exatamente o que está buscando. Quanto mais detalhes, mais rápido conseguimos te dar um retorno. Descrições muito vagas irão atrasar todo o processo. Favor incluir detalhes!
                    </p>
                  </div>

                  <button type="submit" className="orcamento-submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Orcamento

