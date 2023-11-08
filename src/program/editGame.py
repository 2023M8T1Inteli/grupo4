import tkinter as tk
from tkinter import font

import customtkinter
customtkinter.set_appearance_mode("System")  # Modes: "System" (standard), "Dark", "Light"
customtkinter.set_default_color_theme("blue")  # Themes: "blue" (standard), "green", "dark-blue"
class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()

        self.geometry(f"{1100}x{580}")
        self.title('Lelis')

        # Frame para a "div"
        self.div_frame = tk.Frame(self, bg='white', relief='solid', highlightbackground="red", highlightthickness=2)
        self.div_frame.pack(fill='x', ipadx=900, ipady=12)  # Define o lado esquerdo para a "div"

        # Estilo de fonte em negrito
        self.bold_font = font.nametofont("TkDefaultFont")
        self.bold_font.configure(weight='bold')

        # Label dentro da "div"
        self.test = tk.Label(self.div_frame, text="HOME", bg='white', fg="red",  font=self.bold_font)
        self.test.pack(ipadx=10, ipady=12)  # Ajuste o ipadx/ipady conforme necessário

        # Label dentro da "div"
        self.test = tk.Label(self.div_frame, text="JOGOS", bg='white', fg="red",  font=self.bold_font)
        self.test.pack(ipadx=10, ipady=12)  # Ajuste o ipadx/ipady conforme necessário

        # Label dentro da "div"
        self.test = tk.Label(self.div_frame, text="RELATÓRIOS", bg='white', fg="red",  font=self.bold_font)
        self.test.pack(ipadx=10, ipady=12)  # Ajuste o ipadx/ipady conforme necessário

        # Frame para a direita da tela
        self.right_frame = tk.Frame(self)
        self.right_frame.pack(side='right', fill='both', expand=True)

        # configure grid layout (4x4)
        self.grid_columnconfigure(1, weight=1)
        self.grid_columnconfigure((2, 3), weight=0)
        self.grid_rowconfigure((0, 1, 2), weight=1)

        # create sidebar frame with widgets
        self.sidebar = customtkinter.CTkFrame(self, width=140, corner_radius=0)
        self.sidebar.grid_rowconfigure(4, weight=1)
        self.logo_label = customtkinter.CTkLabel(self.sidebar, text="CustomTkinter", font=customtkinter.CTkFont(size=20, weight="bold"))
if __name__ == "__main__":
    app = App()
    app.mainloop()