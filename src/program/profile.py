import functools
import tkinter as tk
import os
import customtkinter
from PIL import Image, ImageTk

file_path = os.path.dirname(os.path.realpath(__file__))


class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Profile")
        width = self.winfo_screenwidth()
        height = self.winfo_screenheight()
        self.geometry("%dx%d" % (width, height))
        self.configure(bg="#fff")
        self.grid_columnconfigure((0, 1), weight=1)

        # Create the head_frame
        head_frame = customtkinter.CTkFrame(self, width=width, height=90, corner_radius=0, fg_color="#D51130")
        head_frame.grid(row=0, column=0, sticky="nsew")

        # Load the image and create a CTkImage
        imgProfile = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(50, 50))

        # Add click function in label
        def label_click():
            print("Oi")

        # Add the "HOME" label
        home_label = customtkinter.CTkLabel(
            head_frame,
            text="HOME",
            font=("Inter", 18, "bold"),
            text_color="white",
        )
        home_label.place(x=width - 270, y=30)  
        home_label.configure(cursor="hand2") 
        # Add the "JOGOS" label
        jogos_label = customtkinter.CTkLabel(
            head_frame,
            text="JOGOS",
            font=("Inter", 18, "bold"),
            text_color="white",
        )
        jogos_label.place(x=width - 180, y=30)  
        jogos_label.configure(cursor="hand2")

        # Add the image label
        img_label = customtkinter.CTkLabel(head_frame, image=imgProfile, text="")
        img_label.place(x=width - 90, y=20)
        img_label.configure(cursor="hand2")

        # Lower the head_frame to the background
        head_frame.lower()

        # Bind click events to the labels
        home_label.bind("<Button-1>", lambda event: label_click())
        jogos_label.bind("<Button-1>", lambda event: label_click())
        img_label.bind("<Button-1>", lambda event: label_click())

        # Button to return to home page
        returnImg = customtkinter.CTkImage(Image.open(file_path + "/assets/seta.png"), size=(20, 20))
        return_button = customtkinter.CTkButton(self, width=25, text="", height=25, fg_color="transparent", hover_color="#EBEBEB", image=returnImg, cursor="hand2")
        return_button.place(x=width//12, y=150)


        # Kids informations
        kidsImg = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(100, 100))

        imgLabel = customtkinter.CTkLabel(self, image=kidsImg, text="")
        imgLabel.place(x=width//4.6, y=180)

        name_label = customtkinter.CTkLabel(
            self,
            text="Maria Luíza",
            font=("Inter", 24, "bold"),
            text_color="black",
        )
        name_label.place(x=width//5, y=300) 

        city_label = customtkinter.CTkLabel(
            self,
            text="Cidade:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        city_label.place(x=width//7, y=400) 

        city = customtkinter.CTkLabel(
            self,
            text="São Paulo",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        city.place(x=width//5, y=400) 

        age_label = customtkinter.CTkLabel(
            self,
            text="Idade:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        age_label.place(x=width//7, y=440) 

        age = customtkinter.CTkLabel(
            self,
            text="8 anos",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        age.place(x=width//5.3, y=440) 

        diagnosis_label = customtkinter.CTkLabel(
            self,
            text="Diagnóstico:",
            font=("Inter", 18, "bold"),
            text_color="black",
        )
        diagnosis_label.place(x=width//7, y=480) 

        diagnosis = customtkinter.CTkLabel(
            self,
            text="Diplegia",
            font=("Inter", 18, "normal"),
            text_color="black",
        )
        diagnosis.place(x=width//4.3, y=480) 

        # Button to start a new session
        newImg = customtkinter.CTkImage(Image.open(file_path + "/assets/icon_plus.png"))
        new_Session = customtkinter.CTkButton(self, text="Iniciar nova Sessão", font=("Inter", 16, "bold") , width=200, height=170, fg_color="#D51130", hover_color="#A20B23", image=newImg, compound="top", cursor="hand2")
        new_Session.grid(row=1, column=0, padx=(50, 20), pady=(20, 20), sticky="w")
        new_Session.place(x=width//1.7, y=160)

        # Button to view the progress of the kid along the treatment
        viewImg = customtkinter.CTkImage(Image.open(file_path + "/assets/view.png"), size=(50, 30))
        view = customtkinter.CTkButton(self, text="Visualizar progresso", font=("Inter", 16, "bold") , width=200, height=170, fg_color="#D51130", hover_color="#A20B23", image=viewImg, compound="top", cursor="hand2")
        # view.grid(row=1, column=0, padx=(50, 20), pady=(20, 20), sticky="w")
        view.place(x=width//1.7, y=400)



if __name__ == "__main__":
    app = App()
    app.mainloop()