import customtkinter as ctk
from tkcalendar import DateEntry
from tkinter import ttk
import os
from PIL import Image, ImageTk
#Criação de sessão



ctk.set_appearance_mode("light")

app = ctk.CTk()
width= app.winfo_screenwidth()               
height= app.winfo_screenheight()               
app.geometry("%dx%d" % (width, height))
app.title("Iniciar nova sessão")

frame_width = 200
frame_height = 500
x_pos = (app.winfo_screenwidth() - frame_width) // 2
y_pos = (app.winfo_screenheight() - frame_height) // 2

# Create the head_frame
head_frame = ctk.CTkFrame(app, width=width, height=90, corner_radius=0, fg_color="#D51130")
head_frame.grid(row=0, column=0, sticky="nsew")

file_path = os.path.dirname(os.path.realpath(__file__))

# Load the image and create a CTkImage
imgProfile = ctk.CTkImage(Image.open(file_path + "/assets/Group 4.png"), size=(50, 50))

# Add click function in label
def label_click():
    print("Oi")

# Add the "HOME" label
home_label = ctk.CTkLabel(
    head_frame,
    text="HOME",
    font=("Inter", 18, "bold"),
    text_color="white",
)
home_label.place(x=width - 270, y=30)  # Adjust the coordinates (x, y) as needed
home_label.configure(cursor="hand2")  # Change the cursor style

# Add the "JOGOS" label
jogos_label = ctk.CTkLabel(
    head_frame,
    text="JOGOS",
    font=("Inter", 18, "bold"),
    text_color="white",
)
jogos_label.place(x=width - 180, y=30)  # Adjust the coordinates (x, y) as needed
jogos_label.configure(cursor="hand2")  # Change the cursor style

# Add the image label
img_label = ctk.CTkLabel(head_frame, image=imgProfile, text="")
img_label.place(x=width - 90, y=20)  # Adjust the coordinates (x, y) as needed
img_label.configure(cursor="hand2")

# Lower the head_frame to the background
head_frame.lower()

# Bind click events to the labels
home_label.bind("<Button-1>", lambda event: label_click())
jogos_label.bind("<Button-1>", lambda event: label_click())
img_label.bind("<Button-1>", lambda event: label_click())

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
