import tkinter as tk
from tkinter import font
from PIL import Image, ImageTk
import customtkinter
from customtkinter import *

import customtkinter
customtkinter.set_appearance_mode("System")  # Modes: "System" (standard), "Dark", "Light"
customtkinter.set_default_color_theme("blue")  # Themes: "blue" (standard), "green", "dark-blue"
class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("edit game.py")
        self.geometry(f"{1100}x{580}")
        
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

        file_path = os.path.dirname(os.path.realpath(__file__))
        user_image = customtkinter.CTkImage(Image.open(file_path + "/white_user.png"), size=(26, 26))
        
        self.frame4 = customtkinter.CTkButton(self.header, width=50, height=50, fg_color="transparent", text='', hover_color="#333", corner_radius=100, border_width=.5, border_color="#fff", image=user_image)
        self.frame4.grid(column=4)
        self.frame4.place(relx=.92)

        #Content
        self.content = customtkinter.CTkFrame(self, fg_color="#fff", height=580, corner_radius=0)
        self.content.pack(fill='both')
        
        #Edição Section
        self.edit_section = customtkinter.CTkFrame(self.content, width=366.66, height=580, corner_radius=30)
        self.edit_section.grid(column=0, row=0)

        self.edit_header = customtkinter.CTkLabel(self.edit_section, height=50, width=366.66, text="RELATÓRIOS", fg_color="#D51130", text_color="#fff", corner_radius=20)
        self.edit_header.grid(column=0, row=0)

        self.edit_content = customtkinter.CTkFrame(self.edit_section, height=500, width=366.66, fg_color="#fff", corner_radius=0)
        self.edit_content.grid(column=0, row=1)

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

        self.play_section_header = customtkinter.CTkFrame(self.play_section, height=50, width=366.66, corner_radius=0)
        self.play_section_header.pack(fill='both')
        self.play_section_header.grid(column=0, row=0)
        
        self.play_section_header_btn = customtkinter.CTkButton(self.play_section_header, width=60, height=40, fg_color="#D51130", text="Criar", corner_radius=20, hover_color="#333")
        self.play_section_header_btn.grid(column=0, row=0)

        self.play_section_sub_header = customtkinter.CTkFrame(self.play_section, height=40, fg_color="#CDCBCB", width=366.66, corner_radius=0)
        self.play_section_sub_header.grid(column=0, row=1)

        self.play_section_content_header = customtkinter.CTkFrame(self.play_section, height=460, width=366.66, fg_color="#fff", corner_radius=0)
        self.play_section_content_header.grid(column=0, row=2)

if __name__ == "__main__":
    app = App()
    app.mainloop()