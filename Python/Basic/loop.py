rows = int(input('How many rows?: '))
columns = int(input('How many column?:'))
symbol = input('Enter a symbol to use: ')

for i in range(rows):
    for j in range(columns):
        print(symbol, end = " ") # print in 1 line
    print() # new line

while True:
    name = input("Enter your name: ")
    if name != "":
        break

phone = "123-456-7890"
for i in phone:
    if i == "-":
        continue
    print(i, end = "") # print in 1 line

for i in range(1, 21):
    if i == 13:
        pass # skip 13
    else:
        print(i)