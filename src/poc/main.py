# Array Lexemas
lexemas = []
linhas = []
result = []
palavra_atual = ''

i = 1
# abrir codigo
with open('testPrograms/program.txt', 'r', encoding='utf-8') as arquivo:
    for linha in arquivo:
        for letra in linha:
            if letra in 'abcdefghijklmnopqrstuvwxyz':
                palavra_atual += letra
            else:
                if palavra_atual == '':
                    lexemas.append(letra)
                else:
                    lexemas.append(palavra_atual)
                    palavra_atual = ''
                    if letra != '':
                        lexemas.append(letra)
                linhas.append(i)
        i += 1

# removendo espaços em branco
item = len(lexemas) - 1
while item >= 0:
    if lexemas[item] == ' ':
        del lexemas[item]
    item -= 1


item = len(lexemas) - 1
i = 0
while i < item:
    token = ''
    if lexemas[i] == 'senao':
        token = 'SENAO'
    elif lexemas[i] == 'programa':
        token = 'PROGRAMA'
    elif lexemas[i] == 'se':
        token = 'SE'
    elif lexemas[i] == 'entao':
        token = 'ENTAO'
    elif lexemas[i] == 'enquanto':
        token =  'ENQUANTO'
    elif lexemas[i] == 'faca':
        token =  'FACA'
    elif lexemas[i] == 'nao':
        token =  'NAO'
    elif lexemas[i] == 'inicio':
        token = 'LBLOCK'
    elif lexemas[i] == 'fim':
        token = 'RBLOCK'
    elif lexemas[i] == 'verdade' or lexemas[i] == 'falso':
        token = 'BOOLEAN'
    elif lexemas[i] == 'ler' or lexemas[i] == 'ler_varios' or lexemas[i] == 'mostrar' or lexemas[i] == 'tocar' or lexemas[i] == 'mostrar_tocar' or lexemas[i] == 'total':
        token = 'ENQUANTO'
    elif lexemas[i] == ':':
        token = 'COLON'
    elif lexemas[i] == ',':
        token = 'COMMA'
    elif lexemas[i] == '==' or lexemas[i] == '<>' or lexemas[i] == '<' or lexemas[i] == '<=' or lexemas[i] == '>' or lexemas[i] == '=>':
        token = 'OPREL'
    elif lexemas[i] == '+' or lexemas[i] == '-' or lexemas[i] == 'ou':
        token = 'OPSUM'
    elif lexemas[i] == '*' or lexemas[i] == '/' or lexemas[i] == '%' or lexemas[i] == 'e':
        token = 'OPMUL'
    elif lexemas[i] == '^':
        token = 'OPPOW'
    elif lexemas[i] in '0123456789':
        token = 'INTEGER'
    elif lexemas[i] == '“' or lexemas[i] == '”':
        token = 'DQUOTE'
    elif lexemas[i] == '.':
        token = 'DOT'
    elif lexemas[i] == '=':
        token = 'ASSIGN'
    elif lexemas[i] == '(':
        token = 'LPAR'
    elif lexemas[i] == '':
        token = 'RPAR'
    elif lexemas[i] == '\n':
        token = '\n'
    else:
        token = 'ID'
    result.insert(i, "Token('" + token + "'," +  " '" + lexemas[i] + "'," + str(linhas[i]) +")")
    i += 1


#print(lexemas)
print(result)