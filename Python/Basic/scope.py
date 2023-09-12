name = "Grass" # global scope

def display_name():
    name = "Nhi" # local scope
    print(name)

def display():
    print(name) # print the global

display_name()
print(name)
display()