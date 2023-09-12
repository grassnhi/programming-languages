import time

for i in range(10):
    print(i) # from 0 to 9
    print(i+1)

# for i in range(50, 100 + 1, 2): # step = 2
#     print(i)

for i in "Nhi <3":
    print(i)

for second in range(10, 0, -1): # count down, step = 1
    print(second)
    time.sleep(1) # sleep 1 second each print
print("Happy New Year!")