# Radio button -> similar to checkbox, seclect 1 from a group

from tkinter import *

food = ["pizza", "hamburger", "hotdog"]

def order():
    if(x.get() == 0):
        print("You order pizza!")
    elif(x.get() == 1):
        print("You order a hamburger!")
    elif(x.get() == 2):
        print("You order a hotdog!")
    else:
        print("huh?")

window = Tk()

pizza_image = PhotoImage(file='Python\GUI\logo.png')
ham_image = PhotoImage(file='Python\GUI\logo.png')
hotdog_image = PhotoImage(file='Python\GUI\logo.png')
food_image = [pizza_image, ham_image, hotdog_image]

x = IntVar()

for index in range(len(food)):
    radiobutton = Radiobutton(window,
                              text=food[index], # add text to radio button
                              variable=x,       # groups radio button together if share the same variable
                              value=index,      # assigns each radio button a different value
                              padx= 25,
                              font=("Impact", 20),
                              image=food_image[index],
                              compound='left',
                              indicatoron=0,    # eleminate circle indicators
                              width=375,
                              command=order)      
    radiobutton.pack(anchor=W)

window.mainloop()