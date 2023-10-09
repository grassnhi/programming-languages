from tkinter import *

def display():
    if(x.get() == "YES"):
        print("You agree!")
    else:
        print("You don't agree")

window = Tk()

x = StringVar()

photo = PhotoImage(file='Python\GUI\logo.png')

check_button = Checkbutton(window,
                           text="I agree to Nhi",
                           variable=x,
                           onvalue="YES",
                           offvalue="NO",
                           command=display,
                           font=("Arial", 20),
                           fg="#00FF00",
                           bg= 'black',
                           activeforeground='green',
                           activebackground='black',
                           padx=25,
                           pady=10,
                           image=photo,
                           compound='left')
check_button.pack()

window.mainloop()