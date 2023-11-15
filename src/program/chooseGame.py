import tkinter as tk
from tkinter import ttk, font, PhotoImage
import customtkinter
from customtkinter import *


import customtkinter
customtkinter.set_appearance_mode("light")  
file_path = os.path.dirname(os.path.realpath(__file__))

class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Edite seus jogos")
        self.geometry(f"{1100}x{800}")

        # Estilo de fonte em negrito
        bold_font = font.nametofont("TkDefaultFont")
        bold_font.configure(weight='bold')
        
        #Header
        self.header = customtkinter.CTkFrame(self, height=62,  fg_color="#ffffff", corner_radius=0)
        self.header.pack(fill='x')

        self.border = customtkinter.CTkFrame(self, height=2,  fg_color="#D51130", corner_radius=0)
        self.border.pack(fill='x')
        
        back_button_image = PhotoImage(file=file_path + '/assets/left_arrow.png')

        self.back_btn = customtkinter.CTkButton(self.header, fg_color="transparent", command=teste, text="", image=back_button_image)
        self.back_btn.pack(side='left', padx=30, pady=20)

        self.creation_btn = customtkinter.CTkButton(self.header, text="SUAS CRIAÇÕES", fg_color="transparent", hover_color="#fefefe", command=teste, text_color="red")
        self.creation_btn.pack(side="right", padx=30)  # Ajuste o ipadx/ipady conforme necessário

        self.title = customtkinter.CTkLabel(self, text="ESCOLHA SEU JOGO", font=CTkFont(size=40, weight="bold"))
        self.title.pack(pady=40)

        gamesFrame = customtkinter.CTkScrollableFrame(self, width=1000, height=700, orientation="horizontal", fg_color="transparent")
        gamesFrame.pack(pady=30)

        for i in range(1, 4):  # Adjust the range and number of games as needed
            game = CTkFrame(gamesFrame, fg_color="white", border_color="#D51130", border_width=2, corner_radius=28, width=300, height=500)
            game.pack(side="left", padx=40)

            edit_button = customtkinter.CTkButton(game, corner_radius=40, fg_color="#D51130",command=edit(i), hover_color="#D54100", text="Editar")
            edit_button.pack(side="right", padx=10)
            edit_button.place(rely=0.03, relx=0.5)

            image = PhotoImage(file=file_path + '/assets/game.png')
            image_button = CTkButton(game, fg_color="transparent", hover=False, text="", image=image)
            image_button.pack(padx=80, pady=50)

            text = customtkinter.CTkLabel(game, font=CTkFont(weight="bold", size=20), text=f"Jogo {i}")
            text.pack(side="bottom", pady=40)


def teste():
    print('pqp')

def edit(n): 
    print(f'{n}')

if __name__ == "__main__":
    app = App()
    app.mainloop()