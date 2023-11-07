import tkinter as tk
from tkinter import ttk

#window
window = tk.Tk()
window.geometry('600x400')
window.title('Lelis')

#menu
menu = tk.Menu(window)

#sub menu
file_menu = tk.Menu(menu)

window.configure(menu = menu)

#run
window.mainloop()