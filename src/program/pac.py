# Importa a biblioteca customtkinter com um alias ctk
import customtkinter as ctk
from tkinter import ttk

# Configura o modo de aparência para "light"
ctk.set_appearance_mode("light")

# Cria uma instância da janela principal (paciente)
pac = ctk.CTk()
pac.geometry("500x500")
pac.title("Cadastro de paciente")

# Define as dimensões e a posição do frame dentro da janela
frame_width = 200
frame_height = 500
x_pos = (pac.winfo_screenwidth() - frame_width) // 2
y_pos = (pac.winfo_screenheight() - frame_height) // 2

# Cria um frame na janela principal
frame = ctk.CTkFrame(master=pac, width=frame_width, height=frame_height)
frame.place(x=x_pos, y=y_pos)

# Adiciona um rótulo para o título do cadastro
label = ctk.CTkLabel(master=frame, text='Cadastro de paciente', font=("Arial", 16))
label.pack(pady=12, padx=10)

# Adiciona um rótulo e uma entrada para o nome
label = ctk.CTkLabel(master=frame, text='Nome')
label.pack(pady=12, padx=10)
entry = ctk.CTkEntry(master=frame, placeholder_text="ex: Natália", corner_radius=25, font=("Arial", 12))
entry.pack(pady=12, padx=10)

# Adiciona um rótulo e uma entrada para o diagnóstico
label = ctk.CTkLabel(master=frame, text='Diagnóstico')
label.pack(pady=12, padx=10)
entry = ctk.CTkEntry(master=frame, placeholder_text="ex: Paralisia cerebral", corner_radius=25, font=("Arial", 12))
entry.pack(pady=12, padx=10)

# Adiciona um rótulo e uma entrada para a idade
label = ctk.CTkLabel(master=frame, text='Idade')
label.pack(pady=12, padx=10)
entry = ctk.CTkEntry(master=frame, placeholder_text="ex: São Paulo", corner_radius=25, font=("Arial", 12))
entry.pack(pady=12, padx=10)

# Adiciona um botão para criar uma sessão
button = ctk.CTkButton(master=frame, text='Criar sessão', fg_color="#D51130", hover_color="#E5505A", corner_radius=25)
button.pack(pady=12, padx=10)

# Inicia o loop principal da aplicação
pac.mainloop()
