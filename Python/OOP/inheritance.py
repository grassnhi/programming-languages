class Animal:

    alive = True

    def eat(self):
        print("This animal is eating")

    def sleep(self):
        print("This animal is sleeping")

class Rabbit(Animal):
    
    def run(self):
        print("This rabbit can run")

class Fish(Animal):
    
    def swim(self):
        print("This fish can swim")

class Hawk(Animal):
    
    def fly(self):
        print("This hawk can fly")

rabbit = Rabbit()
fish = Fish()
hawk = Hawk()

# print(rabbit.alive)
# fish.eat()
# hawk.sleep()

rabbit.run()
fish.swim()
hawk.fly()