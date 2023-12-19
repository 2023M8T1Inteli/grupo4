# Tecnologia Assistiva: Desenvolvimento de um Compilador e um Ambiente de Desenvolvimento Integrado com Tapete Sensorial para Estimulação de Pessoas com Leves Desordens Neurológicas

André Lessa, Gabriel Carneiro, Leandro Custódio, Sarah Ribeiro, Stefano Butori, Vinicius Santos e Yasmin Vitória

**Resumo** - 

Este artigo aborda o desenvolvimento de um compilador e um Ambiente de Desenvolvimento Integrado (IDE) dedicados à Tecnologia Assistiva (TA), com foco em estimular pessoas que enfrentam leves desordens neurológicas, especialmente aquelas atendidas pela Associação de Assistência à Criança Deficiente (AACD). A AACD presta assistência a uma variedade de condições, como paralisia cerebral, amputações, poliomielite, doenças neuromusculares, etc. Caracterizadas por distúrbios no controle motor, postura e possíveis complicações sensoriais, cognitivas e de comunicação. O objetivo deste projeto é fornecer um ambiente inovador para terapia assistiva, utilizando um tapete sensorial conectado ao Greg Maker. Este recurso visa proporcionar um affordance adequado para respostas de pacientes com leves desordens neurológicas, melhorando desempenhos ocupacionais e facilitando a realização de Atividades de Vida Diária (AVDs).

**Palavras-chave** - Tecnologia Assistiva; Compiladores; IDE; Tapete Sensorial.

## 1. Introdução 

A Terapia Ocupacional desempenha um papel crucial na reabilitação de pacientes com paralisia cerebral, conforme descrito em Zilli (2013). De acordo com este artigo,  esta terapia foca no desenvolvimento e melhoria da funcionalidade e independência do paciente em atividades diárias. Ela proporciona benefícios significativos, como a melhoria da coordenação motora, o aumento da independência, a promoção da inclusão social e a melhoria da qualidade de vida. Os terapeutas ocupacionais (TO) utilizam uma variedade de técnicas e estratégias para ajudar os pacientes a superar limitações físicas e cognitivas, dentre elas a tecnologia assistiva (TA).

O trabalho de Alves, Emmel e Matsukura (2012) e Calheiros, Mendes e Lourenço (2018) discutem a evolução da terapia ocupacional no Brasil, destacando o atraso na adoção de tecnologias assistivas em comparação com países da América do Norte e Europa. Esse atraso é atribuído a fatores como escassez de recursos financeiros, limitações no financiamento público e privado, e falta de conhecimento técnico entre profissionais de reabilitação. 

Tecnologia Assistiva, conforme descrito no trabalho de Bersch (2008), refere-se ao conjunto de recursos e serviços que ajudam a melhorar a funcionalidade e a independência de pessoas com deficiência ou mobilidade reduzida. Segundo o artigo, a importância dessa tecnologia reside na sua capacidade de promover a inclusão social, aumentar a autonomia e a qualidade de vida, facilitando o acesso a atividades cotidianas e contribuindo para uma maior participação na sociedade. A Tecnologia Assistiva engloba desde dispositivos simples até sistemas tecnológicos avançados, adaptados às necessidades individuais de cada pessoa.

O artigo apresenta uma colaboração inovadora entre a AACD e o Inteli, visando superar essas barreiras na implementação de tecnologia assistiva, por meio de um projeto que visa simplificar o trabalho do TO nas atividades com pacientes com leves desordens neurológicas. 

O projeto desenvolvido utiliza tapetes sensoriais conectados através do Greg Maker — um kit de criatividade que possibilitando a invenção de novos objetos a partir de materiais cotidianos — integrando-os a uma plataforma de desenvolvimento intuitiva que permite a criação e execução de jogos, criados pela TO. O uso de tapete sensorial, e a IDE, é especificamente projetado para estimular pessoas com leves desordens neurológicas, contribuindo para a adoção de soluções de TA efornecendo alternativas OpenSource para outras iniciativas. 

Este artigo tem como objetivo explorar o desenvolvimento e a implementação desse projeto terapêutico adaptativo, delineando seu escopo, objetivos, benefícios esperados e materiais de estudo associados. Ao fazer isso, busca-se destacar o papel transformador da tecnologia desenvolvida na promoção de soluções inclusivas e adaptativas para comunidades diversas.

