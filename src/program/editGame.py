import tkinter as tk
from tkinter import font
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
        
        self.header = customtkinter.CTkFrame(self, height=60,  fg_color="#D51130", corner_radius=0)
        self.header.pack(fill='x')

        self.frame1 = customtkinter.CTkButton(self.header, width=100, height=58, text="HOME", fg_color="#D51130", hover_color="#333")
        self.frame1.grid(row=0, column=1)
        self.frame1.place(relx=0.6)

        self.frame2 = customtkinter.CTkButton(self.header, width=100, height=58, text="JOGOS", fg_color="#D51130", hover_color="#333")
        self.frame2.grid(row=0, column=2)
        self.frame2.place(relx=0.7)

        self.frame3 = customtkinter.CTkButton(self.header, width=100, height=58, text="RELATÓRIOS", fg_color="#D51130", hover_color="#333")
        self.frame3.grid(row=0, column=3)
        self.frame3.place(relx=0.8)

        self.frame4 = customtkinter.CTkButton(self.header, width=50, height=50,  text="", fg_color="#D51130", hover_color="#333", corner_radius=100, border_width=.5, border_color="#fff")
        self.frame4.grid(row=0, column=4)
        self.frame4.place(relx=.92)


if __name__ == "__main__":
    app = App()
    app.mainloop()