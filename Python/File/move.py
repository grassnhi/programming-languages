import os

source = "test.txt"
destination = "E:\\Coding\\programming-language\\Python\\Text\\test.txt"

try:
    if os.path.exists(destination):
        print("There is already a file here.")
    else:
        os.replace(source, destination)
        print(source + " was moved.")
except FileNotFoundError:
    print(source + " was not found.")