food = ['pizza', 'hamburger', 'hotdog', 'spaghetti']

# print(food)
# print(food[0])
# print(food[1])
# print(food[2])
# print(food[3])

# food[0] = 'sushi'
# print(food[0])

for x in food:
    print(x)

food.append("ice cream")
print(food)

food.remove('hotdog')
print(food)

food.pop()
print(food)

food.insert(0, "cake")
print(food)

food.sort()
print(food)

food.clear()
print(food)