import tkinter as tk
from tkinter import font

# Janela principal
window = tk.Tk()
window.geometry('600x400')
window.title('Lelis')


# Frame para a "div"
div_frame = tk.Frame(window, bg='white', relief='solid', highlightbackground="red", highlightthickness=2)
div_frame.pack(fill='x', ipadx=900, ipady=12)  # Define o lado esquerdo para a "div"

# Estilo de fonte em negrito
bold_font = font.nametofont("TkDefaultFont")
bold_font.configure(weight='bold')

# Label dentro da "div"
test = tk.Label(div_frame, text="SUAS CRIAÇÕES", bg='white', fg="red",  font=bold_font)
test.pack(ipadx=10, ipady=12)  # Ajuste o ipadx/ipady conforme necessário

# Frame para a direita da tela
right_frame = tk.Frame(window)
right_frame.pack(side='right', fill='both', expand=True)

# Outros widgets podem ser adicionados ao right_frame

window.mainloop()
