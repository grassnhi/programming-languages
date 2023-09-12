# index operator []

name = "grass Nhi:"

if(name[0].islower()):
    name = name.capitalize()

print(name)

first_name = name[:5].upper()
last_name = name[6:].lower() # nhi:
last_name = name[6:-1].lower() # nhi
last_character = name[-1]

print(first_name)
print(last_name)
print(last_character)