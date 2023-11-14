import tkinter as tk

def funcao_com_parametros(parametro1, parametro2):
    print(f"Parâmetro 1: {parametro1}, Parâmetro 2: {parametro2}")

def criar_botao():
    # Função lambda que encapsula a chamada da função com os parâmetros desejados
    botao_parametrizado = tk.Button(root, text="Clique-me", command=lambda: funcao_com_parametros("Valor1", "Valor2"))
    botao_parametrizado.pack()

root = tk.Tk()

# Botão que cria o botão parametrizado
botao_criar = tk.Button(root, text="Criar Botão", command=criar_botao)
botao_criar.pack()

root.mainloop()
