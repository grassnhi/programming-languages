# daemond thread => run in the background, not important for program to run

import threading
import time

def timer():
    print()
    count = 0
    while True:
        time.sleep(1)
        count += 1
        print("logged in for: ", count, " seconds")

# x = threading.Thread(target=timer)
# x.start()   # concurrently
# # thread timer run anyway :v while main end :v

x = threading.Thread(target=timer, daemon=True)
x.start()  
# Can interrupt using crtl C

x.setDaemon(True)
print(x.isDaemon())

answer = input("Exit?")