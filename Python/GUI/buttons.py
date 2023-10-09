from tkinter import *

window = Tk()

count = 0

def click():
    global count
    count += 1
    print(count)

photo = PhotoImage(file='Python\\GUI\logo.png')

button = Button(window,
                text="Click me :3",
                command=click,
                font=("Comic Sans", 30),
                fg="#00FF00", # foreground color = text color
                bg="black",     # => button color
                activeforeground='green',   # active.. => when click
                activebackground="white",
                state=DISABLED,     # No longer can be clicked
                image=photo,
                compound='bottom')
button.pack()

window.mainloop()