from typing import Any
from lexical_token import LexicalToken

class Stmt:
    def accept(self, visitor):
        pass

class Block(Stmt):
    def __init__(self, statements):
        self.statements = statements

    def accept(self, visitor):
        return visitor.visit_block_stmt(self)


class Expression(Stmt):
    def __init__(self, expression):
        self.expression = expression

    def accept(self, visitor):
        return visitor.visit_expression_stmt(self)


class If(Stmt):
    def __init__(self, condition, then_branch, else_branch):
        self.condition = condition
        self.then_branch = then_branch
        self.else_branch = else_branch

    def accept(self, visitor):
        return visitor.visit_if_stmt(self)


class Print(Stmt):
    def __init__(self, expression):
        self.expression = expression

    def accept(self, visitor):
        return visitor.visit_print_stmt(self)


class Var(Stmt):
    def __init__(self, name: LexicalToken, initializer):
        self.name = name
        self.initializer = initializer

    def accept(self, visitor):
        return visitor.visit_var_stmt(self)


class While(Stmt):
    def __init__(self, condition, body: Stmt):
        self.condition = condition
        self.body = body

    def accept(self, visitor):
        return visitor.visit_while_stmt(self)


class Visitor:
    def visit_block_stmt(self, stmt: Block):
        pass

    def visit_expression_stmt(self, stmt: Expression):
        pass

    def visit_if_stmt(self, stmt: If):
        pass

    def visit_print_stmt(self, stmt: Print):
        pass

    def visit_var_stmt(self, stmt: Var):
        pass

    def visit_while_stmt(self, stmt: While):
        pass

