# Resultados: Sintático

## Introdução

Um analisador sintático, também conhecido como "parser", é um componente do compilador que lê o código fonte em linguagem de programação e verifica sua estrutura de acordo com as regras gramaticais da linguagem. Os objetivos do analisador sintático são:

1. Dada uma sequência válida de tokens, produzir uma árvore sintática (AST - Abstract Syntax Tree), que reflete a hierarquia gramatical das instruções e expressões do código; e

2. Dada uma sequência inválida de tokens, detectar quaisquer erros e informar o usuário sobre seus erros.

Superada essa etapa, o compilador poderá entender a organização do programa e procederá com a análise semântica e a geração de código subsequente.

## Implementação

Nossa implementação do analisador sintático foi baseada no livro *Crafting Interpreters* de Robert Nystrom, que pode ser lido na íntegra [neste link](https://craftinginterpreters.com/).

O código-fonte do analisador sintático foi desenvolvido na linguagem Python e pode ser encontrado na pasta `/src/qal` do repositório.

## Resultado dos Testes V1

Para testar a versão inicial ("V1") do analisador sintático, foram usados alguns comandos no REPL da linguagem QAL, que pode ser executado com o comando `python qal.py` na pasta `/src/qal` do repositório. Os resultados dos testes podem ser vistos a seguir.

Optamos por usar o REPL para os testes dessa versão inicial, pois focamos na implementação de expressões. Assim, o REPL nos permite testar o analisador sintático e ver o resultado da avaliação das expressões imediatamente.

### Exemplo 1

#### Input

```
> 1 + 2 * 3
```

#### Output

```
(+ 1 (* 2 3))
7
```

#### Comentários

O analisador sintático foi capaz de reconhecer a expressão `1 + 2 * 3` e gerar a árvore sintática correspondente, com a ordem correta das operações (a multiplicação foi realizada antes da soma). O resultado da avaliação da expressão também foi exibido.

### Exemplo 2

#### Input

```
> 1 - "bolo"
```

#### Output

```
(- 1 bolo)
Erro: Operandos devem ser números.
[linha 1]
None
```

#### Comentários

O analisador sintático foi capaz de reconhecer a expressão `1 - "bolo"` e gerar a árvore sintática correspondente. No entanto, a avaliação da expressão falhou, pois o operador `-` só pode ser usado com operandos numéricos. O analisador sintático detectou o erro e exibiu uma mensagem de erro e a linha em que ocorreu, informando o usuário sobre o problema para que ele seja consertado. O valor `None` foi exibido porque a expressão não pôde ser avaliada.

### Exemplo 3

#### Input

```
> (1 + 2) * 3
```

#### Output

```
(* (group (+ 1 2)) 3)
9
```

#### Comentários

O analisador sintático foi capaz de reconhecer a expressão `(1 + 2) * 3` e gerar a árvore sintática correspondente. A operaçao de soma foi realizada primeiro, pois o operador `()` estabeleceu a precedência da operação de soma. O resultado da avaliação da expressão também foi exibido.

### Exemplo 4

#### Input

```
> 7 / 5
```

#### Output

```
(/ 7 5)
1
```

#### Comentários

O analisador sintático foi capaz de reconhecer a expressão `7 / 5` e gerar a árvore sintática correspondente. O resultado da avaliação da expressão também foi exibido. O resultado da divisão foi truncado, pois a linguagem QAL não suporta números de ponto flutuante (fracionários).

### Exemplo 5

#### Input

```
> "ola " + "mundo"
```

#### Output

```
(+ ola  mundo)
ola mundo
```

#### Comentários

O analisador sintático foi capaz de reconhecer a expressão `"ola " + "mundo"` e gerar a árvore sintática correspondente. O resultado da avaliação da expressão também foi exibido. A operação de soma de strings concatenou as duas strings.
