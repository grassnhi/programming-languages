from tkinter import *


def submit():
    print("The temperature is: " + str(scale.get()) + " degrees C")


window = Tk()

hot_image = PhotoImage(file='Python\GUI\logo.png')
hot_label = Label(image=hot_image)
hot_label.pack()

scale = Scale(
    window,
    from_=1000,  # from = top
    to=150,
    length=600,
    orient=VERTICAL,
    font=("Consolas", 20),
    tickinterval=10,  # adds numeric indicators for value
    # showvalue=0,  # hide current value
    resolution= 5,  # increment of slider
    troughcolor='#69FAFF',
    fg='#FF1C00',
    bg = '#111111'
)
# scale.set(100)
scale.set(((scale["from"] - scale["to"]) / 2) + scale["to"]) # set default
scale.pack()

cold_image = PhotoImage(file='Python\GUI\logo.png')
cold_label = Label(image=cold_image)
cold_label.pack()

button = Button(window, text="submit", command=submit)
button.pack()

window.mainloop()
