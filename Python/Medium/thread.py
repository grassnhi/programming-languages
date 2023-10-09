# thread = a flow of execution -> a separate order of instructions

import threading
import time

# print(threading.active_count()) # active count of threads running in program
# print(threading.enumerate()) # list of all threads that are running

def eat_breakfast():
    time.sleep(3)
    print("You eat breakfast")

def drink_coffee():
    time.sleep(4)
    print("You drank coffee")

def study():
    time.sleep(5)
    print("You finished study")

# eat_breakfast()
# drink_coffee()
# study()
# # Sequentially => 12s to finish

x = threading.Thread(target=eat_breakfast, args=())
x.start()
# Concurrently => 5s to finish
y = threading.Thread(target=drink_coffee, args=())
y.start()
# Main thread do not need to wait around for 3 complete
z = threading.Thread(target=study, args=())
z.start()

x.join()
y.join()
z.join()
# Main thread waiting for x y z join and finish

print(threading.active_count()) # active count of threads running in program
print(threading.enumerate()) # list of all threads that are running
print(time.perf_counter())  # how long it takes calling thread as in main thread to finish its set of ins