import tkinter as tk
from tkinter import font
from PIL import Image, ImageTk
import customtkinter
from customtkinter import *
import os
import time

# Configuração do tema e cor padrão
customtkinter.set_appearance_mode("System")  
customtkinter.set_default_color_theme("blue")

class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Edite seu jogo")
        self.geometry(f"{1100}x{580}")
        self.configure(bg="#fff")
        self.code = []

        file_path = os.path.dirname(os.path.realpath(__file__))

        #Header
        self.header = customtkinter.CTkFrame(self, height=60,  fg_color="#D51130", corner_radius=0)
        self.header.pack(fill='x')

        #Botões do Header
        self.frame1 = customtkinter.CTkButton(self.header, width=100, height=58, text="HOME", fg_color="transparent", hover_color="#333")
        self.frame1.grid(column=1)
        self.frame1.place(relx=0.6)

        self.frame2 = customtkinter.CTkButton(self.header, width=100, height=58, text="JOGOS", fg_color="transparent", hover_color="#333")
        self.frame2.grid(column=2)
        self.frame2.place(relx=0.7)

        self.frame3 = customtkinter.CTkButton(self.header, width=100, height=58, text="RELATÓRIOS", fg_color="transparent", hover_color="#333")
        self.frame3.grid(column=3)
        self.frame3.place(relx=0.8)

        user_image = customtkinter.CTkImage(Image.open(file_path + "/white_user.png"), size=(26, 26))
        
        self.frame4 = customtkinter.CTkButton(self.header, width=50, height=50, fg_color="transparent", text='', hover_color="#333", corner_radius=100, border_width=.5, border_color="#fff", image=user_image)
        self.frame4.grid(column=4)
        self.frame4.place(relx=.92)

        #Content
        self.content = customtkinter.CTkFrame(self, fg_color="#EDEDED", height=580, corner_radius=0)
        self.content.pack(fill='both', pady=20)
        
        #Edição Section
        self.edit_section = customtkinter.CTkFrame(self.content, width=366.66, height=580, corner_radius=30)
        self.edit_section.grid(column=0, row=0)

        self.edit_header = customtkinter.CTkLabel(self.edit_section, height=50, width=366.66, text="RELATÓRIOS", fg_color="#D51130", text_color="#fff", corner_radius=10)
        self.edit_header.grid(column=0, row=0)

        self.edit_sub_header = customtkinter.CTkFrame(self.edit_header, height=20, fg_color="#fff", width=370, corner_radius=0)
        self.edit_sub_header.grid(column=0, row=1)

        self.edit_content = customtkinter.CTkFrame(self.edit_section, height=500, width=366.66, fg_color="#fff", corner_radius=0)
        self.edit_content.grid(column=0, row=2)

        current_item = 0
        current_sound = 0
        cor = "#fff"
        value = ""
        for i in range(1, 6):
            for j in range(1, 5):
                button_number = (i - 1) * 4 + j
                if current_item == 13:
                    button_number = 0

                if current_item <= 12:
                    cor = "#FF4500"
                    value = f"se Quad{button_number} entao \n"
                    button_name = f"self.edit_button_{button_number}"

                    button_text = f"Quad {button_number} \n"
                else:
                    cor = "#6495ED"
                    value = f"\tmostrar({current_sound}) \n"
                    current_sound += 1
                    button_name = f"self.edit_button_{button_number}"

                    button_text = f"Som {current_sound}"

                command_lambda = lambda val=value: self.insert_code(val)

                setattr(self, button_name, customtkinter.CTkButton(self.edit_content, width=50, height=50, text=button_text, fg_color=cor, hover_color="#333", command=command_lambda))
                getattr(self, button_name).grid(column=3)

                relx_value = (j - 1) * 0.2 + 0.1
                rely_value = (i - 1) * 0.15

                getattr(self, button_name).place(relx=relx_value, rely=rely_value)

                current_item += 1

        
        #Programação em blocos Section
        self.block_programming_section = customtkinter.CTkFrame(self.content, width=366.66, height=580)
        self.block_programming_section.grid(column=1, row=0)

        self.block_programming_header = customtkinter.CTkLabel(self.block_programming_section, height=50, fg_color="#fff", width=366.66, text="Jogo 2", text_color="#111")
        self.block_programming_header.grid(column=0, row=0)

        self.block_programming_content = customtkinter.CTkFrame(self.block_programming_section, height=500, width=366.66, fg_color="#fff", corner_radius=0)
        self.block_programming_content.grid(column=0, row=1)

        #Play Section
        self.play_section = customtkinter.CTkFrame(self.content, width=366.66, height=580)
        self.play_section.grid(column=2, row=0)

        self.play_section_header = customtkinter.CTkFrame(self.play_section, height=50, width=366.66, corner_radius=0, fg_color="#fff")
        self.play_section_header.pack(fill='both')
        self.play_section_header.grid(column=0, row=0)

        self.play_section_header_btn = customtkinter.CTkButton(self.play_section_header, width=60, height=40, fg_color="#D51130", text="Criar", corner_radius=20, hover_color="#333", command=self.generate_code)
        self.play_section_header_btn.grid(column=0, row=0)

        self.play_section_sub_header = customtkinter.CTkFrame(self.play_section, height=40, fg_color="#CDCBCB", width=366.66, corner_radius=0)
        self.play_section_sub_header.grid(column=0, row=1)

        play_image = customtkinter.CTkImage(Image.open(file_path + "/triangle.png"), size=(26, 26))

        self.play_section_sub_header_btn = customtkinter.CTkButton(self.play_section_sub_header, width=60, height=40, text="", fg_color="transparent", corner_radius=20, hover_color="#333", image=play_image, command=self.run_compiler)
        self.play_section_sub_header_btn.grid(column=0, row=0)

        self.play_section_content_header = customtkinter.CTkFrame(self.play_section, height=460, width=366.66, fg_color="#fff", corner_radius=0)
        self.play_section_content_header.grid(column=0, row=2)

    def insert_code(self, value):
        self.code.append(value)
        self.create_new_frame(str(value))

    def generate_code(self):
        with open("src\games/codigo.txt", "w") as arquivo:
            for i in range(len(self.code)):
                arquivo.write(self.code[i])

    def run_compiler(self):
        os.system('python src\\qal\\qal.py src\\games\\codigo.txt')

if __name__ == "__main__":
    app = App()
    app.mainloop()