import sys
import os

from scanner import Scanner
from parsing import Parsing
from lexical_token import LexicalToken
from token_type import TokenType

had_error = False
had_runtime_error = False

# Lê o código da entrada padrão
path = sys.stdin.readline()

def remove_newlines(text):
    # Remove as quebras de linha do texto
    cleaned_text = text.replace('\n', '')
    return cleaned_text

def ler_arquivo(path):
    # Tenta ler o conteúdo do arquivo no caminho especificado
    try:
        with open(path, 'r') as arquivo:
            conteudo = arquivo.read()
        return conteudo
    except FileNotFoundError:
        # Imprime uma mensagem se o arquivo não for encontrado
        print(f'O arquivo {path} não foi encontrado.')
        return None
    except Exception as e:
        # Imprime uma mensagem para qualquer outro erro de leitura de arquivo
        print(f'Ocorreu um erro ao ler o arquivo: {e}')
        return None

# Exemplo de uso:
caminho_do_arquivo = "../games/" + remove_newlines(path)
conteudo_do_arquivo = ler_arquivo(caminho_do_arquivo)

def report(line: int, where: str, message: str):
    # Reporta um erro com a linha, localização e mensagem
    print(f"[linha {line}] Erro {where}: {message}")
    had_error = True

def scan_error(line: int, message: str):
    # Função personalizada para reportar erros de análise léxica
    report(line, "", message)

def parsing_error(token: LexicalToken, message: str):
    # Função personalizada para reportar erros de parsing
    if token.type == TokenType.EOF:
        report(token.line, " no final", message)
    else:
        report(token.line, f" no '{token.lexeme}'", message)

def runtime_error(error):
    # Função personalizada para reportar erros em tempo de execução
    print(f"Erro: {error.message}\n[linha {error.token.line}]")
    had_runtime_error = True

def run(source: str): 
    # Função principal para executar a análise léxica e sintática do código-fonte
    scanner = Scanner(source, error_function=scan_error)
    tokens = scanner.scan_tokens()

    parser = Parsing(tokens, error_function=parsing_error)
    statements = parser.parse()

    # Imprime os tokens e a saída do parser
    print(f'Tokens: {tokens} \n')
    print(f'Parser: {statements}')

if __name__ == '__main__': 
    # Executa a função run se o script for o principal
    run(conteudo_do_arquivo)

# Garante que a saída seja imediatamente enviada
sys.stdout.flush()
