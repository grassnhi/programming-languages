from tkinter import *
from tkinter import messagebox

def click():
    # messagebox.showinfo(title="This is info message box", message="My name is Nhi")
    # messagebox.showwarning(title="WARNING", message="My name is Nhi")
    # messagebox.showerror(title="ERROR", message="Sth went wrong :>")
    
    # if messagebox.askokcancel(title="Ok or Cancel", message="Do you want to do this?"):
    #     print('You did :v')
    # else:
    #     print("Canceled")

    # if messagebox.askretrycancel(title="Ok or Cancel", message="Do you want to retry?"):
    #     print('Retried')
    # else:
    #     print("Canceled")

    # if messagebox.askyesno(title="Y or N", message="Do you like me :3"):
    #     print("I like Nhi")
    # else:
    #     print("whyyy????")

    # answer = messagebox.askquestion(title="Ask question", message="Do you like me?")
    # if answer == 'yes': 
    #     print("I like Nhi")
    # else:
    #     print("whyyy????")
    
    print(messagebox.askyesnocancel(title="Yes no cancel", message="Do you like me?"))


window = Tk()

button = Button(window, command=click, text='click me')
button.pack()

window.mainloop()