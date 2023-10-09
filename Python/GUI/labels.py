from tkinter import *

window = Tk()

photo = PhotoImage(file='Python\\GUI\\logo.png')

label = Label(window, text="Hello", 
              font=('Arial', 40, 'bold'),
              fg='#00FF00', 
              bg='black',
              relief=RAISED, # border width 1 
              bd= 10,   # border width
              padx=20,  # distance betwen text and border (x axis)
              pady=20,
              image=photo,
              compound='top')    
label.pack()    # Add label => by default at top center

# label.place(x=0, y=0)   # => set coordinates => top left corner
# label.place(x=100, y=100) 

window.mainloop()