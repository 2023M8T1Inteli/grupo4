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

Levando em conta o estudo citado, 'Portugol Studio: Uma IDE para Iniciantes em Programação' (NOSCHANG, L. F. et al. 2014) é onde pode ser encontrada uma base teórica relacionada com o objeto de estudo do projeto. Considerando a dificuldade de uma pessoa leiga na área de tecnologia em criar uma IDE didática e concisa, é fundamental.


Essas referências são exemplos concretos de trabalhos relacionados que fortalecem a base teórica do projeto proposto, proporcionando uma compreensão mais aprofundada sobre a interseção entre tecnologia assistiva, compiladores e a inovação apresentada neste artigo científico.

## 3. Resultados 

A partir da recapitulação introdutória e associação de análises e estudos, tratando-se de aspectos relacionados ao desenvolvimento de pacientes com paralisia cerebral(PC) por meio de instrumentos tecnológicos, atende-se ao propósito centralizado na elaboração de uma IDE que favoreça o trabalho e a interação entre profissional e paciente. Isso age na transformação da experiência do usuário que tem por finalidade oferecer maior acessibilidade e inclusão destinado a pacientes em processo de reabilitação. Tal como para o guiamento e liberdade de criação de atividades baseadas em jogos, especialmente na viabilidade do processo de interação do profissional de TO no momento de exposição a uma nova tecnologia implementada na rotina. Neste cenário, o TO tendo papel crucial no atendimento de crianças com PC, ao estar integrado no sistema da aplicação desktop, possui autonomia para a formulação de atividades personalizadas que são destinadas para cada indivíduo atendido, auxiliando na mensuração do seu desempenho a partir do comportamento explicitado em reação aos estímulos, estes oriundos do estabelecimento de cada detalhe constituído no momento de criação de determinado jogo pelo TO.

Levando em consideração a visão técnica a respeito do desenvolvimento da aplicação desktop construída em cima da IDE, apresenta-se ferramentas fundamentais para a projeção, permeado pela ênfase no compilador que concebe a conversão do que é escrito em termos de programação para um formato executável, propiciando a capacidade de uso para o usuário através de um sistema operacional, como o Microsoft Windows. Ademais o compilador construído com a linguagem Python, além de ser uma ator na conversão, fazendo a comunicação entre hardware e software, recebe cada entrada do usuário mantendo-se conectado ao Greg Maker, um tipo de aparelho necessário para estabelecer conexão com o tapete o qual a criança com paralisia cerebral tem contato físico para responder aos estímulos proporcionados pelo jogo.

Desse modo, compreende-se o papel crucial que o compilador exerce, porém, para tornar concreto os objetivos de inclusão e acessibilidade que atendam o WCAG, que são diretrizes a respeito dos conteúdos presentes, pois o compilador não atende estes aspectos sozinho. Sendo assim, é necessário características visuais que compõem a aplicação desktop que garantam um sistema intuitivo e de fácil manejo. Para isso é gerado a possibilidade de navegar facilmente e de produzir atividades jogáveis devido a funcionalidades específicas composto pelo chamado Electron, framework usado para criar aplicações desktop, sendo combinado com outras tecnologias e linguagens de programação necessárias para componentes visuais e funcionais como React.js. Nesse sentido, é abordado a programação em blocos low code, estas são instruções que futuramente geram um jogo sem necessitar ter conhecimento de programação, agindo de forma simplificada para o TO cumprir suas sessões.

Em virtude disso, o desenvolvimento e a implementação da aplicação desktop revela um avanço tecnológico na maneira como a terapia é conduzida para pacientes com paralisia cerebral. Ao personalizar atividades, promover interações mais significativas e garantir acessibilidade sanando a necessidade de cada indivíduo, não apenas facilita o trabalho do profissional de TO, mas também abre portas para uma reabilitação mais eficaz e inclusiva. Os resultados obtidos com a aplicação refletem não apenas a eficiência técnica, mas, acima de tudo, através de testes diretos de usabilidade que verificaram as principais funcionalidades que correspondem ao alcance do propósito, fazendo jus em aumentar a qualidade de vida e o progresso dos pacientes atendidos.

## Referências 
Petry, J. R., Mafalda, C. G. O., Zangerolami, Y. E., Wiebbelling, G. D. S., Pereira, M. B., & Trost, B. E. (2018). TECNOLOGIA ASSISTIVA: TAPETE SENSORIAL PARA CRIANÇAS AUTISTAS. Salão do Conhecimento.

Alves, A. C. J., Emmel, M. L. G., & Matsukura, T. S. (2012). Formação e prática do terapeuta ocupacional que utiliza tecnologia assistiva como recurso terapêutico. Revista de Terapia Ocupacional da Universidade de São Paulo, 23(1), 24-33.

dos Santos Calheiros, D., Mendes, E. G., & Lourenço, G. F. (2018). Considerações acerca da tecnologia assistiva no cenário educacional brasileiro. Revista Educação Especial, 31(60), 229-244.

Zilli, F. (2013). Revisão sistêmica dos procedimentos da terapia ocupacional na paralisia cerebral. Revista Baiana de Terapia Ocupacional (inativa/apenas arquivo), 2(1).

Bersch, R. (2008). Introdução à tecnologia assistiva. Porto Alegre: CEDI, 21.

Nazari, A. C. G., Nazari, J., & Gomes, M. A. (2017). Tecnologia Assistiva (TA): do conceito a legislação–discutindo a TA enquanto política de educação inclusiva que contribui na formação e inclusão de pessoas com deficiência. In V CONGRESSO DE PSICOPEDAGOGIA ESCOLAR EI ENCONTRO DE PESQUISADORES EM PSICOPEDAGOGIA ESCOLAR (pp. 1-16).

