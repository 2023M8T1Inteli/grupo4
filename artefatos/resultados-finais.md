# Implementação final da linguagem

## Introdução

Este documento apresenta a implementação final da linguagem QAL.

A linguagem possui os seguintes recursos:

- Tipagem dinâmica
- Suporte a primitivos de números inteiros, strings e booleanos (verdade, falso)
- Variáveis globais e locais
- Blocos de código (inicio, fim)
- Operações aritméticas (adição, subtração, multiplicação, divisão inteira, exponenciação)
- Operações lógicas (e, ou, não)
- Operações de comparação (igualdade, desigualdade, maior que, menor que, maior ou igual, menor ou igual)
- Condicionais (se "condicao" entao "bloco de código" senão "bloco de código")
- Laços (enquanto "condicao" faça "bloco de código")
- Funções predefinidas (ler, ler_varios, mostrar, mostrar_tocar, esperar, tocar)

## Resultado dos Testes

Para testar o analisador semântico e a geração de código, foram usados 5 arquivos, que estão na pasta `/src/qal/sample` do repositório. Os resultados dos testes podem ser vistos a seguir.

Os comandos abaixo devem ser executados no terminal, na pasta `/src/qal`. É necessário ter uma versão atualizada do Python instalada.

## Observação importante - adaptações dos códigos de teste

Os códigos de teste fornecidos originalmente foram adaptados para que o analisador semântico funcionasse corretamente. As alterações foram:

1. Remoção do nome do programa no início do arquivo (ex: programa "geracao_codigo2":)
- Justificativa: o analisador semântico não precisa dessa informação, dado que o nome do arquivo já consiste em seu identificador (ex: "geracao_codigo2.txt"). Optamos por não priorizar essa funcionalidade, devido a sua redundância.

2. Inserção do operador ponto e vírgula (";") como separador de "statements"
- Justificativa: usar apenas espaço no final de cada linha para separar os "statements" exigiria uma interpretação mais complexa do código, pois há situações em que uma nova linha separa um statement de outro e outras em que não há essa separação. Para evitar essa complexidade, optamos por usar ponto e vírgula (;) como separador entre um e outro statement.

3. Inserção de "var" como palavra-chave para declaração de variáveis
- Justificativa: não usar a palavra-chave "var" para declarar variáveis torna bastante complexo determinar se uma variável está sobrescrevendo outra em nível global ou se está na verdade sendo declarada localmente. Para evitar essa complexidade, optamos por usar a palavra-chave "var" para declarar variáveis. Isso também torna o código mais legível (um caso semelhante é o uso das palavras chave "global" e "nonlocal" na declaração de variáveis em Python para contornar esse mesmo problema).

### Exemplo 1

#### Input

`python qal.py sample/exemplo_semantico1.txt`

```
var valor = ler();
se valor >= 10 entao
inicio
  x=x+1;
  mostrar(x);
fim
```

#### Output

Se o valor providenciado pelo input da função ler() for maior ou igual a 10, o programa apresenta um erro.
Caso contrário, o programa roda sem qualquer erro.
```
Erro: Variável não definida 'x'.
[linha 4]
```

#### Interpretação

O erro ocorre porque a variável `x` não foi declarada antes de ser usada. O analisador semântico não foi capaz de identificar a variável `x` no lado direito da expressão `x+1`, pois ela não foi declarada anteriormente.

### Exemplo 2

#### Input

`python qal.py sample/exemplo_semantico2.txt`

```
var x=1;
var y = x * 2 + (z / 5);
var z=2;
```

#### Output

```
Erro: Variável não definida 'z'.
[linha 2]
```

#### Interpretação

O erro ocorre porque a variável `z` não foi declarada antes de ser usada. O analisador semântico não foi capaz de identificar a variável `z` no lado direito da expressão `z/5`, pois ela não foi declarada anteriormente.

### Exemplo 3

#### Input

`python qal.py sample/exemplo_semantico3.txt`

```
var i = 0;
enquanto i <= 10 faca
inicio

fim
```

#### Output

```
[linha 6] Erro  no final: Um bloco vazio não é permitido.
```

#### Interpretação

Fornecemos uma mensagem de erro mais adequada para o caso de um bloco vazio, pois originalmente o analisador semântico não fornecia uma mensagem de erro especíca para esse caso e o programa entrava em um loop infinito.

### Exemplo 4

#### Input

`python qal.py sample/geracao_codigo1.txt`

```
var a = 5;
var b = 9;
var c = (3+a)*b/2;
esperar(c);
tocar(a%4);
```

#### Output

```
esperar() t =  36
tocar() cod =  1
```

#### Interpretação

As duas funcoes (`esperar()` e `tocar()`) foram chamadas corretamente, com os parâmetros adequados.

### Exemplo 5

#### Input

`python qal.py sample/program5.txt`

```
var a = ler();
var b = ler_varios(4, 3, 1);
se b e (a <> 5) entao
inicio
    mostrar(2);
    var j = 10;
    enquanto j >= 1 faca
    inicio
        mostrar_tocar((j*2) % 5, j);
        j=j-1;
    fim
fim
var x=1+2^3^5;
esperar(x % 20);
```

#### Output

```
10
4
3
1
mostrar() cod =  2
mostrar_tocar() cod_img =  0 cod_aud =  10
mostrar_tocar() cod_img =  3 cod_aud =  9
mostrar_tocar() cod_img =  1 cod_aud =  8
mostrar_tocar() cod_img =  4 cod_aud =  7
mostrar_tocar() cod_img =  2 cod_aud =  6
mostrar_tocar() cod_img =  0 cod_aud =  5
mostrar_tocar() cod_img =  3 cod_aud =  4
mostrar_tocar() cod_img =  1 cod_aud =  3
mostrar_tocar() cod_img =  4 cod_aud =  2
mostrar_tocar() cod_img =  2 cod_aud =  1
esperar() t =  9
```

#### Interpretação

O programa foi executado corretamente, com as funções sendo chamadas com os parâmetros adequados.

## Conclusão

Todos os resultados dos testes foram satisfatórios, e o compilador foi capaz de realizar a análise léxica, sintática e semântica, bem como gerar os códigos necessários e imprimir o resultado no terminal para cada um dos arquivos de teste, como era esperado.
