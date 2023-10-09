from tkinter import *
from tkinter import ttk

window = Tk()

notebook = ttk.Notebook(window) # widget manages a collection of windows/ display

tab1 = Frame(notebook)
tab2 = Frame(notebook)

notebook.add(tab1, text="Tab 1")
notebook.add(tab2, text="Tab 2")
notebook.pack(expand=True, fill="both")  # Expand to fill any space not otherwise used

Label(tab1, text="Hello, tab 1 is here", width=50, height=25).pack()
Label(tab2, text="Bye, tab 2 is here", width=50, height=25).pack()


window.mainloop()