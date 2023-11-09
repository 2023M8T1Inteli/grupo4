import functools
import tkinter as tk
import customtkinter

def button_callback():
    print("button pressed")


class App(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Profile")
        width = self.winfo_screenwidth()
        height = self.winfo_screenheight()
        self.geometry("%dx%d" % (width, height))
        self.configure(bg="#fff")
        self.grid_columnconfigure(0, weight=1)
        

        button = customtkinter.CTkButton(self, text="my button", command=button_callback)
        button.grid(row=0, column=0, padx=20, pady=20, sticky="ew", columnspan=2)
        checkbox_1 = customtkinter.CTkCheckBox(self, text="checkbox 1")
        checkbox_1.grid(row=1, column=0, padx=20, pady=(0, 20), sticky="w")
        checkbox_2 = customtkinter.CTkCheckBox(self, text="checkbox 2")
        checkbox_2.grid(row=1, column=1, padx=20, pady=(0, 20), sticky="w")

if __name__ == "__main__":
    app = App()
    app.mainloop()