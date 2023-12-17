import expr
import stmt
from lexical_token import TokenType
from runtime_exception import RuntimeException
from environment import Environment


class Interpreter(
    expr.Visitor,
    stmt.Visitor,
):
    def __init__(self, error_function):
        self.error = error_function
        self._environment = Environment()

    def interpret(self, statements):
        try:
            for statement in statements:
                self._execute(statement)
        except RuntimeException as e:
            self.error(e)

    def visit_literal_expr(self, expr: expr.Literal):
        return expr.value

    def visit_command_expr(self, expr: expr.Command):
        if expr.name.lexeme == "ler":
            """
            Função bloqueante que recebe 1 parâmetro inteiro.
            Retorna um inteiro indicando qual quadrante do tapete foi clicado.
            Sugestão: usar algum padrão do tipo: 11, 12, 13, 21, 22, 23, etc, onde o primeiro dígito indica a linha e o segundo a coluna.
            """
            return int(input())
        elif expr.name.lexeme == "ler_varios":
            """
            Função bloqueante que recebe 3 parâmetros inteiros.
            Retorna verdade (true) se o quadrante quad foi clicado qtd vezes, ou falso (false) caso contrário.
            Caso o parâmetro tol seja um valor maior que zero, são tolerados tol cliques em qualquer outro quadrante
            (supondo uma situação em que o paciente erre o quadrante durante a interação com o tapete).
            """
            for argument in expr.arguments:
                print(int(argument.value))
            return True
        elif expr.name.lexeme == "mostrar":
            """
            Função que recebe um inteiro (e.g. cod) como parâmetro e exibe a imagem contida no arquivo (e.g. “cod.jpg”).
            """
            print("mostrar()", "cod = ", self._evaluate(expr.arguments[0]))
            return None
        elif expr.name.lexeme == "tocar":
            """
            Função que recebe um inteiro (e.g. cod) como parâmetro e reproduz o som contido no arquivo (e.g. “cod.wav”).
            """
            print("tocar()", "cod = ", self._evaluate(expr.arguments[0]))
            return None
        elif expr.name.lexeme == "mostrar_tocar":
            """
            Função que recebe dois inteiros cod_img (código da imagem) e cod_aud (código do áudio) como parâmetros. Exibe e toca ao mesmo tempo a imagem “cod_img.jpg” e o áudio “cod_aud.mp3”.
            """
            print(
                "mostrar_tocar()",
                "cod_img = ",
                self._evaluate(expr.arguments[0]),
                "cod_aud = ",
                self._evaluate(expr.arguments[1]),
            )
        elif expr.name.lexeme == "esperar":
            """
            Função que recebe um inteiro t como parâmetro e bloqueia a execução do programa em t milissegundos.
            """
            print("esperar()", "t = ", self._evaluate(expr.arguments[0]))
            return None

    def visit_logical_expr(self, expr: expr.Logical):
        left = self._evaluate(expr.left)

        if expr.operator.type == TokenType.OU:
            if self._is_truthy(left):
                return left
        else:
            if not self._is_truthy(left):
                return left

        return self._evaluate(expr.right)

    def visit_grouping_expr(self, expr: expr.Grouping):
        return self._evaluate(expr.expression)

    def visit_unary_expr(self, expr: expr.Unary):
        right = self._evaluate(expr.right)

        if expr.operator.type == TokenType.MINUS:
            self._check_number_operand(expr.operator, right)
            return -int(right)
        elif expr.operator.type == TokenType.NAO:
            return not right

        # Não deveria chegar aqui
        return None

    def visit_variable_expr(self, expr: expr.Variable):
        return self._environment.get(expr.name)

    def _check_number_operand(self, operator, operand):
        if isinstance(operand, int):
            return
        raise RuntimeException(operator, "Operando deve ser um número.")

    def _check_numbers_operands(self, operator, left, right):
        if isinstance(left, int) and isinstance(right, int):
            return
        raise RuntimeException(operator, "Operandos devem ser números.")

    def _is_truthy(self, obj):
        if obj is None:
            return False
        if isinstance(obj, bool):
            return obj
        return True

    def _evaluate(self, expr):
        return expr.accept(self)

    def _execute(self, stmt):
        stmt.accept(self)

    def visit_block_stmt(self, stmt: stmt.Block):
        self._execute_block(stmt.statements, Environment(self._environment))
        return None

    def _execute_block(self, statements, environment):
        previous = self._environment
        try:
            self._environment = environment
            for statement in statements:
                self._execute(statement)
        finally:
            self._environment = previous

    def visit_expression_stmt(self, stmt: stmt.Expression):
        self._evaluate(stmt.expression)
        return None

    def visit_if_stmt(self, stmt: stmt.If):
        if self._is_truthy(self._evaluate(stmt.condition)):
            self._execute(stmt.then_branch)
        elif stmt.else_branch != None:
            self._execute(stmt.else_branch)
        return None

    def visit_print_stmt(self, stmt: stmt.Print):
        value = self._evaluate(stmt.expression)
        print(self._stringify(value))
        return None

    def visit_var_stmt(self, stmt: stmt.Var):
        value = None
        if stmt.initializer != None:
            value = self._evaluate(stmt.initializer)

        self._environment.define(stmt.name.lexeme, value)
        return None

    def visit_while_stmt(self, stmt: stmt.While):
        while self._is_truthy(self._evaluate(stmt.condition)):
            self._execute(stmt.body)
        return None

    def visit_assign_expr(self, expr: expr.Assign):
        value = self._evaluate(expr.value)
        self._environment.assign(expr.name, value)
        return value

    def visit_binary_expr(self, expr: expr.Binary):
        left = self._evaluate(expr.left)
        right = self._evaluate(expr.right)

        if expr.operator.type == TokenType.GREATER:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) > int(right)
        elif expr.operator.type == TokenType.GREATER_EQUAL:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) >= int(right)
        elif expr.operator.type == TokenType.LESS:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) < int(right)
        elif expr.operator.type == TokenType.LESS_EQUAL:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) <= int(right)
        elif expr.operator.type == TokenType.NOT_EQUAL:
            return left != right
        elif expr.operator.type == TokenType.EQUAL_EQUAL:
            return left == right
        elif expr.operator.type == TokenType.MINUS:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) - int(right)
        elif expr.operator.type == TokenType.PLUS:
            if isinstance(left, int) and isinstance(right, int):
                return int(left) + int(right)
            elif isinstance(left, str) and isinstance(right, str):
                return str(left) + str(right)
            else:
                raise RuntimeException(
                    expr.operator,
                    "Operandos devem ser dois números ou strings.",
                )
        elif expr.operator.type == TokenType.SLASH:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) // int(right)
        elif expr.operator.type == TokenType.STAR:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) * int(right)
        elif expr.operator.type == TokenType.PERCENT:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) % int(right)
        elif expr.operator.type == TokenType.CARET:
            self._check_numbers_operands(expr.operator, left, right)
            return int(left) ** int(right)

        # Não deveria chegar aqui
        return None

    def _stringify(self, object):
        if object == None:
            return "nil"

        return str(object)
