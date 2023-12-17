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
