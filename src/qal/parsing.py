from expr import Binary, Grouping, Literal, Unary
from token_type import TokenType
from lexical_token import LexicalToken
from ast_printer import AstPrinter


class Parsing:
    class ParseError(Exception):
        """Erro de parse."""

        pass

    def __init__(self, tokens, error_function):
        self.tokens = tokens
        self.error = error_function
        self.current = 0

    def parse(self):
        """Realiza o parse dos tokens."""
        try:
            return self._expression()
        except Parsing.ParseError:
            return None

    def _expression(self):
        """expression → equality ;"""

        return self._equality()

    def _equality(self):
        """equality → comparison ( ( "!=" | "==" ) comparison )* ;"""
        expr = self._comparison()

        while self._match(TokenType.NOT_EQUAL, TokenType.EQUAL_EQUAL):
            operator = self._previous()
            right = self._comparison()
            expr = Binary(expr, operator, right)

        return expr

    def _comparison(self):
        """comparison → term ( ( ">" | ">=" | "<" | "<=" ) term )* ;"""
        expr = self._term()

        while self._match(
            TokenType.GREATER,
            TokenType.GREATER_EQUAL,
            TokenType.LESS,
            TokenType.LESS_EQUAL,
        ):
            operator = self._previous()
            right = self._term()
            expr = Binary(expr, operator, right)

        return expr

    def _term(self):
        """term → factor ( ( "-" | "+" ) factor )* ;"""
        expr = self._factor()

        while self._match(TokenType.MINUS, TokenType.PLUS):
            operator = self._previous()
            right = self._factor()
            expr = Binary(expr, operator, right)

        return expr

    def _factor(self):
        """factor → unary ( ( "/" | "*" ) unary )* ;"""
        expr = self._unary()

        while self._match(TokenType.SLASH, TokenType.STAR, TokenType.PERCENT):
            operator = self._previous()
            right = self._unary()
            expr = Binary(expr, operator, right)

        return expr

    def _unary(self):
        """unary → ( "nao" | "-" ) unary | primary ;"""
        if self._match(TokenType.NAO, TokenType.MINUS):
            operator = self._previous()
            right = self._unary()
            return Unary(operator, right)

        return self._primary()

    def _primary(self):
        """primary → NUMBER | STRING | "verdade" | "falso" | "nil" | "(" expression ")" ;"""
        if self._match(TokenType.TRUE):
            return Literal(True)
        if self._match(TokenType.FALSE):
            return Literal(False)
        if self._match(TokenType.NIL):
            return Literal(None)

        if self._match(TokenType.INTEGER, TokenType.STRING):
            return Literal(self._previous().literal)

        if self._match(TokenType.LPAR):
            expr = self._expression()
            self._consume(TokenType.RPAR, "Era esperado um ')' após a expressão.")
            return Grouping(expr)

        raise self._error(self._peek(), "Era esperada uma expressão.")

    def _match(self, *types):
        """Verifica se o token atual é de algum dos tipos especificados."""
        for token_type in types:
            if self._check(token_type):
                self._advance()
                return True
        return False

    def _consume(self, token_type, message):
        """Consome o token atual se for do tipo especificado."""
        if self._check(token_type):
            return self._advance()
        raise self._error(self._peek(), message)

    def _check(self, token_type):
        """Verifica se o token atual é do tipo especificado."""
        if self._is_at_end():
            return False
        return self._peek().type == token_type

    def _advance(self):
        """Avança para o próximo token."""
        if not self._is_at_end():
            self.current += 1
        return self._previous()

    def _is_at_end(self):
        """Verifica se acabaram os tokens a serem parseados."""
        return self._peek().type == TokenType.EOF

    def _peek(self):
        """Retorna o token atual a ser consumido."""
        return self.tokens[self.current]

    def _previous(self):
        """Returns o token que foi consumido mais recentemente."""
        return self.tokens[self.current - 1]

    def _error(self, token, message):
        """Reporta um erro de parse."""

        self.error(token, message)

        return Parsing.ParseError()

    def _syncronize(self):
        """Sincroniza o parser após um erro de parse."""
        self._advance()

        while not self._is_at_end():
            if self._previous().type == TokenType.RBLOCK:
                return

            if self._peek().type in (
                TokenType.PROGRAMA,
                TokenType.SE,
                TokenType.ENQUANTO,
                TokenType.FACA,
                TokenType.COMANDO,
            ):
                return

            self._advance()
