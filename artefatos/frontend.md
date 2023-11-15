# Documentação do FrontEnd

Esta documentação oferece uma visão abrangente sobre a construção de nossa aplicação e os critérios de acessibilidade que foram empregados. Para uma análise mais detalhada ou para interagir com nosso protótipo no Figma, consulte o link abaixo:

Protótipo: [Clique Aqui](https://www.figma.com/file/7a30nYN2ItYvzbWYx63joM/Projeto%3A-Tapete-M%C3%A1gico---AACD?type=design&node-id=49%3A53&mode=design&t=0u77xxMAT5tqiRUy-1)

## WAI e WCAG

**WAI (Web Accessibility Initiative):**
A Iniciativa de Acessibilidade na Web (WAI) é uma iniciativa essencial do World Wide Web Consortium (W3C), concentrada em promover a acessibilidade da web para pessoas com deficiência. A WAI desenvolve diretrizes, padrões e recursos educacionais para orientar designers, desenvolvedores e criadores de conteúdo na construção de interfaces digitais mais acessíveis e inclusivas.

**WCAG (Web Content Accessibility Guidelines):**
As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) representam um conjunto específico de diretrizes criadas pela WAI para garantir que o conteúdo na web seja acessível a uma ampla gama de usuários, incluindo aqueles com deficiência visual, auditiva, motora e cognitiva. As WCAG estabelecem critérios técnicos e diretrizes gerais para tornar sites e aplicativos mais percebíveis, operáveis, compreensíveis e robustos. Essas diretrizes são divididas em três níveis de conformidade: A (o mais básico), AA (níveis intermediários) e AAA (o mais avançado). O cumprimento das WCAG é vital para assegurar uma experiência online inclusiva para todos os usuários.

### Critérios de Contraste WCAG

Os critérios de contraste do WCAG definem requisitos mínimos para garantir que o texto e os elementos da interface do usuário sejam visualmente distinguíveis em relação ao seu fundo. As métricas específicas podem ser encontradas nas Diretrizes de Sucesso 1.4.3 (Contraste Mínimo) e 1.4.6 (Imagens de Texto).

Incluímos exemplos de análises tipográficas e de contraste para duas telas principais, a Tela de Perfil e a Tela de Edição de Jogo, utilizando o plugin [Stark Accessibility Tools](https://www.figma.com/community/plugin/732603254453395948/stark-accessibility-tools). As imagens indicam conformidade com os princípios e métricas de bom contraste e acessibilidade do WCAG.

#### 1. Tela de Perfil

![Tela de Perfil - Análise Tipográfica](img/Profile%20-%20Typo.png)

![Tela de Perfil - Análise de Contraste](img/Profile%20-%20Contraste.png)

#### 2. Tela de Edição de Jogo

![Tela de Edição do Jogo - Análise Tipográfica](img/Edit%20Game%20-%20Typo.png)

![Tela de Edição de Jogo - Análise de Contraste](img/Edit%20Game%20-%20Contraste.png)

**Observação:** Durante a próxima sprint (Sprint 3), visamos melhorar ainda mais a acessibilidade da nossa interface. Atualmente, utilizamos TkInter, mas reconhecemos que há limitações em termos de acessibilidade, como leitores de tela e textos alternativos. Portanto, estamos migrando para o Electron (https://www.electronjs.org/pt/) para aprimorar significativamente a acessibilidade.

Estamos comprometidos em garantir uma experiência inclusiva para todos os usuários e continuaremos a aprimorar nossa aplicação com base nos princípios de acessibilidade. Se houver mais sugestões ou áreas específicas de melhoria que devemos abordar, não hesite em fornecer feedback. Agradecemos o seu interesse e apoio contínuo.

O código do Front-End para a Sprint 2, realizado utilizando TkInter pode ser encontrado em: [src/program](../src/program/).