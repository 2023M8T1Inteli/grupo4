# Tecnologia Assistiva: Desenvolvimento de um Compilador e um Ambiente de Desenvolvimento Integrado com Tapete Sensorial para Estimulação de Pessoas com Leves Desordens Neurológicas

André Lessa, Gabriel Carneiro, Leandro Custódio, Sarah Ribeiro, Stefano Butori, Vinicius Santos e Yasmin Vitória

**Resumo** - 

Este artigo aborda o desenvolvimento de um compilador e um Ambiente de Desenvolvimento Integrado (IDE) dedicados à Tecnologia Assistiva (TA), com foco em estimular pessoas que enfrentam leves desordens neurológicas, especialmente aquelas atendidas pela Associação de Assistência à Criança Deficiente (AACD). A AACD presta assistência a uma variedade de condições, como paralisia cerebral, amputações, poliomielite, doenças neuromusculares, etc. Caracterizadas por distúrbios no controle motor, postura e possíveis complicações sensoriais, cognitivas e de comunicação. O objetivo deste projeto é fornecer um ambiente inovador para terapia assistiva, utilizando um tapete sensorial conectado ao Greg Maker. Este recurso visa proporcionar um affordance adequado para respostas de pacientes com leves desordens neurológicas, melhorando desempenhos ocupacionais e facilitando a realização de Atividades de Vida Diária (AVDs).

**Palavras-chave** - Tecnologia Assistiva; Compiladores; IDE; Tapete Sensorial.

## 1. Introdução 

A Terapia Ocupacional desempenha um papel crucial na reabilitação de pacientes com paralisia cerebral, conforme descrito na revisão sistêmica dos procedimentos da Terapia Ocupacional na Paralisia Cerebral (ZILLI, F. 2013). Esta terapia foca no desenvolvimento e melhoria da funcionalidade e independência do paciente em atividades diárias. Ela proporciona benefícios significativos, como a melhoria da coordenação motora, o aumento da independência, a promoção da inclusão social e a melhoria da qualidade de vida. Os terapeutas ocupacionais utilizam uma variedade de técnicas e estratégias para ajudar os pacientes a superar limitações físicas e cognitivas, dentre elas a tecnologia assistiva.

Alves, Emmel e Matsukura (2012) discutem a evolução da terapia ocupacional no Brasil, destacando o atraso na adoção de tecnologias assistivas em comparação com países da América do Norte e Europa. Esse atraso é atribuído a fatores como escassez de recursos financeiros, limitações no financiamento público e privado, e falta de conhecimento técnico entre profissionais de reabilitação. O artigo apresenta uma colaboração inovadora entre a AACD e o Inteli, visando superar essas barreiras que fazem com que o Brasil não estaja na vanguarda da tecnologia assistiva. (CALHEIROS, D. DOS S.; MENDES, E. G.; LOURENÇO, G. F. 2018)

O projeto desenvolvido utiliza tapetes sensoriais conectados através do Greg Maker, um kit de criatividade que permite a invenção de novos objetos a partir de materiais cotidianos, integrando-os a um Ambiente de Desenvolvimento Integrado (IDE) — ferramenta de software que fornece recursos abrangentes para programadores para desenvolvimento de software. Ela integra várias funcionalidades comuns ao desenvolvimento de software, como editor de texto para escrever código, compilador ou interpretador para executar o programa, e depurador para testar e corrigir erros (NOSCHANG, L. F. et al. 2014). O uso de tapete sensorial, e a IDE, é especificamente projetado para estimular pessoas com leves desordens neurológicas, contribuindo para a adoção de soluções de TA no Brasil e fornecendo alternativas OpenSource para outras iniciativas. 

O tapete sensorial é uma ferramenta projetada para auxiliar no desenvolvimento de crianças com desordens neurológicas, proporcionando estímulos físicos e cognitivos. O tapete é composto por módulos com diferentes texturas e estímulos sensoriais, como objetos para pegar e sons, promovendo o desenvolvimento motor e cognitivo. Esses módulos são configuráveis, permitindo ajustes de acordo com as necessidades e o progresso de cada criança. O tapete sensorial oferece uma forma lúdica e interativa de aprendizagem, estimulando vários sentidos e ajudando no autoconhecimento e desenvolvimento de habilidades das crianças. (Petry, J. R., Mafalda, C. G. O., Zangerolami, Y. E., Wiebbelling, G. D. S., Pereira, M. B., & Trost, B. E. 2018)

