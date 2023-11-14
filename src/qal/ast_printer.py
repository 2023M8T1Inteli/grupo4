from expr import Binary, Grouping, Literal, Unary
from lexical_token import LexicalToken
from token_type import TokenType


class AstPrinter:
    def print(self, expr) -> str:
        return expr.accept(self)

    def visit_binary_expr(self, expr):
        return self.parenthesize(expr.operator.lexeme, expr.left, expr.right)

    def visit_grouping_expr(self, expr):
        return self.parenthesize("group", expr.expression)

    def visit_literal_expr(self, expr):
        if expr.value is None:
            return "nil"
        return str(expr.value)

    def visit_unary_expr(self, expr):
        return self.parenthesize(expr.operator.lexeme, expr.right)

    def parenthesize(self, name, *exprs):
        parts = [f"({name}"]
        for expr in exprs:
            parts.append(" ")
            parts.append(self.print(expr))
        parts.append(")")
        return "".join(parts)


def main():
    """Teste do printer."""
    expression = Binary(
        Binary(Literal(123), LexicalToken(TokenType.PLUS, "+", None, 1), Literal(45)),
        LexicalToken(TokenType.STAR, "*", None, 1),
        Grouping(Literal(67)),
    )

    print(AstPrinter().print(expression))


if __name__ == "__main__":
    main()
