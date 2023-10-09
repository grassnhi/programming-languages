from tkinter import *

# entry widget = textbox accepting a single line of user input

def submit():
    username = entry.get()
    print("Hello " + username)
    entry.config(state=DISABLED)

def delete():
    entry.delete(0, END)

def backspace():
    entry.delete(len(entry.get())-1, END)


window = Tk()

entry = Entry(window,
              font=("Arial", 50),
              fg="#00FF00",
              bg='black',
              show="*") # display * when typing
entry.insert(0, "Enter my name hehe :>")    # default text
entry.pack(side=LEFT)
# entry.config(state=DISABLED)

submit_button = Button(window, text="Submit", command=submit)
submit_button.pack(side=RIGHT)

delete_button = Button(window, text="Delete", command=delete)
delete_button.pack(side=RIGHT)

backspace_button = Button(window, text="Bbackspace", command=backspace)
backspace_button.pack(side=RIGHT)

window.mainloop()