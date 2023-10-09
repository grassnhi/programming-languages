from tkinter import *

def submit():
    # print(listbox.get(listbox.curselection()))
    
    food = [] # for mode = multiple
    for index in listbox.curselection():
        food.insert(index, listbox.get(index))

    for index in food:
        print(index)

def add():
    listbox.insert(listbox.size(), entry.get())
    listbox.config(height=listbox.size())

def delete():
    # listbox.delete(listbox.curselection())
    for index in reversed(listbox.curselection()):
        listbox.delete(index)
    listbox.config(height=listbox.size())

window = Tk()

listbox = Listbox(window,
                  bg="#f7ffde",
                  font=("Constantia", 20),
                  width=12,
                  selectmode=MULTIPLE)
listbox.pack()

listbox.insert(1, "pizza")
listbox.insert(2, "pasta")
listbox.insert(3, "bread")
listbox.insert(4, "salad")

listbox.config(height=listbox.size())

entry = Entry(window)
entry.pack()

submit_button = Button(window, text="submit", command=submit)
submit_button.pack()

add_button = Button(window, text="add", command=add)
add_button.pack()

delete_button = Button(window, text="delete", command=delete)
delete_button.pack()

window.mainloop()
