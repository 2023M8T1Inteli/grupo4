import customtkinter as ctk
from tkcalendar import DateEntry
from tkinter import ttk
import os
from PIL import Image, ImageTk

# Configurações iniciais e criação da janela principal
ctk.set_appearance_mode("light")
app = ctk.CTk()
width = app.winfo_screenwidth()
height = app.winfo_screenheight()
app.geometry("%dx%d" % (width, height))
app.title("Iniciar nova sessão")

# Configuração do frame principal
frame_width = 200
frame_height = 500
x_pos = (app.winfo_screenwidth() - frame_width) // 2
y_pos = (app.winfo_screenheight() - frame_height) // 2
frame = ctk.CTkFrame(master=app, width=frame_width, height=frame_height)
frame.place(x=x_pos, y=y_pos)

# Criação do cabeçalho
head_frame = ctk.CTkFrame(app, width=width, height=90, corner_radius=0, fg_color="#D51130")
head_frame.grid(row=0, column=0, sticky="nsew")

# Carregamento de imagem
file_path = os.path.dirname(os.path.realpath(__file__))
imgProfile = ctk.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(50, 50))

# Função para lidar com cliques nos labels
def label_click():
    print("Oi")

# Criação dos labels no cabeçalho
home_label = ctk.CTkLabel(
    head_frame,
    text="HOME",
    font=("Inter", 18, "bold"),
    text_color="white",
)
home_label.place(x=width - 270, y=30)
home_label.configure(cursor="hand2")

jogos_label = ctk.CTkLabel(
    head_frame,
    text="JOGOS",
    font=("Inter", 18, "bold"),
    text_color="white",
)
jogos_label.place(x=width - 180, y=30)
jogos_label.configure(cursor="hand2")

img_label = ctk.CTkLabel(head_frame, image=imgProfile, text="")
img_label.place(x=width - 90, y=20)
img_label.configure(cursor="hand2")

head_frame.lower()

# Configuração dos eventos de clique
home_label.bind("<Button-1>", lambda event: label_click())
jogos_label.bind("<Button-1>", lambda event: label_click())
img_label.bind("<Button-1>", lambda event: label_click())

# Labels e entradas para a criação da sessão
label = ctk.CTkLabel(master=frame, text='Iniciar nova sessão', font=("Arial", 16))
label.pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Nome da sessão')
label.pack(pady=12, padx=10)

entry = ctk.CTkEntry(master=frame, placeholder_text="Nome da sessão", corner_radius=25, font=("Arial", 12))
entry.pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Data')
label.pack(pady=12, padx=10)
DateEntry(master=frame, font=("Arial", 12), date_pattern="dd/mm/yyyy", width=20, background="#D51130",
          selectbackground="#D51130").pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Hora')
label.pack(pady=12, padx=10)
time_options = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
Timentry = ttk.Combobox(master=frame, values=time_options, font=("Arial", 12), state="readonly", width=20)
Timentry.pack(pady=12, padx=10)

button = ctk.CTkButton(master=frame, text='Criar sessão', fg_color="#D51130", hover_color="#E5505A", corner_radius=25)
button.pack(pady=12, padx=10)

app.mainloop()
