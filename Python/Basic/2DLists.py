drink = ["coffe", "soda", "tea"]
dinner = ["pizza", "hamburger", "hotdog"]
dessert = ['cake', 'ice cream']

food = [drink, dinner, dessert] # [[], [], []] => 2D
print(food)

print(food[0]) # drink
print(food[1]) # dinner
print(food[2]) # dessert

print(food[0][0]) # coffe
print(food[1][2]) # hotdog