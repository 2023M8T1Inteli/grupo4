import customtkinter
import os
from PIL import Image, ImageTk

# Obtém o caminho do diretório atual do arquivo
file_path = os.path.dirname(os.path.realpath(__file__))

# Função de retorno de chamada do botão
def buttonCallBack():
    print("Cliquei")

# Configura o modo de aparência para "light"
customtkinter.set_appearance_mode("light")  

# Cria uma instância do CTk (customtkinter)
app = customtkinter.CTk()
app.title("Home")

# Obtém as dimensões da tela
width = app.winfo_screenwidth()               
height = app.winfo_screenheight()               
app.geometry("%dx%d" % (width, height))

# Cria o frame do cabeçalho
head_frame = customtkinter.CTkFrame(app, width=width, height=90, corner_radius=0, fg_color="#D51130")
head_frame.grid(row=0, column=0, sticky="nsew")

# Carrega a imagem e cria uma CTkImage
imgProfile = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(50, 50))

# Adiciona uma função de clique ao rótulo
def label_click():
    print("label_click")

# Adiciona o rótulo "HOME"
home_label = customtkinter.CTkLabel(
    head_frame,
    text="HOME",
    font=("Inter", 18, "bold"),
    text_color="white",
)
home_label.place(x=width - 270, y=30)  # Ajusta as coordenadas (x, y) conforme necessário
home_label.configure(cursor="hand2")  # Altera o estilo do cursor

# Adiciona o rótulo "JOGOS"
jogos_label = customtkinter.CTkLabel(
    head_frame,
    text="JOGOS",
    font=("Inter", 18, "bold"),
    text_color="white",
)
jogos_label.place(x=width - 180, y=30)  # Ajusta as coordenadas (x, y) conforme necessário
jogos_label.configure(cursor="hand2")  # Altera o estilo do cursor

# Adiciona o rótulo de imagem
img_label = customtkinter.CTkLabel(head_frame, image=imgProfile, text="")
img_label.place(x=width - 90, y=20)  # Ajusta as coordenadas (x, y) conforme necessário
img_label.configure(cursor="hand2")

# Abaixa o head_frame para o plano de fundo
head_frame.lower()

# Associa eventos de clique aos rótulos
home_label.bind("<Button-1>", lambda event: label_click())
jogos_label.bind("<Button-1>", lambda event: label_click())
img_label.bind("<Button-1>", lambda event: label_click())

# Função de retorno de chamada para o botão de pesquisa
def search_button_callback():
    print("uhum")
    search_text = search_entry.get().lower()  # Obtém o texto de pesquisa da entrada e converte para minúsculas
    print(search_text)

    # Itera sobre os widgets da janela
    for widget in app.winfo_children():
        if isinstance(widget, customtkinter.CTkButton) and "buttonClient" in widget.winfo_name():
            button_text = widget.cget("text").lower()
            print(button_text)
            if search_text in button_text:
                widget.grid()
            else:
                widget.grid_remove()

# Cria um novo frame para a barra de pesquisa, imagem, e botão
search_frame = customtkinter.CTkFrame(app, bg_color="#EBEBEB", fg_color="#EBEBEB")
search_frame.grid(row=1, column=0, padx=width/4, pady=20, sticky="wn")

# Carrega a imagem da pesquisa
img_search = customtkinter.CTkImage(Image.open(file_path + "/assets/Vector.png"), size=(30, 30))

# Adiciona a imagem ao rótulo na barra de pesquisa
img_label_search = customtkinter.CTkLabel(search_frame, image=img_search, text="")
img_label_search.grid(row=0, column=0, padx=0, pady=0, sticky="w")
img_label_search.configure(cursor="hand2")
img_label_search.bind("<Button-1>", lambda event: search_button_callback())

# Adiciona a entrada de pesquisa ao frame de pesquisa
search_entry = customtkinter.CTkEntry(
    search_frame, 
    width=300, 
    height=50,
    placeholder_text="Procurar",
    text_color="black",
    fg_color="white",
    placeholder_text_color="grey",
    corner_radius=30,
    border_color="grey"	
)
search_entry.grid(row=0, column=1, padx=10, pady=0, sticky="w")

# Adiciona o botãoAdicionar ao frame de pesquisa
imgAdd = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 141.png"), size=(40, 40))
buttonAdd = customtkinter.CTkButton(
    search_frame,
    width=30,
    height=30,
    image=imgAdd,
    command=buttonCallBack,
    text="",
    fg_color="#EBEBEB",
    border_color="#EBEBEB",
    text_color="#EBEBEB",
    hover_color="#EBEBEB"
)
buttonAdd.grid(row=0, column=2, padx=5, pady=0, sticky="w")

# Configuração do botão
img = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 135.png"), size=(30,30))

buttonClient = customtkinter.CTkButton(
    app,
    width=800,
    height=70,
    corner_radius=30, 
    image=img,
    text="Paciente 1", 
    command=buttonCallBack, 
    border_width=2,
    fg_color="#FFFFFF", 
    border_color="#D51130",
    text_color="#000000",
    hover_color="#FFFFFF",
    anchor="w",
    compound="left",
    border_spacing=20
)

buttonClient.grid(row=2, column=0, padx=width/4, pady=20, sticky="wn")

app.grid_columnconfigure(0, weight=1)

app.mainloop()
