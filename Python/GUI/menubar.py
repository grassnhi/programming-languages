from tkinter import *

def open_file():
    print("Opened")

def save_file():
    print("Saved")

def quit():
    print("Quit")

def edit():
    print("Edited")

def cut():
    print("cut")

def copy():
    print("Copied")

def paste():
    print("Pasted")

window = Tk()

# image => add image to each addcommand(...image =.., compound = ...)

menubar = Menu(window)
window.config(menu=menubar)

file_menu = Menu(menubar, tearoff=0)
menubar.add_cascade(label="File", menu=file_menu)

file_menu.add_command(label="Open", command=open_file)
file_menu.add_command(label="Save", command=save_file)
file_menu.add_separator()
file_menu.add_command(label="Exit", command=quit)


edit_menu = Menu(menubar, tearoff=0, font=("MV Boli", 10))
menubar.add_cascade(label="Edit", menu=edit_menu)

edit_menu.add_command(label="Edit", command=edit)
edit_menu.add_command(label="Cut", command=cut)
edit_menu.add_command(label="Copy", command=copy)
edit_menu.add_command(label="Paste", command=paste)

window.mainloop()
