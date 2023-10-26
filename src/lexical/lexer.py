import sys

from scanner import Scanner

hadError = False


def run_file(path: str):
    try:
        with open(path, "r", encoding="utf-8") as file:
            run(file.read())
            if hadError:
                sys.exit(1)
    except IOError as e:
        print(f"Não foi possível ler o arquivo: {path}")
        print(e)
        sys.exit(1)


def run_prompt():
    print("Entrando no modo interativo. Digite 'sair' para sair.")

    while True:
        try:
            line = input("> ")
            if line == "sair":
                break
            run(line)
            hadError = False
        except KeyboardInterrupt:
            break  # Sair do loop se encontrar CTRL + C
        except EOFError:
            break  # Sair do loop se encontrar CTRL + D


def error(line: int, message: str):
    report(line, "", message)


def report(line: int, where: str, message: str):
    print(f"[linha {line}] Erro {where}: {message}")
    hadError = True


def main():
    global hadError

    if len(sys.argv) > 2:
        print("Exemplo de uso: python lexer.py [script]")
        sys.exit(1)
    elif len(sys.argv) == 2:
        run_file(sys.argv[1])
    else:
        run_prompt()


def run(source: str):
    scanner = Scanner(source, error_function = error)
    tokens = scanner.scan_tokens()

    for token in tokens:
        print(token)


if __name__ == "__main__":
    main()
