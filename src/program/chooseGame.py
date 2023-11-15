import tkinter as tk
from tkinter import ttk, font, PhotoImage
import customtkinter
from customtkinter import *

# Configuração do modo de aparência
customtkinter.set_appearance_mode("light")  

# Obtendo o caminho do arquivo atual
file_path = os.path.dirname(os.path.realpath(__file__))

# Classe principal da aplicação
class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Edite seus jogos")
        self.geometry(f"{1100}x{800}")

        # Estilo de fonte em negrito
        bold_font = font.nametofont("TkDefaultFont")
        bold_font.configure(weight='bold')
        
        # Cabeçalho da aplicação
        self.header = customtkinter.CTkFrame(self, height=62, fg_color="#ffffff", corner_radius=0)
        self.header.pack(fill='x')

        # Linha de separação no cabeçalho
        self.border = customtkinter.CTkFrame(self, height=2, fg_color="#D51130", corner_radius=0)
        self.border.pack(fill='x')
        
        # Botão de retorno com imagem
        back_button_image = PhotoImage(file=file_path + '/assets/left_arrow.png')
        self.back_btn = customtkinter.CTkButton(self.header, fg_color="transparent", command=nullCommand, text="", image=back_button_image)
        self.back_btn.pack(side='left', padx=30, pady=20)

        # Botão para visualizar criações
        self.creation_btn = customtkinter.CTkButton(self.header, text="SUAS CRIAÇÕES", fg_color="transparent", hover_color="#fefefe", command=nullCommand, text_color="red")
        self.creation_btn.pack(side="right", padx=30)  

        # Título principal da aplicação
        self.title = customtkinter.CTkLabel(self, text="ESCOLHA SEU JOGO", font=CTkFont(size=40, weight="bold"))
        self.title.pack(pady=40)

        # Frame scrollável para exibir jogos
        gamesFrame = customtkinter.CTkScrollableFrame(self, width=1000, height=700, orientation="horizontal", fg_color="transparent")
        gamesFrame.pack(pady=30)

        # Loop para criar visualizações de jogos
        for i in range(1, 4):  
            # Frame para cada jogo
            game = CTkFrame(gamesFrame, fg_color="white", border_color="#D51130", border_width=2, corner_radius=28, width=300, height=500)
            game.pack(side="left", padx=40)

            # Botão de edição para cada jogo
            edit_button = customtkinter.CTkButton(game, corner_radius=40, fg_color="#D51130", command=edit(i), hover_color="#D54100", text="Editar")
            edit_button.pack(side="right", padx=10)
            edit_button.place(rely=0.03, relx=0.5)

            # Imagem representando o jogo
            image = PhotoImage(file=file_path + '/assets/game.png')
            image_button = CTkButton(game, fg_color="transparent", hover=False, text="", image=image)
            image_button.pack(padx=80, pady=50)

            # Texto do nome do jogo
            text = customtkinter.CTkLabel(game, font=CTkFont(weight="bold", size=20), text=f"Jogo {i}")
            text.pack(side="bottom", pady=40)


# Função de comando nulo
def nullCommand():
    print('nullCommand')

# Função para edição do jogo
def edit(n): 
    print(f'{n}')

# Inicialização da aplicação
if __name__ == "__main__":
    app = App()
    app.mainloop()
