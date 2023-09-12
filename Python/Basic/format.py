animal = "cow"
item = "moon"

print("The " + animal + " jumped over the " + item)
print("The {} jumped over the {}".format("cow", "moon"))
print("The {} jumped over the {}".format(animal, item))
print("The {0} jumped over the {1}".format(animal, item))
print("The {1} jumped over the {0}".format(animal, item))
# print("The {} jumped over the {}".format(animal = "cow", item = "moon")) # keyword argument
print("The {animal} jumped over the {item}".format(animal = "cow", item = "moon"))
print("The {item} jumped over the {animal}".format(animal = "cow", item = "moon"))

text = "The {} jumped over the {}"
print(text.format(animal, item))

name = "Nhi"
print('Hello, my name is {}'.format(name))
print('Hello, my name is {:10}. Nice to meet you!'.format(name)) 
print('Hello, my name is {:<10}. Nice to meet you!'.format(name)) 
print('Hello, my name is {:>10}. Nice to meet you!'.format(name))
print('Hello, my name is {:^10}. Nice to meet you!'.format(name))
print('Hello, my name is {name:10}. Nice to meet you!'.format(name = name))

number = 3.14159
print("The number pi is {}".format(number))
print("The number pi is {:.2f}".format(number)) # 2 digit after . of float
print("The number pi is {:.3f}".format(number))

number = 10000000
print("The number pi is {:,}".format(number)) # add comma to every thousand position vd: 1,000,000

number = 1000
print("The number pi is {:b}".format(number)) # binary
print("The number pi is {:o}".format(number)) # octal
print("The number pi is {:x}".format(number)) # hexa x = lowercase, X = uppercase
print("The number pi is {:X}".format(number))
print("The number pi is {:E}".format(number)) # scientific notation