from tkinter import *
from tkinter import filedialog


def save_file():
    file = filedialog.asksaveasfile(
        initialdir='E:\Coding\programming-language\Python',
        defaultextension=".txt",
        filetypes=(
            ("Text files", "*.txt"),
            ("HTML files", "*.html"),
            ("All files", "*.*"),
        ),
    )
    if file is None:
        return
    # filetext = str(text.get(1.0, END))
    filetext = input("Enter some text:")
    file.write(filetext)
    file.close()


window = Tk()

button = Button(text="Save as", command=save_file)
button.pack()

text = Text(
    window,
    bg="light yellow",
    font=("Ink Free", 25),
    height=8,
    width=20,
    padx=20,
    pady=20,
    fg="purple",
)
text.pack()

window.mainloop()
