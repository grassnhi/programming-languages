from tkinter import *

def do_sth(event):
    print("Mouse coordinates: " + str(event.x) + ", " + str(event.y))


window = Tk()

# window.bind("<Button-1>", do_sth) # left click
# window.bind("<Button-2>", do_sth)   # press in on the mouse wheel
# window.bind("<Button-3>", do_sth)   # right click
# window.bind("<ButtonRelease>", do_sth)    
# window.bind("<Enter>", do_sth)    # Enter the window
# window.bind("<Leave>", do_sth)   # Leave the window
window.bind("<Motion>", do_sth) # where the mouse moved

window.mainloop()