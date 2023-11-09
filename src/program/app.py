import customtkinter as ctk
from tkcalendar import DateEntry
from tkinter import ttk

#Criação de sessão

ctk.set_appearance_mode("light")

app = ctk.CTk()
app.geometry("500x500")
app.title("Iniciar nova sessão")

frame_width = 200
frame_height = 500
x_pos = (app.winfo_screenwidth() - frame_width) // 2
y_pos = (app.winfo_screenheight() - frame_height) // 2

frame = ctk.CTkFrame(master=app, width=frame_width, height=frame_height)
frame.place(x=x_pos, y=y_pos)

label = ctk.CTkLabel(master=frame, text='Iniciar nova sessão', font=("Arial", 16))
label.pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Nome da sessão')
label.pack(pady=12, padx=10)

entry = ctk.CTkEntry(master=frame, placeholder_text="Nome da sessão", corner_radius=25, font=("Arial", 12))
entry.pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Data')
label.pack(pady=12, padx=10)
DateEntry(master=frame, font=("Arial", 12), date_pattern="dd/mm/yyyy", width=20, background="#D51130",
          selectbackground="#D51130").pack(pady=12, padx=10)

label = ctk.CTkLabel(master=frame, text='Hora')
label.pack(pady=12, padx=10)
time_options = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]  # Example time options
Timentry = ttk.Combobox(master=frame, values=time_options, font=("Arial", 12), state="readonly", width=20)
Timentry.pack(pady=12, padx=10)

button = ctk.CTkButton(master=frame, text='Criar sessão', fg_color="#D51130", hover_color="#E5505A", corner_radius=25)
button.pack(pady=12, padx=10)

app.mainloop()
