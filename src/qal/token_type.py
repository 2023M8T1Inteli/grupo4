from enum import Enum, auto


class TokenType(Enum):
    # Palavras-chave
    PROGRAMA = auto()  # programa
    SE = auto()  # se
    ENTAO = auto()  # entao
    SENAO = auto()  # senao
    ENQUANTO = auto()  # enquanto
    FACA = auto()  # faca
    LBLOCK = auto()  # inicio
    RBLOCK = auto()  # fim
    TRUE = auto()  # verdade
    FALSE = auto()  # falso
    COMANDO = auto()  # ler | ler_varios | mostrar | tocar | mostrar_tocar | esperar
    NAO = auto()  # nao
    OU = auto()  # ou
    E = auto()  # e
    NIL = auto()  # nil
    PRINT = auto()  # print
    SEMICOLON = auto()  # ;
    VAR = auto()  # var

    # Tokens de um caractere, exclusivamente
    COLON = auto()  # :
    COMMA = auto()  # ,
    DOT = auto()  # .
    LPAR = auto()  # (
    RPAR = auto()  # )
    PLUS = auto()  # +
    MINUS = auto()  # -
    PERCENT = auto()  # %
    STAR = auto()  # *
    SLASH = auto()  # /
    CARET = auto()  # ^

    # Tokens de um ou dois caracteres
    EQUAL = auto()  # =
    EQUAL_EQUAL = auto()  # ==
    NOT_EQUAL = auto()  # <>
    LESS = auto()  # <
    LESS_EQUAL = auto()  # <=
    GREATER = auto()  # >
    GREATER_EQUAL = auto()  # >=

    # Literais
    IDENTIFIER = auto()  # Regex: [a-zA-Z][a-zA-Z0-9_]*
    INTEGER = auto()  # Regex: [0-9]+
    STRING = auto()  # Regex: "[^"]*"

    EOF = auto()  # Fim de arquivo
