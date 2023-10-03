class Car:

    color = None


class Motorcycle:

    color = None


def change_color(vehical, color):

    vehical.color = color



car_1 = Car()
car_2 = Car()
car_3 = Car()

change_color(car_1, "red")
change_color(car_2, "white")
change_color(car_3, "blue")

print(car_1.color)
print(car_2.color)
print(car_3.color)



bike_1 = Motorcycle()

change_color(bike_1, "black")

print(bike_1.color)