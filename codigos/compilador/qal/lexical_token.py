from token_type import TokenType


class LexicalToken:
    def __init__(self, token_type: TokenType, lexeme: str, literal: object, line: int):
        self.type = token_type
        self.lexeme = lexeme
        self.literal = literal
        self.line = line

    def __repr__(self) -> str:
        return f"LexicalToken(type={self.type}, lexeme='{self.lexeme}', literal={self.literal}, line={self.line})"
