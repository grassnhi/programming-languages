from tkinter import *
from tkinter import colorchooser

def click():
    # color = colorchooser.askcolor()
    # print(color)
    # color_hex = color[1]
    # print(color_hex)

    # window.config(bg=color_hex)     # change background color
    window.config(bg=colorchooser.askcolor()[1])

window = Tk()

window.geometry("420x420")

button = Button(text="click me", command=click)
button.pack()

window.mainloop()