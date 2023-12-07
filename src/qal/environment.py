from lexical_token import LexicalToken
from runtime_exception import RuntimeException


class Environment:
    def __init__(self):
        self._values = {}

    def define(self, name: str, value):
        self._values[name] = value

    def get(self, name: LexicalToken):
        if name.lexeme in self._values:
            return self._values[name.lexeme]

        raise RuntimeException(name, f"Variável não definida '{name.lexeme}'.")

    def assign(self, name: LexicalToken, value):
        if name.lexeme in self._values:
            self._values[name.lexeme] = value
            return

        raise RuntimeException(name, f"Variável não definida '{name.lexeme}'.")
