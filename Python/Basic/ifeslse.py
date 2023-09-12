age = int(input("How old are you? : "))

if age == 100:
    print('You are a century old!')
elif age >= 18: 
    print('You are an adult!')
elif age == 100: # will be skipped b/c 100 >= 18
    print('You are a century old!')
elif age < 0:
    print("You haven't born yet!")
else: 
    print('You are a child!')

"""
"""
temp = int(input("Temperature? :"))

# if temp >= 0 and temp <= 30:
#     print("It is good today.")
#     print('Go outside!')
# elif temp < 0 or temp > 30:
#     print("It is bad today")
#     print('Stay inside')

if not(temp >= 0 and temp <= 30):
    print("It is bad today")
    print('Stay inside')
elif not(temp < 0 or temp > 30):
    print("It is good today.")
    print('Go outside!')