## 2. Trabalhos relacionados 

Dentre os trabalhos correlatos, destaca-se a pesquisa conduzida por Nazari et al., (2017). O estudo aborda a temática da TA, que compreende dispositivos, técnicas e processos destinados a fornecer assistência ou reabilitação para pessoas com algum tipo de deficiência. O objetivo principal do artigo é apresentar o conceito de TA, suas categorias e discutir a legislação brasileira relacionada à Tecnologia Assistiva como uma política pública de educação inclusiva, com os resultados das análises conduzidas por esse estudo podemos estimar o impacto que o projeto que está sendo conduzido pode gerar.

Adicionalmente, no contexto da Tecnologia Assistiva, vale ressaltar o estudo de Petry, Mafalda e Zangerolami (2018). Esse trabalho fornece insights sobre a aplicação prática da tecnologia assistiva, especificamente um tapete sensorial, para crianças autistas na faixa etária de 0 a 4 anos, destacando a relevância dessas soluções inovadoras na promoção do desenvolvimento infantil.

Dentre os trabalhos citados no nosso projeto, a revisão sistemática dos procedimentos da Terapia Ocupacional na Paralisia Cerebral (ZILLI, F. 2013) tem o objetivo de elucidar os benefícios gerados pela Terapia Ocupacional na reabilitação de pacientes acometidos pela paralisia cerebral, bem como revisar conceitos da patologia; coletar dados e referências utilizadas como intervenção pelos terapeutas ocupacionais, explanando os possíveis benefícios gerados pela inclusão do mesmo na reabilitação desta clientela. Sendo assim, uma pesquisa relevante para o projeto, levando em conta esse artigo, é possível observar a importância do objeto de estudo do projeto.

O estudo de Noschang et al., (2014), fornece uma base teórica fundamental para o objeto de estudo deste projeto, especialmente ao considerar a dificuldade que uma pessoa leiga na área de tecnologia pode enfrentar ao tentar criar uma IDE didática e concisa.

Essas referências são exemplos concretos de trabalhos relacionados que fortalecem a base teórica do projeto proposto, proporcionando uma compreensão mais aprofundada sobre a interseção entre tecnologia assistiva, compiladores e a inovação apresentada neste artigo científico.

## 3. Resultados 

A partir da recapitulação introdutória e associação de análises e estudos, tratando-se de aspectos relacionados ao desenvolvimento de pacientes com paralisia cerebral(PC) por meio de instrumentos tecnológicos, atende-se ao propósito centralizado na elaboração de uma IDE que favoreça o trabalho e a interação entre profissional e paciente. Isso age na transformação da experiência do usuário que tem por finalidade oferecer maior acessibilidade e inclusão destinado a pacientes em processo de reabilitação. Tal como para o guiamento e liberdade de criação de atividades baseadas em jogos, especialmente na viabilidade do processo de interação do profissional de TO no momento de exposição a uma nova tecnologia implementada na rotina. Neste cenário, o TO tendo papel crucial no atendimento de crianças com PC, ao estar integrado no sistema da aplicação desktop, possui autonomia para a formulação de atividades personalizadas que são destinadas para cada indivíduo atendido, auxiliando na mensuração do seu desempenho a partir do comportamento explicitado em reação aos estímulos, estes oriundos do estabelecimento de cada detalhe constituído no momento de criação de determinado jogo pelo TO.

Levando em consideração a visão técnica a respeito do desenvolvimento da aplicação desktop construída em cima da IDE, apresenta-se ferramentas fundamentais para a projeção, permeado pela ênfase no compilador que concebe a conversão do que é escrito em termos de programação para um formato executável, propiciando a capacidade de uso para o usuário através de um sistema operacional, como o Microsoft Windows. Ademais o compilador construído com a linguagem Python, além de ser uma ator na conversão, fazendo a comunicação entre hardware e software, recebe cada entrada do usuário mantendo-se conectado ao Greg Maker, um tipo de aparelho necessário para estabelecer conexão com o tapete o qual a criança com paralisia cerebral tem contato físico para responder aos estímulos proporcionados pelo jogo.

