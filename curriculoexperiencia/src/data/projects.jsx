import React from 'react'

export const projectsButton = {
  'React & Tailwind CSS': {
    description: [
      <a key="link-brunomelodev" href="https://www.brunomelodev.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        brunomelodev.com.br
      </a>,
      'Meu próprio site/portfólio desenvolvido por mim utilizando React e Tailwind CSS. O projeto conta com efeito de digitação (typing effect) no nome, integração com EmailJS para envio de emails de contato, e integração com Meta Pixel para rastreamento de eventos e conversões. O site apresenta minhas experiências profissionais, projetos desenvolvidos e informações de contato, tudo em uma interface moderna e responsiva criada com React e estilizada com Tailwind CSS.',
      <a key="link-thailago" href="https://www.thailago.com" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        thailago.com
      </a>,
      'Desenvolvi o site da Thais utilizando React e Tailwind CSS, criando uma interface moderna e responsiva. Implementei integração com EmailJS para envio de formulários de contato, integração com Meta Pixel (Meta Ads) para rastreamento de eventos e conversões, e integração com Google Ads para monitoramento de campanhas publicitárias. Além disso, implementei otimização SEO com tags meta apropriadas para melhorar o posicionamento no Google, garantindo uma solução completa de marketing digital.',
      <a key="link-capil" href="https://capillandingpage-srj6.vercel.app" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        capil.com.br
      </a>,
      'Desenvolvi uma landing page utilizando React e Tailwind CSS, criando uma interface moderna e responsiva. Implementei integração com EmailJS para envio de formulários de contato, garantindo uma experiência de usuário fluida e eficiente na captura de leads.',
      <a key="link-drtranscribe" href="https://www.drtranscribe.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        drtranscribe.com.br
      </a>,
      'Arquitetei e desenvolvi um sistema SaaS completo do zero, implementando toda a arquitetura frontend com ReactJS e Tailwind CSS, e backend com FastAPI em Python. A solução integra inteligência artificial para transcrição de consultas médicas, sistema de gestão de agendamentos clínicos, módulo de gestão de pacientes com cadastro e armazenamento de documentos, além de funcionalidade de telemedicina com salas de reunião virtuais e compartilhamento de links de acesso.',
      'Desenvolvi APIs RESTful em Python utilizando FastAPI, implementando arquitetura escalável com manipulação segura e eficiente de dados, seguindo padrões de design e boas práticas de desenvolvimento.',
      'Implementei interfaces de usuário responsivas em React, utilizando hooks customizados, React Router para navegação SPA e integração completa com backend através de APIs REST, garantindo experiência de usuário fluida e performática.',
      <a key="link-embaralhoquiz" href="https://embaralhoquiz.vercel.app" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        embaralhoquiz.com.br
      </a>,
      'Desenvolvi uma aplicação web em React e Tailwind CSS para criação de quizzes interativos. O sistema permite que o usuário faça upload de um PDF contendo perguntas e respostas, processa o documento e embaralha aleatoriamente tanto as perguntas quanto as alternativas de resposta, criando versões únicas do quiz a cada execução. Implementei funcionalidade de validação de respostas, permitindo que o usuário selecione entre certo e errado, com feedback visual imediato.',
      <a key="link-shinewindows" href="http://app.shinewindows.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        shinewindows.com.br
      </a>,
      'Migrei um sistema de CRM completo de PHP para React com Tailwind CSS, implementando toda a arquitetura frontend do zero. Desenvolvi o backend completo em Python utilizando FastAPI, seguindo padrões REST e boas práticas de desenvolvimento. A migração resultou em uma aplicação moderna, escalável e de melhor performance, mantendo todas as funcionalidades do sistema original enquanto melhora significativamente a experiência do usuário.',
    ],
  },
  'React & styled-components': {
    description: [
      <a key="link-esimplesauditoria" href="https://www.esimplesauditoria.com" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        esimplesauditoria.com
      </a>,
      'Desenvolvi múltiplos módulos do sistema é-Simples Auditoria, incluindo é-Xml, é-Balancete, é-Reforma, é-Cbs e Ibs, é-Análise, utilizando React e styled-components para criar interfaces consistentes e padronizadas. Implementei integração com APIs REST para consumo de dados, desenvolvendo componentes reutilizáveis que seguem os padrões visuais e funcionais do sistema, garantindo uma experiência de usuário uniforme e mantendo a consistência em toda a aplicação.',
    ],
  },
  'Python & FastAPI': {
    description: [
      <a key="link-drtranscribe-api" href="https://api.drtranscribe.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        api.drtranscribe.com.br/docs
      </a>,
      'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para o sistema DrTranscribe, implementando toda a arquitetura backend do zero. A API oferece documentação interativa automática (Swagger/OpenAPI) e abrange múltiplos módulos essenciais para o funcionamento do sistema SaaS de gestão médica.',
      'Módulos implementados incluem: Gestão de Clientes (CRUD completo, logos personalizadas, planos trial e premium), Autenticação e Autorização (login, verificação de créditos e planos), Gestão de Pacientes (cadastro, listagem, anamneses vinculadas), Gestão de Agendamentos (configuração de horários, slots disponíveis, lista de espera), Consultas e Telemedicina (criação de consultas, salas de videochamada WebRTC, links de acesso), Transcrição de Áudio (integração com Whisper para transcrição de consultas), Gestão de Anamneses (geração via IA, vinculação a pacientes, especialidades médicas) e Sistema de Créditos (controle de uso para planos trial).',
      'A arquitetura segue padrões REST, implementa validação de dados robusta, tratamento de erros padronizado e integração com serviços externos. Todas as rotas são documentadas automaticamente, facilitando a integração com o frontend React e permitindo testes diretos através da interface Swagger.',
      <a key="link-shinewindows-api" href="https://api.shinewindows.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        api.shinewindows.com.br/docs
      </a>,
      'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para o sistema de CRM ShineWindows, migrando toda a arquitetura backend do PHP para uma solução moderna e escalável. A API oferece documentação interativa automática (Swagger/OpenAPI) e cobre todos os módulos essenciais do sistema de gestão de contratos e clientes.',
      'Módulos implementados incluem: Autenticação (login, verificação de usuário), Gestão de Contratos (CRUD completo, exportação Excel, totais e estatísticas, detalhes auxiliares), Gestão de Clientes (CRUD completo com relacionamentos), Gestão de Empresas (CRUD completo), Gestão de Responsáveis (CRUD, opções de vendedores, bancos, cidades, estados, tipos de conta), Gestão de Aditivos (CRUD, totais e estatísticas), Gestão de Condições (CRUD, detalhes, opções de formas de pagamento e bancos), Gestão de Formas de Pagamento (CRUD completo), Gestão de Número de Parcelas (CRUD completo), Gestão de Usuários (CRUD, listagem simples, opções auxiliares), Gestão de Status, Sistema CRM (boards, cards, stages, upload de anexos, reordenação), Gestão de Tarefas (tipos de tarefas e tarefas com CRUD completo) e Gestão do Site (upload e obtenção de banners).',
      'A API foi desenvolvida seguindo padrões REST, com validação de dados robusta, tratamento de erros padronizado e estrutura modular. Todas as rotas são documentadas automaticamente, facilitando a integração com o frontend React e permitindo testes diretos através da interface Swagger.',
      <a key="link-esimples-api" href="https://xmls-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        xmls-api.esimplesauditor.com.br/docs
      </a>,
      'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para um sistema automatizado de monitoramento de notas fiscais. A solução consiste em um executável (robô) que é instalado no cliente e captura automaticamente as notas fiscais, enviando-as para o banco de dados, onde há uma interface de visualização completa.',
      'Módulos implementados incluem: Gestão de Clientes (criação, atualização e visualização por CNPJ), Autenticação (autenticação de clientes para importação de XML), Monitoramento (consulta de status do monitoramento por CNPJ), Upload de XMLs (upload de NF-e, NFC-e e SAT CF-e com armazenamento organizado por CNPJ/ano-mês, upload de arquivos ZIP com processamento em lote, upload com filtro e detecção automática com geração de PDF), Visualização de Notas (consulta por CNPJ, busca por tipo e período), Download de XMLs (download unitário e em lote em formato ZIP) e Geração de PDFs (geração de PDFs para NF-e, NFC-e e SAT CF-e, busca unitária e em lote de PDFs armazenados).',
      'A API foi desenvolvida para operar de forma autônoma através do executável instalado no cliente, processando automaticamente os XMLs de notas fiscais e organizando-os no banco de dados. A arquitetura segue padrões REST, implementa validação de dados robusta e oferece documentação interativa automática (Swagger/OpenAPI) para facilitar a integração e testes.',
      <a key="link-whatsapp-api" href="https://whatsapp-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        whatsapp-api.esimplesauditor.com.br/docs
      </a>,
      'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para integração com WhatsApp Web utilizando Baileys. A API oferece documentação interativa automática (Swagger/OpenAPI) e permite gerenciamento completo de instâncias do WhatsApp, envio de mensagens e arquivos.',
      'Módulos implementados incluem: Autenticação (autenticação de clientes), Criação de Instâncias (criação e gerenciamento de instâncias do WhatsApp), Gerador de QR-Code (geração de QR-Code para conexão de sessões), Status da Sessão (acompanhamento do status e conexão das sessões), Envio de Mensagens (envio de mensagens de texto), Envio de Arquivos (envio de PDFs e mídias em base64) e Desconexão (desconexão de sessões ativas do WhatsApp).',
      'A API foi desenvolvida utilizando Baileys para integração com WhatsApp Web, permitindo comunicação automatizada através de múltiplas instâncias. A arquitetura segue padrões REST, implementa validação de dados robusta, gerenciamento de sessões e oferece documentação interativa automática para facilitar a integração e testes.',
    ],
  },
  'NodeJS & Baileys': {
    description: [
      <a key="link-whatsapp-api-node" href="https://whatsapp-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        whatsapp-api.esimplesauditor.com.br/docs
      </a>,
      'Desenvolvi uma API RESTful para integração com WhatsApp Web, onde a documentação é feita em Python/FastAPI (Swagger/OpenAPI), porém toda a tratativa e implementação por trás é realizada em Node.js utilizando Baileys. A API oferece documentação interativa automática e permite gerenciamento completo de instâncias do WhatsApp, envio de mensagens e arquivos.',
      'Módulos implementados incluem: Autenticação (autenticação de clientes), Criação de Instâncias (criação e gerenciamento de instâncias do WhatsApp), Gerador de QR-Code (geração de QR-Code para conexão de sessões), Status da Sessão (acompanhamento do status e conexão das sessões), Envio de Mensagens (envio de mensagens de texto), Envio de Arquivos (envio de PDFs e mídias em base64) e Desconexão (desconexão de sessões ativas do WhatsApp).',
      'A arquitetura utiliza Node.js com a biblioteca Baileys para integração nativa com WhatsApp Web, permitindo comunicação automatizada através de múltiplas instâncias. A documentação é gerada automaticamente via FastAPI (Swagger/OpenAPI), enquanto toda a lógica de negócio e integração com WhatsApp é implementada em Node.js utilizando Baileys, seguindo padrões REST e implementando validação de dados robusta e gerenciamento de sessões eficiente.',
    ],
  },
  'HTML & CSS': {
    description: [
      <a key="link-consulta-optante" href="https://www.esimplesauditoria.com/consulta-optante-simples-nacional" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        esimplesauditoria/consulta-optante
      </a>,
      'Desenvolvi uma página de consulta de optantes pelo Simples Nacional utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem se uma empresa é ou não optante do Simples Nacional de forma rápida e gratuita, através de um campo de entrada para CNPJ e botões de ação (Consultar e Limpar).',
      'Implementei integração com API para buscar e exibir os dados da empresa em tempo real, incluindo informações sobre situação atual no Simples Nacional, períodos anteriores de opção, eventos futuros e histórico completo. A interface apresenta os resultados de forma organizada e clara, facilitando a compreensão das informações fiscais.',
      <a key="link-consulta-cnpj" href="https://www.esimplesauditoria.com/consulta-cnpj" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        esimplesauditoria/consulta-cnpj
      </a>,
      'Desenvolvi uma página de consulta de CNPJ utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem o cartão CNPJ, o comprovante de inscrição e a situação cadastral de uma empresa de forma rápida e gratuita.',
      'Implementei integração com API para buscar e exibir os dados completos da empresa em tempo real, incluindo razão social, nome fantasia, data de abertura, status, endereço, telefone, email, atividade principal, CNAEs secundárias, capital social, natureza jurídica, porte, situação no Simples Nacional, situação no MEI e informações de sócios.',
      'Desenvolvi funcionalidade de geração de PDF com todas as informações da empresa consultada, permitindo que os usuários salvem e compartilhem os dados de forma documentada e profissional.',
      <a key="link-consulta-ncm" href="https://www.esimplesauditoria.com/consulta-ncm" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        esimplesauditoria/consulta-ncm
      </a>,
      'Desenvolvi uma página de consulta de NCM (Nomenclatura Comum do Mercosul) utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem todos os NCMs existentes e suas descrições de forma rápida e gratuita, através de um campo de pesquisa que permite buscar por código NCM ou palavra-chave da descrição.',
      'Implementei integração com API para buscar e exibir os dados dos códigos NCM em tempo real, incluindo a hierarquia completa: capítulo, posição, subposição e item detalhado. A interface apresenta os resultados de forma organizada, facilitando a classificação fiscal e garantindo conformidade tributária nas operações comerciais.',
    ],
  },
  'Java & Spring Boot': {
    description: [
      <a key="link-spring-boot-course" href="https://www.youtube.com/watch?v=uT_AT0bDUQQ&list=PLChWda6UqRfBjQsFxBy3DGaHtE07HVFhi&index=7" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
        youtube.com/meu-curso-springboot
      </a>,
      'Criei uma playlist completa de curso do zero sobre desenvolvimento de CRUD com Spring Boot. O curso cobre desde a criação do projeto no Spring Initializr, configuração do banco de dados H2 para desenvolvimento local, toda a configuração necessária, até a implementação completa de operações CRUD (Create, Read, Update, Delete).',
      'O curso aborda conceitos fundamentais do Spring Boot, incluindo configuração de dependências, estruturação de projetos, criação de entidades, repositórios, serviços, controladores REST, validação de dados, uso de Lombok na prática e boas práticas de desenvolvimento com Java e Spring Framework.',
    ],
  }
}

