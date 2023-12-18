from expr import Binary, Grouping, Literal, Unary, Variable, Assign, Logical, Command
from stmt import Print, Var, Block, If, While
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

        statements = []
        while not self._is_at_end():
            statements.append(self._declaration())

        return statements

    def _expression(self):
        """expression → assignment"""

        return self._assignment()

    def _declaration(self):
        """declaration → var_declaration | statement"""
        try:
            if self._match(TokenType.VAR):
                return self._var_declaration()

            return self._statement()
        except Parsing.ParseError:
            self._syncronize()
            return None

    def _statement(self):
        """statement → expression_statement | if_statement | print_statement | while_statement | block"""
        if self._match(TokenType.SE):
            return self._if_statement()

        if self._match(TokenType.PRINT):
            return self._print_statement()

        if self._match(TokenType.ENQUANTO):
            return self._while_statement()

        if self._match(TokenType.LBLOCK):
            return Block(self._block())

        return self._expression_statement()

    def _if_statement(self):
        """if_statement → "se" expression "entao" statement ( "senao" statement )?"""
        condition = self._expression()
        self._consume(TokenType.ENTAO, "Era esperado 'entao' após a condição.")

        then_branch = self._statement()

        else_branch = None
        if self._match(TokenType.SENAO):
            else_branch = self._statement()

        return If(condition, then_branch, else_branch)

    def _print_statement(self):
        """print_statement → "print" expression ";" """
        value = self._expression()
        self._consume(TokenType.SEMICOLON, "Era esperado ';' após o valor.")
        return Print(value)

    def _var_declaration(self):
        """var_declaration → "var" IDENTIFIER ( "=" expression )? ";" """
        name = self._consume(TokenType.IDENTIFIER, "Era esperado um nome de variável.")

        initializer = None
        if self._match(TokenType.EQUAL):
            initializer = self._expression()

        self._consume(
            TokenType.SEMICOLON, "Era esperado ';' após a declaração da variável."
        )
        return Var(name, initializer)

    def _while_statement(self):
        """while_statement → "enquanto" expression "faca" statement"""
        condition = self._expression()
        self._consume(TokenType.FACA, "Era esperado 'faca' após a condição.")

        body = self._statement()

        return While(condition, body)

    def _expression_statement(self):
        """expression_statement → expression ";" """
        expr = self._expression()
        self._consume(TokenType.SEMICOLON, "Era esperado ';' após a expressão.")
        return expr

    def _block(self):
        """block → "inicio" declaration "fim" """
        statements = []

        while not self._check(TokenType.RBLOCK) and not self._is_at_end():
            statements.append(self._declaration())

        self._consume(TokenType.RBLOCK, "Era esperado 'fim' após o bloco.")

        # Erro se bloco estiver vazio
        if len(statements) == 0:
            raise self._error(self._peek(), "Um bloco vazio não é permitido.")

        return statements

    def _assignment(self):
        """assignment → IDENTIFIER "=" assignment | command"""
        expr = self._command()

        if self._match(TokenType.EQUAL):
            equals = self._previous()
            value = self._assignment()

            if isinstance(expr, Variable):
                name = expr.name
                return Assign(name, value)

            self._error(equals, "Era esperado um nome de variável.")

        return expr

    def _command(self):
        """command → COMANDO "(" ( expression ( "," expression )* )? ")" | or"""
        if self._match(TokenType.COMANDO):
            name = self._previous()
            self._consume(TokenType.LPAR, "Era esperado um '(' após o nome do comando.")
            arguments = []

            if not self._check(TokenType.RPAR):
                value = self._expression()
                arguments.append(value)
                while self._match(TokenType.COMMA):
                    value = self._expression()
                    arguments.append(value)

            self._consume(TokenType.RPAR, "Era esperado um ')' após os argumentos.")

            return Command(name, arguments)

        return self._or()

    def _or(self):
        """or → and ( "ou" and )*"""
        expr = self._and()

        while self._match(TokenType.OU):
            operator = self._previous()
            right = self._and()
            expr = Logical(expr, operator, right)

        return expr

    def _and(self):
        """and → equality ( "e" equality )*"""
        expr = self._equality()

        while self._match(TokenType.E):
            operator = self._previous()
            right = self._equality()
            expr = Logical(expr, operator, right)

        return expr

    def _equality(self):
        """equality → comparison ( ( "!=" | "==" ) comparison )*"""
        expr = self._comparison()

        while self._match(TokenType.NOT_EQUAL, TokenType.EQUAL_EQUAL):
            operator = self._previous()
            right = self._comparison()
            expr = Binary(expr, operator, right)

        return expr

    def _comparison(self):
        """comparison → term ( ( ">" | ">=" | "<" | "<=" ) term )*"""
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
        """term → factor ( ( "-" | "+" ) factor )*"""
        expr = self._factor()

        while self._match(TokenType.MINUS, TokenType.PLUS):
            operator = self._previous()
            right = self._factor()
            expr = Binary(expr, operator, right)

        return expr

    def _factor(self):
        """factor → unary ( ( "/" | "*" ) unary )*"""
        expr = self._unary()

        while self._match(
            TokenType.SLASH, TokenType.STAR, TokenType.PERCENT, TokenType.CARET
        ):
            operator = self._previous()
            right = self._unary()
            expr = Binary(expr, operator, right)

        return expr

    def _unary(self):
        """unary → ( "nao" | "-" ) unary | primary"""
        if self._match(TokenType.NAO, TokenType.MINUS):
            operator = self._previous()
            right = self._unary()
            return Unary(operator, right)

        return self._primary()

    def _primary(self):
        """primary → NUMBER | STRING | "verdade" | "falso" | "nil" | "(" expression ")" | IDENTIFIER"""
        if self._match(TokenType.TRUE):
            return Literal(True)
        if self._match(TokenType.FALSE):
            return Literal(False)
        if self._match(TokenType.NIL):
            return Literal(None)

        if self._match(TokenType.INTEGER, TokenType.STRING):
            return Literal(self._previous().literal)

        if self._match(TokenType.IDENTIFIER):
            return Variable(self._previous())
        if self._match(TokenType.LPAR):
            expr = self._expression()
            self._consume(TokenType.RPAR, "Era esperado um ')' após a expressão.")
            return Grouping(expr)

        raise self._error(self._peek(), "Era esperada uma expressão.")

    def _match(self, *types):
        """Verifica se o token atual é de algum dos tipos especificados. Avança para o próximo token se for."""
        for token_type in types:
            if self._check(token_type):
                self._advance()
                return True
        return False

    def _consume(self, token_type, message):
        """Consome o token atual (avança para o próximo token) se for do tipo especificado. Caso contrário, reporta um erro de parse."""
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

        if self._peek().type == TokenType.EOF:
            return

        if self._previous().type == TokenType.SEMICOLON:
            return

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
