from tkinter import *

def create_window():
    # new_window = Toplevel()
    new_window = Tk()   # independent => no link

    window.destroy()    # close out of old window

window = Tk()

Button(window, text="Create a new window", command=create_window).pack()


window.mainloop()