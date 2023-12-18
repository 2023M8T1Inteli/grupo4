from typing import List
from lexical_token import LexicalToken
from token_type import TokenType


class Scanner:
    def __init__(self, source: str, error_function):
        self.source = source
        self.error = error_function
        self._tokens: List[LexicalToken] = []
        self.start = 0  # Posição inicial do lexema sendo analisado
        self.current = 0  # Posição do caractere sendo analisado
        self.line = 1  # Linha atual

    keywords = {
        "programa": TokenType.PROGRAMA,
        "se": TokenType.SE,
        "entao": TokenType.ENTAO,
        "senao": TokenType.SENAO,
        "enquanto": TokenType.ENQUANTO,
        "faca": TokenType.FACA,
        "nao": TokenType.NAO,
        "inicio": TokenType.LBLOCK,
        "fim": TokenType.RBLOCK,
        "verdade": TokenType.TRUE,
        "falso": TokenType.FALSE,
        "ler": TokenType.COMANDO,
        "ler_varios": TokenType.COMANDO,
        "mostrar": TokenType.COMANDO,
        "tocar": TokenType.COMANDO,
        "mostrar_tocar": TokenType.COMANDO,
        "esperar": TokenType.COMANDO,
        "ou": TokenType.OU,
        "e": TokenType.E,
        "nil": TokenType.NIL,
        "imprime": TokenType.PRINT,
        "var": TokenType.VAR,
    }

    def scan_tokens(self) -> List[LexicalToken]:
        while not self.is_at_end():
            self.start = self.current
            self.scan_token()

        self._tokens.append(LexicalToken(TokenType.EOF, "", None, self.line))
        return self._tokens

    def scan_token(self):
        c = self.advance()
        if c == ":":
            self.add_token(TokenType.COLON)
        elif c == ";":
            self.add_token(TokenType.SEMICOLON)
        elif c == ",":
            self.add_token(TokenType.COMMA)
        elif c == ".":
            self.add_token(TokenType.DOT)
        elif c == "(":
            self.add_token(TokenType.LPAR)
        elif c == ")":
            self.add_token(TokenType.RPAR)
        elif c == "+":
            self.add_token(TokenType.PLUS)
        elif c == "-":
            self.add_token(TokenType.MINUS)
        elif c == "*":
            self.add_token(TokenType.STAR)
        elif c == "%":
            self.add_token(TokenType.PERCENT)
        elif c == "^":
            self.add_token(TokenType.CARET)
        elif c == "=":
            self.add_token(
                TokenType.EQUAL_EQUAL if self.match("=") else TokenType.EQUAL
            )
        elif c == "<":
            if self.match("="):
                self.add_token(TokenType.LESS_EQUAL)
            elif self.match(">"):
                self.add_token(TokenType.NOT_EQUAL)
            else:
                self.add_token(TokenType.LESS)
        elif c == ">":
            self.add_token(
                TokenType.GREATER_EQUAL if self.match("=") else TokenType.GREATER
            )
        elif c == "/":
            if self.match("/"):
                # Um comentário vai até o fim da linha
                while not self.peek() == "\n" and not self.is_at_end():
                    self.advance()
            elif self.match("*"):
                # Um comentário vai até o fim do bloco
                while (
                    not (self.peek() == "*" and self.peek_next() == "/")
                    and not self.is_at_end()
                ):
                    if self.peek() == "\n":
                        self.line += 1
                    self.advance()

                # Erro se chegou ao fim do arquivo sem fechar o comentário de bloco
                if self.is_at_end():
                    self.error(self.line, "Comentário de bloco não finalizado.")
                    return

                # Avança o último '*' e o '/'
                self.advance()
                self.advance()
            else:
                self.add_token(TokenType.SLASH)
        elif c == " " or c == "\r" or c == "\t":
            pass  # Ignorar espaços em branco
        elif c == "\n":
            self.line += 1  # Incrementar o contador de linhas
        elif c == '"':
            self.string()
        elif self.is_digit(c):
            self.number()
        elif self.is_alpha(c):
            self.identifier()
        else:
            self.error(self.line, "Caractere inesperado.")

    def identifier(self):
        while self.is_alpha_numeric(self.peek()):
            self.advance()

        token_type = self.keywords.get(
            self.source[self.start : self.current], TokenType.IDENTIFIER
        )

        self.add_token(token_type)

    def number(self):
        while self.is_digit(self.peek()):
            self.advance()
        self.add_token(TokenType.INTEGER, int(self.source[self.start : self.current]))

    def string(self):
        while self.peek() != '"' and not self.is_at_end():
            if self.peek() == "\n":
                self.line += 1
            self.advance()

        if self.is_at_end():
            self.error(self.line, "String não foi terminada.")
            return

        # Pular as aspas (") finais.
        self.advance()

        # Tirar as aspas em volta
        value = self.source[self.start + 1 : self.current - 1]
        self.add_token(TokenType.STRING, value)

    def match(self, expected: str) -> bool:
        if self.is_at_end():
            return False
        if self.source[self.current] != expected:
            return False
        self.current += 1
        return True

    def peek(self) -> str:
        if self.is_at_end():
            return "\0"  # EOF
        return self.source[self.current]

    def peek_next(self) -> str:
        if self.current + 1 >= len(self.source):
            return "\0"  # EOF
        return self.source[self.current + 1]

    def is_alpha(self, c: str) -> bool:
        return (
            ("a" <= c <= "z") or ("A" <= c <= "Z") or c == "_" or c == "ç" or c == "Ç"
        )

    def is_alpha_numeric(self, c: str) -> bool:
        return self.is_alpha(c) or self.is_digit(c)

    def is_digit(self, c: str) -> bool:
        return "0" <= c <= "9"

    def advance(self) -> str:
        self.current += 1
        return self.source[self.current - 1]

    def add_token(self, token_type: TokenType, literal=None):
        text = self.source[self.start : self.current]
        self._tokens.append(LexicalToken(token_type, text, literal, self.line))

    def is_at_end(self) -> bool:
        return self.current >= len(self.source)