Desse modo, compreende-se o papel crucial que o compilador exerce, porém, para tornar concreto os objetivos de inclusão e acessibilidade que atendam o WCAG, que são diretrizes a respeito dos conteúdos presentes, pois o compilador não atende estes aspectos sozinho. Sendo assim, é necessário características visuais que compõem a aplicação desktop que garantam um sistema intuitivo e de fácil manejo. Para isso é gerado a possibilidade de navegar facilmente e de produzir atividades jogáveis devido a funcionalidades específicas composto pelo chamado Electron, framework usado para criar aplicações desktop, sendo combinado com outras tecnologias e linguagens de programação necessárias para componentes visuais e funcionais como React.js. Nesse sentido, é abordado a programação em blocos low code, estas são instruções que futuramente geram um jogo sem necessitar ter conhecimento de programação, agindo de forma simplificada para o TO cumprir suas sessões.

Em virtude disso, o desenvolvimento e a implementação da aplicação desktop revela um avanço tecnológico na maneira como a terapia é conduzida para pacientes com paralisia cerebral. Ao personalizar atividades, promover interações mais significativas e garantir acessibilidade sanando a necessidade de cada indivíduo, não apenas facilita o trabalho do profissional de TO, mas também abre portas para uma reabilitação mais eficaz e inclusiva. Os resultados obtidos com a aplicação refletem não apenas a eficiência técnica, mas, acima de tudo, através de testes diretos de usabilidade que verificaram as principais funcionalidades que correspondem ao alcance do propósito, fazendo jus em aumentar a qualidade de vida e o progresso dos pacientes atendidos.

## 4. Materiais e Métodos

Desenvolvimento do Compilador
O desenvolvimento do compilador para a Tecnologia Assistiva (TA) baseou-se na linguagem de programação Python. O Python foi escolhido por sua versatilidade e facilidade de integração com outros componentes do projeto. O compilador desempenha um papel crucial na conversão de instruções escritas em termos de programação para um formato executável, permitindo a interação entre hardware e software.

### 4.1.1 Linguagem de Programação
O compilador foi implementado utilizando a linguagem de programação Python. A escolha desta linguagem foi motivada pela sua sintaxe clara e concisa, facilitando a criação de um compilador eficiente e de fácil manutenção.

### 4.1.2 Greg Maker e Conexão com o Tapete Sensorial
O compilador foi projetado para se comunicar eficientemente com o Greg Maker, um kit de criatividade utilizado para conectar o tapete sensorial ao sistema. A integração permite que o compilador receba entradas do tapete sensorial, possibilitando a criação de respostas personalizadas para pacientes com leves desordens neurológicas.

### 4.1.3 Compilação e Formato Executável
O processo de compilação transforma o código-fonte escrito pelos terapeutas ocupacionais em um formato executável compatível com o sistema operacional Microsoft Windows. Essa abordagem visa garantir a acessibilidade e a facilidade de uso para os usuários finais.

### 4.2 Ambiente de Desenvolvimento Integrado (IDE)
A IDE foi desenvolvida com o objetivo de proporcionar um ambiente inovador para a terapia assistiva, permitindo a criação e execução de jogos personalizados pelos terapeutas ocupacionais.

### 4.2.1 Framework Electron
A aplicação desktop foi construída utilizando o framework Electron, que facilita o desenvolvimento de aplicações desktop multiplataforma. Esse framework permite a combinação de tecnologias e linguagens de programação para criar uma interface intuitiva e funcional.

### 4.2.2 React.js e Programação em Blocos
O React.js foi adotado para criar componentes visuais e funcionais da aplicação desktop. A programação em blocos foi implementada para simplificar o processo de criação de atividades jogáveis, permitindo que terapeutas ocupacionais desenvolvam jogos sem a necessidade de conhecimento avançado em programação.

### 4.2.3 Conexão com o Tapete Sensorial
A IDE mantém uma conexão contínua com o tapete sensorial, garantindo que as atividades criadas pelos terapeutas ocupacionais sejam adequadamente vinculadas aos estímulos físicos recebidos pelo tapete sensorial. Isso contribui para a personalização das atividades de acordo com as necessidades individuais dos pacientes.

### 4.3 Testes e Usabilidade
#### 4.3.1 Avaliação de Usabilidade
Para validar a eficácia da aplicação, foram conduzidos testes de usabilidade com terapeutas ocupacionais e pacientes com leves desordens neurológicas. A avaliação de usabilidade incluiu a verificação da facilidade de navegação na aplicação, a compreensão da programação em blocos e a interação eficaz com o tapete sensorial.

