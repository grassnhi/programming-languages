import os

# path = "E:\\Coding\\programming-language\\Python\\Text\\test.txt"
path = "E:\\Coding\\programming-language\\Python\\Text"

if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
    elif os.path.isdir(path):
        print("That is a directory!")
else:
    print("This location doesn't exists!")