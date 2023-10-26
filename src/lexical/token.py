from token_type import TokenType

class Token:
    def __init__(self, type: TokenType, lexeme: str, literal: object, line: int):
        self.type = type
        self.lexeme = lexeme
        self.literal = literal
        self.line = line

    def __repr__(self) -> str:
        return f"Token(type={self.type}, lexeme='{self.lexeme}', literal={self.literal}, line={self.line})"
