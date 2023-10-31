# Resultados: Léxico

## Introdução

Um analisador léxico, também conhecido como scanner ou lexer, desempenha um papel fundamental no processo de compilação, atuando como a primeira fase de um compilador. Sua principal função é ler o código-fonte, caractere por caractere, e converter esses caracteres em uma série de tokens.

Tokens são as unidades básicas de significado, como palavras-chave, identificadores, constantes numéricas, operadores e símbolos de pontuação. Este processo envolve a identificação de padrões que correspondem a esses tokens.

Ao transformar o texto do programa em tokens, o analisador léxico simplifica as etapas subsequentes de análise sintática e semântica, permitindo que o compilador entenda e processe eficientemente a estrutura e o significado do código. Essa etapa também ajuda na remoção de espaços em branco, comentários e outros aspectos não essenciais do código-fonte, preparando o terreno para uma análise mais aprofundada.

## Implementação

Nossa implementação do analisador léxico foi baseada no livro *Crafting Interpreters* de Robert Nystrom, que pode ser lido na íntegra [neste link](https://craftinginterpreters.com/).

O código-fonte do analisador léxico foi desenvolvido na linguagem Python e pode ser encontrado na pasta `/src/qal` do repositório.

## Resultado dos Testes

Para testar o analisador léxico, foram usados 5 arquivos, que estão na pasta `/src/qal/sample` do repositório. Os resultados dos testes podem ser vistos a seguir.

Os comandos abaixo devem ser executados no terminal, na pasta `/src/qal`. É necessário ter uma versão atualizada do Python instalada.

### Exemplo 1

#### Input

`python qal.py sample/program1.txt`

```
a = 1
b = 12
c = (12+3)

```

#### Output

```
Token(type=TokenType.ID, lexeme='a', literal=None, line=1)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='1', literal=1, line=1)
Token(type=TokenType.ID, lexeme='b', literal=None, line=2)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='12', literal=12, line=2)
Token(type=TokenType.ID, lexeme='c', literal=None, line=3)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=3)
Token(type=TokenType.LPAR, lexeme='(', literal=None, line=3)
Token(type=TokenType.INTEGER, lexeme='12', literal=12, line=3)
Token(type=TokenType.OPSUM, lexeme='+', literal=None, line=3)
Token(type=TokenType.INTEGER, lexeme='3', literal=3, line=3)
Token(type=TokenType.RPAR, lexeme=')', literal=None, line=3)
Token(type=TokenType.EOF, lexeme='', literal=None, line=4)
```

### Exemplo 2

#### Input

`python qal.py sample/program2.txt`

```
inicio
z = -1234
fim

```

#### Output

```
Token(type=TokenType.LBLOCK, lexeme='inicio', literal=None, line=1)
Token(type=TokenType.ID, lexeme='z', literal=None, line=2)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=2)
Token(type=TokenType.OPSUM, lexeme='-', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='1234', literal=1234, line=2)
Token(type=TokenType.RBLOCK, lexeme='fim', literal=None, line=3)
Token(type=TokenType.EOF, lexeme='', literal=None, line=4)
```

### Exemplo 3

#### Input

`python qal.py sample/program3.txt`

```
teste = 1+2 -3 *
40/5 ^ 6 %

987

```

#### Output

```
Token(type=TokenType.ID, lexeme='teste', literal=None, line=1)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='1', literal=1, line=1)
Token(type=TokenType.OPSUM, lexeme='+', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='2', literal=2, line=1)
Token(type=TokenType.OPSUM, lexeme='-', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='3', literal=3, line=1)
Token(type=TokenType.OPMUL, lexeme='*', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='40', literal=40, line=2)
Token(type=TokenType.OPMUL, lexeme='/', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='5', literal=5, line=2)
Token(type=TokenType.OPPOW, lexeme='^', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='6', literal=6, line=2)
Token(type=TokenType.OPMUL, lexeme='%', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='987', literal=987, line=4)
Token(type=TokenType.EOF, lexeme='', literal=None, line=5)Token(type=TokenType.ID, lexeme='teste', literal=None, line=1)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='1', literal=1, line=1)
Token(type=TokenType.OPSUM, lexeme='+', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='2', literal=2, line=1)
Token(type=TokenType.OPSUM, lexeme='-', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='3', literal=3, line=1)
Token(type=TokenType.OPMUL, lexeme='*', literal=None, line=1)
Token(type=TokenType.INTEGER, lexeme='40', literal=40, line=2)
Token(type=TokenType.OPMUL, lexeme='/', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='5', literal=5, line=2)
Token(type=TokenType.OPPOW, lexeme='^', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='6', literal=6, line=2)
Token(type=TokenType.OPMUL, lexeme='%', literal=None, line=2)
Token(type=TokenType.INTEGER, lexeme='987', literal=987, line=4)
Token(type=TokenType.EOF, lexeme='', literal=None, line=5)
```

### Exemplo 4

#### Input

`python qal.py sample/program4.txt`

```
se abc <> xyz entao
inicio
    x=(verdade)
    y= ler ( )
fim

```

#### Output

```
Token(type=TokenType.SE, lexeme='se', literal=None, line=1)
Token(type=TokenType.ID, lexeme='abc', literal=None, line=1)
Token(type=TokenType.OPREL, lexeme='<>', literal=None, line=1)
Token(type=TokenType.ID, lexeme='xyz', literal=None, line=1)
Token(type=TokenType.ENTAO, lexeme='entao', literal=None, line=1)
Token(type=TokenType.LBLOCK, lexeme='inicio', literal=None, line=2)
Token(type=TokenType.ID, lexeme='x', literal=None, line=3)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=3)
Token(type=TokenType.LPAR, lexeme='(', literal=None, line=3)
Token(type=TokenType.BOOLEAN, lexeme='verdade', literal=None, line=3)
Token(type=TokenType.RPAR, lexeme=')', literal=None, line=3)
Token(type=TokenType.ID, lexeme='y', literal=None, line=4)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=4)
Token(type=TokenType.COMANDO, lexeme='ler', literal=None, line=4)
Token(type=TokenType.LPAR, lexeme='(', literal=None, line=4)
Token(type=TokenType.RPAR, lexeme=')', literal=None, line=4)
Token(type=TokenType.RBLOCK, lexeme='fim', literal=None, line=5)
Token(type=TokenType.EOF, lexeme='', literal=None, line=6)
```

### Exemplo 5

#### Input

`python qal.py sample/program5.txt`

```
programa :
inicio
    programas = verdade
    verdades = 0
    se entao inicio
      ses = verdades
      programas = ler()
      x = ler_varios(11, 4, 1)
    fim


fim.

```

#### Output

```
Token(type=TokenType.PROGRAMA, lexeme='programa', literal=None, line=1)
Token(type=TokenType.COLON, lexeme=':', literal=None, line=1)
Token(type=TokenType.LBLOCK, lexeme='inicio', literal=None, line=2)
Token(type=TokenType.ID, lexeme='programas', literal=None, line=3)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=3)
Token(type=TokenType.BOOLEAN, lexeme='verdade', literal=None, line=3)
Token(type=TokenType.ID, lexeme='verdades', literal=None, line=4)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=4)
Token(type=TokenType.INTEGER, lexeme='0', literal=0, line=4)
Token(type=TokenType.SE, lexeme='se', literal=None, line=5)
Token(type=TokenType.ENTAO, lexeme='entao', literal=None, line=5)
Token(type=TokenType.LBLOCK, lexeme='inicio', literal=None, line=5)
Token(type=TokenType.ID, lexeme='ses', literal=None, line=6)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=6)
Token(type=TokenType.ID, lexeme='verdades', literal=None, line=6)
Token(type=TokenType.ID, lexeme='programas', literal=None, line=7)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=7)
Token(type=TokenType.COMANDO, lexeme='ler', literal=None, line=7)
Token(type=TokenType.LPAR, lexeme='(', literal=None, line=7)
Token(type=TokenType.RPAR, lexeme=')', literal=None, line=7)
Token(type=TokenType.ID, lexeme='x', literal=None, line=8)
Token(type=TokenType.ASSIGN, lexeme='=', literal=None, line=8)
Token(type=TokenType.COMANDO, lexeme='ler_varios', literal=None, line=8)
Token(type=TokenType.LPAR, lexeme='(', literal=None, line=8)
Token(type=TokenType.INTEGER, lexeme='11', literal=11, line=8)
Token(type=TokenType.COMMA, lexeme=',', literal=None, line=8)
Token(type=TokenType.INTEGER, lexeme='4', literal=4, line=8)
Token(type=TokenType.COMMA, lexeme=',', literal=None, line=8)
Token(type=TokenType.INTEGER, lexeme='1', literal=1, line=8)
Token(type=TokenType.RPAR, lexeme=')', literal=None, line=8)
Token(type=TokenType.RBLOCK, lexeme='fim', literal=None, line=9)
Token(type=TokenType.RBLOCK, lexeme='fim', literal=None, line=12)
Token(type=TokenType.DOT, lexeme='.', literal=None, line=12)
Token(type=TokenType.EOF, lexeme='', literal=None, line=13)
```

## Conclusão

Todos os resultados dos testes foram satisfatórios, e o analisador léxico foi capaz de identificar corretamente os tokens em cada um dos arquivos de teste, como era esperado.
