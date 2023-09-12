def add(num1, num2):
    sum = num1 + num2
    return sum

print(add(1, 2))

def add(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

print(add(1, 2, 3, 4, 5))

def add(*stuff):
    sum = 0
    stuff[0] = 0 # error!!! => cannot change
    stuff = list(stuff) # stuff cannot be changed but list can
    stuff[0] = 0
    for i in stuff:
        sum += i
    return sum

print(add(1, 2, 3, 4, 5))