import customtkinter
import os
from PIL import Image, ImageTk

file_path = os.path.dirname(os.path.realpath(__file__))

def buttonCallBack():
    print("Cliquei")

app = customtkinter.CTk()
app.title("Home")

width= app.winfo_screenwidth()               
height= app.winfo_screenheight()               
app.geometry("%dx%d" % (width, height))

# Create the head_frame
head_frame = customtkinter.CTkFrame(app, width=width, height=90, corner_radius=0, fg_color="#D51130")
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
home_label.place(x=width - 270, y=30)  # Adjust the coordinates (x, y) as needed
home_label.configure(cursor="hand2")  # Change the cursor style

# Add the "JOGOS" label
jogos_label = customtkinter.CTkLabel(
    head_frame,
    text="JOGOS",
    font=("Inter", 18, "bold"),
    text_color="white",
)
jogos_label.place(x=width - 180, y=30)  # Adjust the coordinates (x, y) as needed
jogos_label.configure(cursor="hand2")  # Change the cursor style

# Add the image label
img_label = customtkinter.CTkLabel(head_frame, image=imgProfile, text="")
img_label.place(x=width - 90, y=20)  # Adjust the coordinates (x, y) as needed
img_label.configure(cursor="hand2")

# Lower the head_frame to the background
head_frame.lower()

# Bind click events to the labels
home_label.bind("<Button-1>", lambda event: label_click())
jogos_label.bind("<Button-1>", lambda event: label_click())
img_label.bind("<Button-1>", lambda event: label_click())

def search_button_callback():
    print("uhum")
    search_text = search_entry.get().lower()  # Get the search text from the entry and convert to lowercase
    print(search_text)

    for widget in app.winfo_children():
        if isinstance(widget, customtkinter.CTkButton) and "buttonClient" in widget.winfo_name():
            button_text = widget.cget("text").lower()
            print(button_text)
            if search_text in button_text:
                widget.grid()
            else:
                widget.grid_remove()

# Create a new frame for the search bar, image, and button
search_frame = customtkinter.CTkFrame(app, bg_color="#EBEBEB", fg_color="#EBEBEB")
search_frame.grid(row=1, column=0, padx=width/4, pady=20, sticky="wn")

img_search = customtkinter.CTkImage(Image.open(file_path + "/assets/Vector.png"), size=(30, 30))

# Add the image label (img_label_back) to the search frame
img_label_search = customtkinter.CTkLabel(search_frame, image=img_search, text="")
img_label_search.grid(row=0, column=0, padx=0, pady=0, sticky="w")
img_label_search.configure(cursor="hand2")
img_label_search.bind("<Button-1>", lambda event: search_button_callback())


# Add the search entry to the search frame
search_entry = customtkinter.CTkEntry(
    search_frame, 
    width=300, 
    height=50,
    placeholder_text="Procurar",
    text_color="black",
    fg_color="white",
    placeholder_text_color="grey",
    corner_radius=30,
    border_color="grey"	
)
search_entry.grid(row=0, column=1, padx=10, pady=0, sticky="w")

# Add the buttonAdd to the search frame
imgAdd = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 141.png"), size=(40, 40))
buttonAdd = customtkinter.CTkButton(
    search_frame,
    width=30,
    height=30,
    image=imgAdd,
    command=buttonCallBack,
    text="",
    fg_color="#EBEBEB",
    border_color="#EBEBEB",
    text_color="#EBEBEB",
    hover_color="#EBEBEB"
)
buttonAdd.grid(row=0, column=2, padx=5, pady=0, sticky="w")

# Config button
img = customtkinter.CTkImage(Image.open(file_path + "/assets/Group 135.png"), size=(30,30))

buttonClient = customtkinter.CTkButton(
    app,
    width=800,
    height=70,
    corner_radius=30, 
    image=img,
    text="Paciente 1", 
    command=buttonCallBack, 
    border_width=2,
    fg_color="#FFFFFF", 
    border_color="#D51130",
    text_color="#000000",
    hover_color="#FFFFFF",
    anchor="w",
    compound="left",
    border_spacing=20
)


buttonClient.grid(row=2, column=0, padx=width/4, pady=20, sticky="wn")

app.grid_columnconfigure(0, weight=1)

app.mainloop()