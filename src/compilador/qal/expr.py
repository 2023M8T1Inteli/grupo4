from typing import Any
from lexical_token import LexicalToken

class Expr:
    def accept(self, visitor):
        pass

class Assign(Expr):
    def __init__(self, name: LexicalToken, value: Any):
        self.name = name
        self.value = value

    def accept(self, visitor):
        return visitor.visit_assign_expr(self)


class Binary(Expr):
    def __init__(self, left, operator: LexicalToken, right):
        self.left = left
        self.operator = operator
        self.right = right

    def accept(self, visitor):
        return visitor.visit_binary_expr(self)


class Command(Expr):
    def __init__(self, name: LexicalToken, arguments):
        self.name = name
        self.arguments = arguments

    def accept(self, visitor):
        return visitor.visit_command_expr(self)


class Grouping(Expr):
    def __init__(self, expression):
        self.expression = expression

    def accept(self, visitor):
        return visitor.visit_grouping_expr(self)


class Literal(Expr):
    def __init__(self, value: Any):
        self.value = value

    def accept(self, visitor):
        return visitor.visit_literal_expr(self)


class Logical(Expr):
    def __init__(self, left, operator: LexicalToken, right):
        self.left = left
        self.operator = operator
        self.right = right

    def accept(self, visitor):
        return visitor.visit_logical_expr(self)


class Unary(Expr):
    def __init__(self, operator: LexicalToken, right):
        self.operator = operator
        self.right = right

    def accept(self, visitor):
        return visitor.visit_unary_expr(self)


class Variable(Expr):
    def __init__(self, name: LexicalToken):
        self.name = name

    def accept(self, visitor):
        return visitor.visit_variable_expr(self)


class Visitor:
    def visit_assign_expr(self, expr: Assign):
        pass

    def visit_binary_expr(self, expr: Binary):
        pass

    def visit_command_expr(self, expr: Command):
        pass

    def visit_grouping_expr(self, expr: Grouping):
        pass

    def visit_literal_expr(self, expr: Literal):
        pass

    def visit_logical_expr(self, expr: Logical):
        pass

    def visit_unary_expr(self, expr: Unary):
        pass

    def visit_variable_expr(self, expr: Variable):
        pass

