import customtkinter as ctk
from tkinter import ttk
from PIL import Image, ImageTk
import os

file_path = os.path.dirname(os.path.realpath(__file__))
# Configura o modo de aparência para "light"
ctk.set_appearance_mode("light")

# Cria uma classe para a aplicação principal
class App(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title("Perfil")
        width = self.winfo_screenwidth()
        height = self.winfo_screenheight()
        self.geometry("%dx%d" % (width, height))
        self.configure(bg="#fff")
        self.grid_columnconfigure((0, 1), weight=1)

        # Cria o cabeçalho (head_frame)
        head_frame = ctk.CTkFrame(self, width=width, height=90, corner_radius=0, fg_color="#D51130")
        head_frame.grid(row=0, column=0, sticky="nsew")

        # Carrega a imagem e cria uma CTkImage
        imgProfile = ctk.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(50, 50))

        # Adiciona função de clique ao rótulo
        def label_click():
            print("Oi")

        # Adiciona o rótulo "HOME"
        home_label = ctk.CTkLabel(
            head_frame,
            text="HOME",
            font=("Inter", 18, "bold"),
            text_color="white",
        )
        home_label.place(x=width - 270, y=30)  
        home_label.configure(cursor="hand2") 

        # Adiciona o rótulo "JOGOS"
        jogos_label = ctk.CTkLabel(
            head_frame,
            text="JOGOS",
            font=("Inter", 18, "bold"),
            text_color="white",
        )
        jogos_label.place(x=width - 180, y=30)  
        jogos_label.configure(cursor="hand2")

        # Adiciona o rótulo de imagem
        img_label = ctk.CTkLabel(head_frame, image=imgProfile, text="")
        img_label.place(x=width - 90, y=20)
        img_label.configure(cursor="hand2")

        # Coloca o head_frame para o plano de fundo
        head_frame.lower()

        # Vincula eventos de clique aos rótulos
        home_label.bind("<Button-1>", lambda event: label_click())
        jogos_label.bind("<Button-1>", lambda event: label_click())
        img_label.bind("<Button-1>", lambda event: label_click())

        # Botão para retornar à página inicial
        returnImg = ctk.CTkImage(Image.open(file_path + "/assets/seta.png"), size=(20, 20))
        return_button = ctk.CTkButton(self, width=25, text="", height=25, fg_color="transparent", hover_color="#EBEBEB", image=returnImg, cursor="hand2")
        return_button.place(x=width//12, y=150)

        # Informações da criança
        kidsImg = ctk.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(100, 100))

        imgLabel = ctk.CTkLabel(self, image=kidsImg, text="")
        imgLabel.place(x=width//4.6, y=180)

        name_label = ctk.CTkLabel(
            self,
            text="Maria Luíza",
            font=("Inter", 24, "bold"),
            text_color="black",
        )
        name_label.place(x=width//5, y=300) 

        city_label = ctk.CTkLabel(
            self,
            text="Cidade:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        city_label.place(x=width//7, y=400) 

        city = ctk.CTkLabel(
            self,
            text="São Paulo",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        city.place(x=width//5, y=400) 

        age_label = ctk.CTkLabel(
            self,
            text="Idade:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        age_label.place(x=width//7, y=440) 

        age = ctk.CTkLabel(
            self,
            text="8 anos",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        age.place(x=width//5.3, y=440) 

        diagnosis_label = ctk.CTkLabel(
            self,
            text="Diagnóstico:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        diagnosis_label.place(x=width//7, y=480) 

        diagnosis = ctk.CTkLabel(
            self,
            text="Diplegia",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        diagnosis.place(x=width//4.3, y=480) 

        # Botão para iniciar uma nova sessão
        newImg = ctk.CTkImage(Image.open(file_path + "/assets/icon_plus.png"))
        new_Session = ctk.CTkButton(self, text="Iniciar nova Sessão", font=("Inter", 16, "bold"), width=200, height=170, fg_color="#D51130", hover_color="#A20B23", image=newImg, compound="top", cursor="hand2")
        new_Session.place(x=width//1.7, y=160)

        # Botão para visualizar o progresso da criança durante o tratamento
        viewImg = ctk.CTkImage(Image.open(file_path + "/assets/view.png"), size=(50, 30))
        view = ctk.CTkButton(self, text="Visualizar progresso", font=("Inter", 16, "bold"), width=200, height=170, fg_color="#D51130", hover_color="#A20B23", image=viewImg, compound="top", cursor="hand2")
        view.place(x=width//1.7, y=400)

# Verifica se o script está sendo executado diretamente
if __name__ == "__main__":
    app = App()
    app.mainloop()
