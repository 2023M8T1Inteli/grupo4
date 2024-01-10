import sys
import os


def main():
    if len(sys.argv) != 2:
        print(
            "Exemplo de uso: python generate_ast.py [diretorio_do_output]",
            file=sys.stderr,
        )
        sys.exit(64)  # Codigo 64: uso incorreto

    output_dir = sys.argv[1]

    define_ast(
        output_dir,
        "Expr",
        [
            "Assign   : name: LexicalToken, value: Any",
            "Binary   : left, operator: LexicalToken, right",
            "Command  : name: LexicalToken, arguments",
            "Grouping : expression",
            "Literal  : value: Any",
            "Logical  : left, operator: LexicalToken, right",
            "Unary    : operator: LexicalToken, right",
            "Variable : name: LexicalToken",
        ],
    )

    define_ast(
        output_dir,
        "Stmt",
        [
            "Block      : statements",
            "Expression : expression",
            "If         : condition, then_branch, else_branch",
            "Print      : expression",
            "Var        : name: LexicalToken, initializer",
            "While      : condition, body: Stmt",
        ],
    )


def define_ast(output_dir, base_name, types):
    os.makedirs(output_dir, exist_ok=True)
    filename = base_name.lower()
    path = os.path.join(output_dir, f"{filename}.py")
    with open(path, "w", encoding="utf-8") as file:
        # Imports
        file.write("from typing import Any\n")
        file.write("from lexical_token import LexicalToken\n")
        file.write("\n")

        file.write(f"class {base_name}:\n")
        file.write("    def accept(self, visitor):\n")
        file.write("        pass\n\n")

        # Classes do AST
        for type_str in types:
            class_name, fields = type_str.split(":", 1)
            class_name, fields = class_name.strip(), fields.strip()
            define_type(file, base_name, class_name, fields)

        define_visitor(file, base_name, types)


def define_visitor(file, base_name, types):
    file.write("class Visitor:\n")

    for each_type in types:
        type_name = each_type.split(":")[0].strip()
        file.write(
            f"    def visit_{type_name.lower()}_{base_name.lower()}(self, {base_name.lower()}: {type_name}):\n"
        )
        file.write("        pass\n\n")


def define_type(file, base_name, class_name, field_list):
    # Definicao da classe
    file.write(f"class {class_name}({base_name}):\n")

    # Construtor
    file.write(f"    def __init__(self, {field_list}):\n")

    # Armazenar os parametros como atributos
    fields = field_list.split(", ")
    for field in fields:
        name = field.split(":")[0]
        file.write(f"        self.{name} = {name}\n")
    file.write("\n")

    # Passar o visitor para o accept
    file.write("    def accept(self, visitor):\n")
    file.write(
        f"        return visitor.visit_{class_name.lower()}_{base_name.lower()}(self)\n\n"
    )

    file.write("\n")


if __name__ == "__main__":
    main()
