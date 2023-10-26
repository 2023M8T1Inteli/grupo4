from enum import Enum, auto


class TokenType(Enum):
    # Palavras-chave
    PROGRAMA = auto()
    SE = auto()
    ENTAO = auto()
    SENAO = auto()
    ENQUANTO = auto()
    FACA = auto()
    NAO = auto()
    LBLOCK = auto()
    RBLOCK = auto()
    BOOLEAN = auto()
    COMANDO = auto()

    # Tokens de um caractere, exclusivamente
    COLON = auto()
    COMMA = auto()
    DOT = auto()
    DQUOTE = auto()
    LPAR = auto()
    RPAR = auto()
    OPMUL = auto()
    OPPOW = auto()

    # Tokens de um ou dois caracteres
    ASSIGN = auto()
    OPSUM = auto()
    OPREL = auto()

    # Literais
    ID = auto()
    INTEGER = auto()
    STRING = auto()

    EOF = auto()