Este artigo tem como objetivo explorar o desenvolvimento e a implementação desse projeto terapêutico adaptativo, delineando seu escopo, objetivos, benefícios esperados e materiais de estudo associados. Ao fazer isso, busca-se destacar o papel transformador da tecnologia desenvolvida na promoção de soluções inclusivas e adaptativas para comunidades diversas.

## 2. Trabalhos relacionados 

Dentre os trabalhos correlatos, destaca-se a pesquisa conduzida por Ana Clara Gomes Nazari (2017) intitulada "TECNOLOGIA ASSISTIVA (TA): do conceito a legislação - discutindo a TA enquanto Política de Educação Inclusiva que contribui na formação e inclusão de pessoas com deficiência". O estudo aborda a temática da "Tecnologia Assistiva" (TA), que compreende dispositivos, técnicas e processos destinados a fornecer assistência ou reabilitação para pessoas com algum tipo de deficiência. O objetivo principal do artigo é apresentar o conceito de TA, suas categorias e discutir a legislação brasileira relacionada à Tecnologia Assistiva como uma política pública de educação inclusiva, com os resultados das análises conduzidas por esse estudo podemos estimar o impacto que o projeto que está sendo conduzido pode gerar.



Adicionalmente, no contexto da Tecnologia Assistiva, vale ressaltar o estudo de Yasmim Emília Zangerolami. (2018), "Tecnologia Assistiva: Tapete Sensorial para Crianças Autistas", apresentado no XXVI Seminário de Iniciação Científica da UNIJUÍ. Esse trabalho fornece insights sobre a aplicação prática da tecnologia assistiva, especificamente um tapete sensorial, para crianças autistas na faixa etária de 0 a 4 anos, destacando a relevância dessas soluções inovadoras na promoção do desenvolvimento infantil.

Essas referências são exemplos concretos de trabalhos relacionados que fortalecem a base teórica do projeto proposto, proporcionando uma compreensão mais aprofundada sobre a interseção entre tecnologia assistiva, compiladores e a inovação apresentada neste artigo científico.

## 3. Resultados 

## Referências 
Petry, J. R., Mafalda, C. G. O., Zangerolami, Y. E., Wiebbelling, G. D. S., Pereira, M. B., & Trost, B. E. (2018). Tecnologia Assistiva: Tapete Sensorial para Crianças Autistas. XXVI Seminário de Iniciação Científica. UNIJUÍ.

ALVES, A. C. J.; EMMEL, M. L. G.; MATSUKURA, T. S. Formação e prática do terapeuta ocupacional que utiliza tecnologia assistiva como recurso terapêutico. Revista de Terapia Ocupacional da Universidade de São Paulo, São Paulo, v. 23, n. 1, p. 24-33, jan./abr. 2012.

CALHEIROS, D. DOS S.; MENDES, E. G.; LOURENÇO, G. F. Considerações acerca da tecnologia assistiva no cenário educacional brasileiro. Revista Educação Especial, v. 31, n. 60, p. 229, 11 mar. 2018.

‌Schneider, C. S., Passerino, L. M., & Oliveira, R. F. (2005). Compilador Educativo VERTO: ambiente para aprendizagem de compiladores. Novas Tecnologias na Educação CINTED-UFRGS, V. 3 Nº 2, Novembro, 1-9.

ZILLI, F. REVISÃO SISTÊMICA DOS PROCEDIMENTOS DA TERAPIA OCUPACIONAL NA PARALISIA CEREBRAL. Revista Baiana de Terapia Ocupacional (inativa / apenas arquivo), v. 2, n. 1, 1 nov. 2013.

NAZARI, Ana Clara Gomes; NAZARI, Juliano; GOMES, Maria Aldair. Tecnologia Assistiva (TA): do conceito à legislação - discutindo a TA enquanto Política de Educação Inclusiva que contribui na formação e inclusão de pessoas com deficiência.Disponível em:https://eventos.ufu.br/sites/eventos.ufu.br/files/documentos/tecnologia_assistiva_ta_-_do_conceito_a_legislacao.pdf

NOSCHANG, L. F. et al. Portugol Studio: Uma IDE para Iniciantes em Programação. Disponível em: <https://sol.sbc.org.br/index.php/wei/article/view/10954>. Acesso em: 11 dez. 2023.

