import sys
import os

from scanner import Scanner
from parsing import Parsing
from lexical_token import LexicalToken
from token_type import TokenType

had_error = False
had_runtime_error = False

# Read the code from stdin
path = sys.stdin.readline()

# Print the code to verify it's received
def remove_newlines(text):
    cleaned_text = text.replace('\n', '')
    return cleaned_text

def ler_arquivo(path):
    try:
        with open(path, 'r') as arquivo:
            conteudo = arquivo.read()
        return conteudo
    except FileNotFoundError:
        print(f'O arquivo {path} não foi encontrado.')
        return None
    except Exception as e:
        print(f'Ocorreu um erro ao ler o arquivo: {e}')
        return None

# Exemplo de uso:
caminho_do_arquivo = "../games/" + remove_newlines(path)
conteudo_do_arquivo = ler_arquivo(caminho_do_arquivo)

def report(line: int, where: str, message: str):
    print(f"[linha {line}] Erro {where}: {message}")
    had_error = True

def scan_error(line: int, message: str):
    report(line, "", message)

def parsing_error(token: LexicalToken, message: str):
    if token.type == TokenType.EOF:
        report(token.line, " no final", message)
    else:
        report(token.line, f" no '{token.lexeme}'", message)

def runtime_error(error):
    print(f"Erro: {error.message}\n[linha {error.token.line}]")
    had_runtime_error = True

def run(source: str): 
    scanner = Scanner(source, error_function=scan_error)
    tokens = scanner.scan_tokens()

    parser = Parsing(tokens, error_function=parsing_error)
    statements = parser.parse()

    print(f'Tokens: {tokens} \n')
    print(f'Parser: {statements}')

if __name__ == '__main__': 
    run(conteudo_do_arquivo)

# Flush the output to ensure it's sent immediately
sys.stdout.flush()
