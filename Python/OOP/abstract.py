# Abstract class => Prevent user from creating an object of that class => contains 1 or more abtract methods
# Abstract method => a method has a declaration but not have an implementation

from abc import ABC, abstractmethod

class Vehicles(ABC):

    @abstractmethod
    def go(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Car(Vehicles):

    def go(self):
        print("You drive the car")

    def stop(self):
        print("This car is stopped")

class Motorcycle(Vehicles):

    def go(self):
        print("You drive the motorcycle")

    def stop(self):
        print("This motorcycle is stopped")


# vehicle = Vehicles()

car = Car()
moto = Motorcycle()

car.stop()
moto.go()