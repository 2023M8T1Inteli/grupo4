import expr
from lexical_token import TokenType
from runtime_exception import RuntimeException


class Interpreter(expr.Visitor):
    def __init__(self, error_function):
        self.error = error_function

    def interpret(self, expr):
        try:
            value = self._evaluate(expr)
            evaluation = self._stringify(value)
            return evaluation
        except RuntimeException as e:
            self.error(e)

    def visit_literal_expr(self, expr: expr.Literal):
        return expr.value

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

        # Não deveria chegar aqui
        return None

    def _stringify(self, object):
        if object == None:
            return "nil"

        return str(object)
