# Resultados: Semântico e Geração de Código

## Introdução

A análise semântica é um processo crítico em um compilador, onde o significado do código-fonte é examinado e validado. Após a análise sintática, que constrói a estrutura gramatical do código, a análise semântica entra em ação para garantir que os componentes do código façam sentido no contexto do idioma de programação. Isso inclui verificar tipos de dados, garantir que as variáveis sejam usadas corretamente, e assegurar que as operações realizadas sejam semanticamente válidas. Por exemplo, ela pode detectar erros como a tentativa de somar uma string com um número, ou chamar uma função com o número errado de argumentos. Este processo ajuda a prevenir erros lógicos e garante que o código seja não apenas gramaticalmente correto, mas também logicamente coerente.

Já a geração de código em um compilador é a etapa final do processo de compilação, onde o código-fonte de alto nível é traduzido em código de máquina ou código intermediário que pode ser executado por um computador. Esta etapa envolve a conversão de estruturas de dados e abstrações de alto nível do código-fonte em instruções específicas que a máquina pode entender e executar. A geração de código leva em conta a arquitetura do hardware de destino e otimiza o código para eficiência em termos de espaço e tempo de execução. O resultado é um conjunto de instruções binárias ou código intermediário que mantém a lógica e a funcionalidade do programa original, pronto para ser executado na máquina ou ambiente alvo.

## Implementação

Nossa implementação do analisador semântico e da geração de código foi baseada no livro *Crafting Interpreters* de Robert Nystrom, que pode ser lido na íntegra [neste link](https://craftinginterpreters.com/).

O código-fonte foi desenvolvido na linguagem Python e pode ser encontrado na pasta `/src/qal` do repositório.

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
- Justificativa: não usar a palavra-chave "var" para declarar variáveis torna bastante complexo determinar se uma variável está sobrescrevendo outra em nível global ou se está sendo declarada localmente. Para evitar essa complexidade, optamos por usar a palavra-chave "var" para declarar variáveis. Isso também torna o código mais legível (um caso semelhante é o uso das palavras chave "global" e "nonlocal" na declaração de variáveis em Python para contornar esse mesmo problema).

4. Simplificação das funções e laços
- Justificativa: para otimizar o output no terminal, optamos por simplificar algumas funções e laços. Isso facilita os testes e a visualização dos resultados.

### Exemplo 1

#### Input

`python qal.py sample/program1.txt`

```
var x=x+1;
imprime x;
```

#### Output

```
Erro: Variável não definida 'x'.
[linha 1]
```

#### Interpretação

O erro ocorre porque a variável `x` não foi declarada antes de ser usada. O analisador semântico não foi capaz de identificar a variável `x` no lado direito da expressão `x+1`, pois ela não foi declarada anteriormente.

### Exemplo 2

#### Input

`python qal.py sample/program2.txt`

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

`python qal.py sample/program3.txt`

```
var i=0;
enquanto i <= 10 faca
inicio
fim
```

#### Output

```
[linha 2] Erro  no 'enquanto': Era esperada uma expressão. (Loop Infinito)
```

#### Interpretação

O programa entra em um loop While (enquanto) infinito, porque a variável `i` nunca é incrementada.

### Exemplo 4

#### Input

`python qal.py sample/program4.txt`

```
var a=5;
var b=9;
var c = (3+a)*b/2;
imprime c;
imprime a%4;
```

#### Output

```
36
1
```

#### Interpretação

O programa imprime o valor da variável `c` e o resto da divisão de `a` por 4.

### Exemplo 5

#### Input

`python qal.py sample/program5.txt`

```
var a;
var b = "4, 3, 1";
imprime a;
imprime b;

imprime 2;
var j = 10;
var x = 1+2^3^5;
imprime x % 20;
```

#### Output

```
nil
4, 3, 1
2
9
```

#### Interpretação

O programa imprime o valor da variável `a` (`nil`, pois não foi inicializada), o valor da variável `b`, o número 2, o valor da variável `x` e o resto da divisão de `x` por 20.

## Conclusão

Todos os resultados dos testes foram satisfatórios, e o analisador semântico foi capaz de identificar problemas corretamente, gerar os códigos necessários e imprimir o resultado no terminal para cada um dos arquivos de teste, como era esperado.
