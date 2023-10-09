from tkinter import *

# widgets = GUI elements: buttons, textboxes, labels, images
# windows = serves as a container to hold or contain these widgets

window = Tk()   # instantiate an instance windows

window.geometry("420x420")  # resize

window.title("Nhi Windows") # Change windows' title

icon = PhotoImage(file='Python\GUI\logo.png') # Convert to photo image
window.iconphoto(True, icon)    # Change windows' icon

# window.config(background="black")     # Change backgrond color 
window.config(background="#65c76f")       # => Hex color picker for hex value

window.mainloop()   # place window on computer screen