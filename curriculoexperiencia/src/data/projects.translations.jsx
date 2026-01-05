import React from 'react'

export const getProjectsByLanguage = (language) => {
  const isPT = language === 'pt-BR'

  const projects = {
    'React & Tailwind CSS': {
      description: [
        <a key="link-brunomelodev" href="https://www.brunomelodev.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          brunomelodev.com.br
        </a>,
        isPT 
          ? 'Meu próprio site/portfólio desenvolvido por mim utilizando React e Tailwind CSS. O projeto conta com efeito de digitação (typing effect) no nome, integração com EmailJS para envio de emails de contato, e integração com Meta Pixel para rastreamento de eventos e conversões. O site apresenta minhas experiências profissionais, projetos desenvolvidos e informações de contato, tudo em uma interface moderna e responsiva criada com React e estilizada com Tailwind CSS.'
          : 'My personal website/portfolio developed using React and Tailwind CSS. The project features a typing effect on the name, EmailJS integration for sending contact emails, and Meta Pixel integration for event tracking and conversions. The site showcases my professional experiences, projects I\'ve developed, and contact information, all in a modern and responsive interface built with React and styled with Tailwind CSS.',
        <a key="link-thailago" href="https://www.thailago.com" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          thailago.com
        </a>,
        isPT
          ? 'Desenvolvi o site da Thais utilizando React e Tailwind CSS, criando uma interface moderna e responsiva. Implementei integração com EmailJS para envio de formulários de contato, integração com Meta Pixel (Meta Ads) para rastreamento de eventos e conversões, e integração com Google Ads para monitoramento de campanhas publicitárias. Além disso, implementei otimização SEO com tags meta apropriadas para melhorar o posicionamento no Google, garantindo uma solução completa de marketing digital.'
          : 'I developed the website for Thais using React and Tailwind CSS, creating a modern and responsive interface. I implemented EmailJS integration for contact form submissions, Meta Pixel (Meta Ads) integration for event tracking and conversions, and Google Ads integration for ad campaign monitoring. Additionally, I implemented SEO optimization with appropriate meta tags to improve search engine rankings, ensuring a complete digital marketing solution.',
        <a key="link-capil" href="https://capillandingpage-srj6.vercel.app" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          capil.com.br
        </a>,
        isPT
          ? 'Desenvolvi uma landing page utilizando React e Tailwind CSS, criando uma interface moderna e responsiva. Implementei integração com EmailJS para envio de formulários de contato, garantindo uma experiência de usuário fluida e eficiente na captura de leads.'
          : 'I developed a landing page using React and Tailwind CSS, creating a modern and responsive interface. I implemented EmailJS integration for contact form submissions, ensuring a smooth and efficient user experience for lead generation.',
        <a key="link-drtranscribe" href="https://www.drtranscribe.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          drtranscribe.com.br
        </a>,
        isPT
          ? 'Arquitetei e desenvolvi um sistema SaaS completo do zero, implementando toda a arquitetura frontend com ReactJS e Tailwind CSS, e backend com FastAPI em Python. A solução integra inteligência artificial para transcrição de consultas médicas, sistema de gestão de agendamentos clínicos, módulo de gestão de pacientes com cadastro e armazenamento de documentos, além de funcionalidade de telemedicina com salas de reunião virtuais e compartilhamento de links de acesso.'
          : 'I architected and developed a complete SaaS system from scratch, implementing the entire frontend architecture with ReactJS and Tailwind CSS, and backend with FastAPI in Python. The solution integrates artificial intelligence for transcription of medical consultations, clinical appointment management system, patient management module with registration and document storage, in addition to telemedicine functionality with virtual meeting rooms and access link sharing.',
        isPT
          ? 'Desenvolvi APIs RESTful em Python utilizando FastAPI, implementando arquitetura escalável com manipulação segura e eficiente de dados, seguindo padrões de design e boas práticas de desenvolvimento.'
          : 'I developed RESTful APIs in Python using FastAPI, implementing scalable architecture with secure and efficient data handling, following design patterns and development best practices.',
        isPT
          ? 'Implementei interfaces de usuário responsivas em React, utilizando hooks customizados, React Router para navegação SPA e integração completa com backend através de APIs REST, garantindo experiência de usuário fluida e performática.'
          : 'I implemented responsive user interfaces in React, using custom hooks, React Router for SPA navigation and complete integration with backend through REST APIs, ensuring fluid and performative user experience.',
        <a key="link-embaralhoquiz" href="https://embaralhoquiz.vercel.app" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          embaralhoquiz.com.br
        </a>,
        isPT
          ? 'Desenvolvi uma aplicação web em React e Tailwind CSS para criação de quizzes interativos. O sistema permite que o usuário faça upload de um PDF contendo perguntas e respostas, processa o documento e embaralha aleatoriamente tanto as perguntas quanto as alternativas de resposta, criando versões únicas do quiz a cada execução. Implementei funcionalidade de validação de respostas, permitindo que o usuário selecione entre certo e errado, com feedback visual imediato.'
          : 'I developed a web application in React and Tailwind CSS for creating interactive quizzes. The system allows the user to upload a PDF containing questions and answers, processes the document and randomly shuffles both questions and answer alternatives, creating unique quiz versions on each execution. I implemented answer validation functionality, allowing the user to select between correct and incorrect, with immediate visual feedback.',
        <a key="link-shinewindows" href="http://app.shinewindows.com.br" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          shinewindows.com.br
        </a>,
        isPT
          ? 'Migrei um sistema de CRM completo de PHP para React com Tailwind CSS, implementando toda a arquitetura frontend do zero. Desenvolvi o backend completo em Python utilizando FastAPI, seguindo padrões REST e boas práticas de desenvolvimento. A migração resultou em uma aplicação moderna, escalável e de melhor performance, mantendo todas as funcionalidades do sistema original enquanto melhora significativamente a experiência do usuário.'
          : 'I migrated a complete CRM system from PHP to React with Tailwind CSS, implementing the entire frontend architecture from scratch. I developed the complete backend in Python using FastAPI, following REST patterns and development best practices. The migration resulted in a modern, scalable and better performing application, maintaining all functionalities of the original system while significantly improving user experience.',
      ],
    },
    'React & styled-components': {
      description: [
        <a key="link-esimplesauditoria" href="https://www.esimplesauditoria.com" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          esimplesauditoria.com
        </a>,
        isPT
          ? 'Desenvolvi múltiplos módulos do sistema é-Simples Auditoria, incluindo é-Xml, é-Balancete, é-Reforma, é-Cbs e Ibs, é-Análise, utilizando React e styled-components para criar interfaces consistentes e padronizadas. Implementei integração com APIs REST para consumo de dados, desenvolvendo componentes reutilizáveis que seguem os padrões visuais e funcionais do sistema, garantindo uma experiência de usuário uniforme e mantendo a consistência em toda a aplicação.'
          : 'I developed multiple modules of the é-Simples Auditoria system, including é-Xml, é-Balancete, é-Reforma, é-Cbs and Ibs, é-Análise, using React and styled-components to create consistent and standardized interfaces. I implemented REST API integration for data consumption, developing reusable components that follow the system\'s visual and functional patterns, ensuring a uniform user experience and maintaining consistency throughout the application.',
      ],
    },
    'Python & FastAPI': {
      description: [
        <a key="link-drtranscribe-api" href="https://api.drtranscribe.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          api.drtranscribe.com.br/docs
        </a>,
        isPT
          ? 'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para o sistema DrTranscribe, implementando toda a arquitetura backend do zero. A API oferece documentação interativa automática (Swagger/OpenAPI) e abrange múltiplos módulos essenciais para o funcionamento do sistema SaaS de gestão médica.'
          : 'I developed a complete RESTful API in Python using FastAPI for the DrTranscribe system, implementing the entire backend architecture from scratch. The API offers automatic interactive documentation (Swagger/OpenAPI) and covers multiple essential modules for the medical management SaaS system operation.',
        isPT
          ? 'Módulos implementados incluem: Gestão de Clientes (CRUD completo, logos personalizadas, planos trial e premium), Autenticação e Autorização (login, verificação de créditos e planos), Gestão de Pacientes (cadastro, listagem, anamneses vinculadas), Gestão de Agendamentos (configuração de horários, slots disponíveis, lista de espera), Consultas e Telemedicina (criação de consultas, salas de videochamada WebRTC, links de acesso), Transcrição de Áudio (integração com Whisper para transcrição de consultas), Gestão de Anamneses (geração via IA, vinculação a pacientes, especialidades médicas) e Sistema de Créditos (controle de uso para planos trial).'
          : 'Implemented modules include: Client Management (complete CRUD, custom logos, trial and premium plans), Authentication and Authorization (login, credit and plan verification), Patient Management (registration, listing, linked anamneses), Appointment Management (schedule configuration, available slots, waiting list), Consultations and Telemedicine (consultation creation, WebRTC video call rooms, access links), Audio Transcription (Whisper integration for consultation transcription), Anamnesis Management (AI generation, patient linking, medical specialties) and Credit System (usage control for trial plans).',
        isPT
          ? 'A arquitetura segue padrões REST, implementa validação de dados robusta, tratamento de erros padronizado e integração com serviços externos. Todas as rotas são documentadas automaticamente, facilitando a integração com o frontend React e permitindo testes diretos através da interface Swagger.'
          : 'The architecture follows REST patterns, implements robust data validation, standardized error handling and integration with external services. All routes are automatically documented, facilitating integration with the React frontend and allowing direct testing through the Swagger interface.',
        <a key="link-shinewindows-api" href="https://api.shinewindows.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          api.shinewindows.com.br/docs
        </a>,
        isPT
          ? 'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para o sistema de CRM ShineWindows, migrando toda a arquitetura backend do PHP para uma solução moderna e escalável. A API oferece documentação interativa automática (Swagger/OpenAPI) e cobre todos os módulos essenciais do sistema de gestão de contratos e clientes.'
          : 'I developed a complete RESTful API in Python using FastAPI for the ShineWindows CRM system, migrating the entire backend architecture from PHP to a modern and scalable solution. The API offers automatic interactive documentation (Swagger/OpenAPI) and covers all essential modules of the contract and client management system.',
        isPT
          ? 'Módulos implementados incluem: Autenticação (login, verificação de usuário), Gestão de Contratos (CRUD completo, exportação Excel, totais e estatísticas, detalhes auxiliares), Gestão de Clientes (CRUD completo com relacionamentos), Gestão de Empresas (CRUD completo), Gestão de Responsáveis (CRUD, opções de vendedores, bancos, cidades, estados, tipos de conta), Gestão de Aditivos (CRUD, totais e estatísticas), Gestão de Condições (CRUD, detalhes, opções de formas de pagamento e bancos), Gestão de Formas de Pagamento (CRUD completo), Gestão de Número de Parcelas (CRUD completo), Gestão de Usuários (CRUD, listagem simples, opções auxiliares), Gestão de Status, Sistema CRM (boards, cards, stages, upload de anexos, reordenação), Gestão de Tarefas (tipos de tarefas e tarefas com CRUD completo) e Gestão do Site (upload e obtenção de banners).'
          : 'Implemented modules include: Authentication (login, user verification), Contract Management (complete CRUD, Excel export, totals and statistics, auxiliary details), Client Management (complete CRUD with relationships), Company Management (complete CRUD), Responsible Management (CRUD, seller options, banks, cities, states, account types), Addendum Management (CRUD, totals and statistics), Condition Management (CRUD, details, payment method and bank options), Payment Method Management (complete CRUD), Installment Number Management (complete CRUD), User Management (CRUD, simple listing, auxiliary options), Status Management, CRM System (boards, cards, stages, attachment upload, reordering), Task Management (task types and tasks with complete CRUD) and Site Management (banner upload and retrieval).',
        isPT
          ? 'A API foi desenvolvida seguindo padrões REST, com validação de dados robusta, tratamento de erros padronizado e estrutura modular. Todas as rotas são documentadas automaticamente, facilitando a integração com o frontend React e permitindo testes diretos através da interface Swagger.'
          : 'The API was developed following REST patterns, with robust data validation, standardized error handling and modular structure. All routes are automatically documented, facilitating integration with the React frontend and allowing direct testing through the Swagger interface.',
        <a key="link-esimples-api" href="https://xmls-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          xmls-api.esimplesauditor.com.br/docs
        </a>,
        isPT
          ? 'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para um sistema automatizado de monitoramento de notas fiscais. A solução consiste em um executável (robô) que é instalado no cliente e captura automaticamente as notas fiscais, enviando-as para o banco de dados, onde há uma interface de visualização completa.'
          : 'I developed a complete RESTful API in Python using FastAPI for an automated invoice monitoring system. The solution consists of an executable (robot) that is installed on the client and automatically captures invoices, sending them to the database, where there is a complete visualization interface.',
        isPT
          ? 'Módulos implementados incluem: Gestão de Clientes (criação, atualização e visualização por CNPJ), Autenticação (autenticação de clientes para importação de XML), Monitoramento (consulta de status do monitoramento por CNPJ), Upload de XMLs (upload de NF-e, NFC-e e SAT CF-e com armazenamento organizado por CNPJ/ano-mês, upload de arquivos ZIP com processamento em lote, upload com filtro e detecção automática com geração de PDF), Visualização de Notas (consulta por CNPJ, busca por tipo e período), Download de XMLs (download unitário e em lote em formato ZIP) e Geração de PDFs (geração de PDFs para NF-e, NFC-e e SAT CF-e, busca unitária e em lote de PDFs armazenados).'
          : 'Implemented modules include: Client Management (creation, update and visualization by CNPJ), Authentication (client authentication for XML import), Monitoring (monitoring status query by CNPJ), XML Upload (NF-e, NFC-e and SAT CF-e upload with storage organized by CNPJ/year-month, ZIP file upload with batch processing, upload with filter and automatic detection with PDF generation), Invoice Visualization (query by CNPJ, search by type and period), XML Download (unit and batch download in ZIP format) and PDF Generation (PDF generation for NF-e, NFC-e and SAT CF-e, unit and batch search of stored PDFs).',
        isPT
          ? 'A API foi desenvolvida para operar de forma autônoma através do executável instalado no cliente, processando automaticamente os XMLs de notas fiscais e organizando-os no banco de dados. A arquitetura segue padrões REST, implementa validação de dados robusta e oferece documentação interativa automática (Swagger/OpenAPI) para facilitar a integração e testes.'
          : 'The API was developed to operate autonomously through the executable installed on the client, automatically processing invoice XMLs and organizing them in the database. The architecture follows REST patterns, implements robust data validation and offers automatic interactive documentation (Swagger/OpenAPI) to facilitate integration and testing.',
        <a key="link-whatsapp-api" href="https://whatsapp-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          whatsapp-api.esimplesauditor.com.br/docs
        </a>,
        isPT
          ? 'Desenvolvi uma API RESTful completa em Python utilizando FastAPI para integração com WhatsApp Web utilizando Baileys. A API oferece documentação interativa automática (Swagger/OpenAPI) e permite gerenciamento completo de instâncias do WhatsApp, envio de mensagens e arquivos.'
          : 'I developed a complete RESTful API in Python using FastAPI for WhatsApp Web integration using Baileys. The API offers automatic interactive documentation (Swagger/OpenAPI) and allows complete management of WhatsApp instances, message and file sending.',
        isPT
          ? 'Módulos implementados incluem: Autenticação (autenticação de clientes), Criação de Instâncias (criação e gerenciamento de instâncias do WhatsApp), Gerador de QR-Code (geração de QR-Code para conexão de sessões), Status da Sessão (acompanhamento do status e conexão das sessões), Envio de Mensagens (envio de mensagens de texto), Envio de Arquivos (envio de PDFs e mídias em base64) e Desconexão (desconexão de sessões ativas do WhatsApp).'
          : 'Implemented modules include: Authentication (client authentication), Instance Creation (creation and management of WhatsApp instances), QR-Code Generator (QR-Code generation for session connection), Session Status (status tracking and session connection), Message Sending (text message sending), File Sending (PDF and base64 media sending) and Disconnection (disconnection of active WhatsApp sessions).',
        isPT
          ? 'A API foi desenvolvida utilizando Baileys para integração com WhatsApp Web, permitindo comunicação automatizada através de múltiplas instâncias. A arquitetura segue padrões REST, implementa validação de dados robusta, gerenciamento de sessões e oferece documentação interativa automática para facilitar a integração e testes.'
          : 'The API was developed using Baileys for WhatsApp Web integration, allowing automated communication through multiple instances. The architecture follows REST patterns, implements robust data validation, session management and offers automatic interactive documentation to facilitate integration and testing.',
      ],
    },
    'NodeJS & Baileys': {
      description: [
        <a key="link-whatsapp-api-node" href="https://whatsapp-api.esimplesauditor.com.br/docs" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          whatsapp-api.esimplesauditor.com.br/docs
        </a>,
        isPT
          ? 'Desenvolvi uma API RESTful para integração com WhatsApp Web, onde a documentação é feita em Python/FastAPI (Swagger/OpenAPI), porém toda a tratativa e implementação por trás é realizada em Node.js utilizando Baileys. A API oferece documentação interativa automática e permite gerenciamento completo de instâncias do WhatsApp, envio de mensagens e arquivos.'
          : 'I developed a RESTful API for WhatsApp Web integration, where documentation is done in Python/FastAPI (Swagger/OpenAPI), but all handling and implementation behind is done in Node.js using Baileys. The API offers automatic interactive documentation and allows complete management of WhatsApp instances, message and file sending.',
        isPT
          ? 'Módulos implementados incluem: Autenticação (autenticação de clientes), Criação de Instâncias (criação e gerenciamento de instâncias do WhatsApp), Gerador de QR-Code (geração de QR-Code para conexão de sessões), Status da Sessão (acompanhamento do status e conexão das sessões), Envio de Mensagens (envio de mensagens de texto), Envio de Arquivos (envio de PDFs e mídias em base64) e Desconexão (desconexão de sessões ativas do WhatsApp).'
          : 'Implemented modules include: Authentication (client authentication), Instance Creation (creation and management of WhatsApp instances), QR-Code Generator (QR-Code generation for session connection), Session Status (status tracking and session connection), Message Sending (text message sending), File Sending (PDF and base64 media sending) and Disconnection (disconnection of active WhatsApp sessions).',
        isPT
          ? 'A arquitetura utiliza Node.js com a biblioteca Baileys para integração nativa com WhatsApp Web, permitindo comunicação automatizada através de múltiplas instâncias. A documentação é gerada automaticamente via FastAPI (Swagger/OpenAPI), enquanto toda a lógica de negócio e integração com WhatsApp é implementada em Node.js utilizando Baileys, seguindo padrões REST e implementando validação de dados robusta e gerenciamento de sessões eficiente.'
          : 'The architecture uses Node.js with the Baileys library for native WhatsApp Web integration, allowing automated communication through multiple instances. Documentation is automatically generated via FastAPI (Swagger/OpenAPI), while all business logic and WhatsApp integration is implemented in Node.js using Baileys, following REST patterns and implementing robust data validation and efficient session management.',
      ],
    },
    'HTML & CSS': {
      description: [
        <a key="link-consulta-optante" href="https://www.esimplesauditoria.com/consulta-optante-simples-nacional" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          esimplesauditoria/consulta-optante
        </a>,
        isPT
          ? 'Desenvolvi uma página de consulta de optantes pelo Simples Nacional utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem se uma empresa é ou não optante do Simples Nacional de forma rápida e gratuita, através de um campo de entrada para CNPJ e botões de ação (Consultar e Limpar).'
          : 'I developed a Simples Nacional optant consultation page using HTML and CSS, creating a modern and responsive interface. The page allows users to check if a company is or is not a Simples Nacional optant quickly and free of charge, through a CNPJ input field and action buttons (Consult and Clear).',
        isPT
          ? 'Implementei integração com API para buscar e exibir os dados da empresa em tempo real, incluindo informações sobre situação atual no Simples Nacional, períodos anteriores de opção, eventos futuros e histórico completo. A interface apresenta os resultados de forma organizada e clara, facilitando a compreensão das informações fiscais.'
          : 'I implemented API integration to fetch and display company data in real time, including information about current situation in Simples Nacional, previous option periods, future events and complete history. The interface presents results in an organized and clear way, facilitating understanding of tax information.',
        <a key="link-consulta-cnpj" href="https://www.esimplesauditoria.com/consulta-cnpj" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          esimplesauditoria/consulta-cnpj
        </a>,
        isPT
          ? 'Desenvolvi uma página de consulta de CNPJ utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem o cartão CNPJ, o comprovante de inscrição e a situação cadastral de uma empresa de forma rápida e gratuita.'
          : 'I developed a CNPJ consultation page using HTML and CSS, creating a modern and responsive interface. The page allows users to consult the CNPJ card, registration certificate and company registration status quickly and free of charge.',
        isPT
          ? 'Implementei integração com API para buscar e exibir os dados completos da empresa em tempo real, incluindo razão social, nome fantasia, data de abertura, status, endereço, telefone, email, atividade principal, CNAEs secundárias, capital social, natureza jurídica, porte, situação no Simples Nacional, situação no MEI e informações de sócios.'
          : 'I implemented API integration to fetch and display complete company data in real time, including corporate name, trade name, opening date, status, address, phone, email, main activity, secondary CNAEs, capital, legal nature, size, Simples Nacional situation, MEI situation and partner information.',
        isPT
          ? 'Desenvolvi funcionalidade de geração de PDF com todas as informações da empresa consultada, permitindo que os usuários salvem e compartilhem os dados de forma documentada e profissional.'
          : 'I developed PDF generation functionality with all information from the consulted company, allowing users to save and share data in a documented and professional way.',
        <a key="link-consulta-ncm" href="https://www.esimplesauditoria.com/consulta-ncm" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
          esimplesauditoria/consulta-ncm
        </a>,
        isPT
          ? 'Desenvolvi uma página de consulta de NCM (Nomenclatura Comum do Mercosul) utilizando HTML e CSS, criando uma interface moderna e responsiva. A página permite que os usuários consultem todos os NCMs existentes e suas descrições de forma rápida e gratuita, através de um campo de pesquisa que permite buscar por código NCM ou palavra-chave da descrição.'
          : 'I developed an NCM (Mercosur Common Nomenclature) consultation page using HTML and CSS, creating a modern and responsive interface. The page allows users to consult all existing NCMs and their descriptions quickly and free of charge, through a search field that allows searching by NCM code or description keyword.',
        isPT
          ? 'Implementei integração com API para buscar e exibir os dados dos códigos NCM em tempo real, incluindo a hierarquia completa: capítulo, posição, subposição e item detalhado. A interface apresenta os resultados de forma organizada, facilitando a classificação fiscal e garantindo conformidade tributária nas operações comerciais.'
          : 'I implemented API integration to fetch and display NCM code data in real time, including the complete hierarchy: chapter, position, subposition and detailed item. The interface presents results in an organized way, facilitating tax classification and ensuring tax compliance in commercial operations.',
      ],
    },
    'Java & Spring Boot': {
      description: [
        <a key="link-spring-boot-course" href="https://www.youtube.com/watch?v=uT_AT0bDUQQ&list=PLChWda6UqRfBjQsFxBy3DGaHtE07HVFhi&index=7" target="_blank" rel="noopener noreferrer" className="company-name" style={{ display: 'block', textDecoration: 'none' }}>
          youtube.com/meu-curso-springboot
        </a>,
        isPT
          ? 'Criei uma playlist completa de curso do zero sobre desenvolvimento de CRUD com Spring Boot. O curso cobre desde a criação do projeto no Spring Initializr, configuração do banco de dados H2 para desenvolvimento local, toda a configuração necessária, até a implementação completa de operações CRUD (Create, Read, Update, Delete).'
          : 'I created a complete course playlist from scratch on CRUD development with Spring Boot. The course covers from project creation in Spring Initializr, H2 database configuration for local development, all necessary configuration, to complete implementation of CRUD operations (Create, Read, Update, Delete).',
        isPT
          ? 'O curso aborda conceitos fundamentais do Spring Boot, incluindo configuração de dependências, estruturação de projetos, criação de entidades, repositórios, serviços, controladores REST, validação de dados, uso de Lombok na prática e boas práticas de desenvolvimento com Java e Spring Framework.'
          : 'The course covers fundamental Spring Boot concepts, including dependency configuration, project structuring, entity creation, repositories, services, REST controllers, data validation, practical Lombok usage and development best practices with Java and Spring Framework.',
      ],
    },
  }

  return projects
}