#### 4.3.2 Resultados Obtidos
Os resultados dos testes de usabilidade refletiram não apenas a eficiência técnica da aplicação, mas também a capacidade de proporcionar uma experiência de terapia assistiva significativa. Os testes diretos de usabilidade focaram nas principais funcionalidades, incluindo a criação de atividades personalizadas, a interação com o tapete sensorial e a mensuração do desempenho dos pacientes.

### 4.4 Considerações Éticas
#### 4.4.1 Consentimento Informado
Antes de conduzir os testes com pacientes, foi obtido o consentimento informado de todos os participantes, garantindo que estivessem cientes dos objetivos do projeto e dos procedimentos envolvidos.

#### 4.4.2 Privacidade e Dados Sensíveis
Foram implementadas medidas rigorosas para garantir a privacidade e segurança dos dados dos pacientes. Qualquer informação sensível coletada durante os testes foi devidamente protegida e tratada com confidencialidade.


### 4.5 Conclusão da Seção de Materiais e Métodos

A seção de Materiais e Métodos descreveu o processo de desenvolvimento do compilador, da IDE e a realização de testes de usabilidade. Considerações éticas foram cuidadosamente abordadas, garantindo a integridade do estudo. Limitações foram reconhecidas, abrindo caminho para futuras pesquisas. O projeto demonstra inovação ao integrar tecnologia assistiva de forma personalizada para estimular pacientes com leves desordens neurológicas e musculares.

## Referências 

ALVES, A. C. J.; EMMEL, M. L. G.; MATSUKURA, T. S. Formação e prática do terapeuta ocupacional que utiliza tecnologia assistiva como recurso terapêutico. Revista de Terapia Ocupacional da Universidade de São Paulo, [S. l.], v. 23, n. 1, p. 24-33, 2012. DOI: 10.11606/issn.2238-6149.v23i1p24-33. Disponível em: https://www.revistas.usp.br/rto/article/view/46909. Acesso em: 12 dez. 2023.

Bersch, R. Introdução à tecnologia assistiva, 2018. Porto Alegre: CEDI, 21. Disponível em: https://www.assistiva.com.br/Introducao_Tecnologia_Assistiva.pdf. Acesso em 12 dez. 2023.

CALHEIROS, D. dos S.; MENDES, E. G.; LOURENÇO, G. F. Considerações acerca da tecnologia assistiva no cenário educacional brasileiro. Revista Educação Especial, [S. l.], v. 31, n. 60, p. 229–244, 2018. DOI: 10.5902/1984686X18825. Disponível em: https://periodicos.ufsm.br/educacaoespecial/article/view/18825. Acesso em: 12 dez. 2023.

Nazari, A. C. G., Nazari, J., & Gomes, M. A. (2017). Tecnologia Assistiva (TA): do conceito a legislação–discutindo a TA enquanto política de educação inclusiva que contribui na formação e inclusão de pessoas com deficiência. In V CONGRESSO DE PSICOPEDAGOGIA ESCOLAR EI ENCONTRO DE PESQUISADORES EM PSICOPEDAGOGIA ESCOLAR (pp. 1-16). Acesso em 12 dez. 2023.

NOSCHANG, F. L. et al., Portugol Studio: Uma IDE para Iniciantes em Programação, 2014. Disponível em: https://sol.sbc.org.br/index.php/wei/article/view/10954/10824. Acesso em: 8 dez. 2023.

PETRY, J. R.; MAFALDA, C. G. O.; ZANGEROLAMI, Y. E.; WIEBBELLING, G. D. S.; PEREIRA, M. B.; TROST, B. E. TECNOLOGIA ASSISTIVA: TAPETE SENSORIAL PARA CRIANÇAS AUTISTAS. Salão do Conhecimento, [S. l.], v. 4, n. 4, 2018. Disponível em: https://publicacoeseventos.unijui.edu.br/index.php/salaoconhecimento/article/view/10476. Acesso em: 9 dez. 2023.

Zilli, F. (2013). Revisão sistêmica dos procedimentos da terapia ocupacional na paralisia cerebral. Revista Baiana de Terapia Ocupacional (inativa/apenas arquivo), 2(1), 2013. Disponível em: https://www5.bahiana.edu.br/index.php/terapiaocupacional/article/view/182/210. Acesso em: Acesso em: 9 dez. 2023.
