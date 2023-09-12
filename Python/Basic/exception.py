# numerator = int(input("Enter a number to divide: "))
# denominator = int(input("Enter a number to divide by: "))
# result = numerator / denominator # if denominator = 0 ? => exception
# print(result)

# try:
#     numerator = int(input("Enter a number to divide: "))
#     denominator = int(input("Enter a number to divide by: "))
#     result = numerator / denominator # if denominator = 0 ? => exception
#     print(result)
# except ZeroDivisionError:
#     print("You can't divide by zero!")
# except ValueError: # if input is not int
#     print("Enter only number plz")
# except Exception: # Handle exception
#     print("Something wrong :(")

try:
    numerator = int(input("Enter a number to divide: "))
    denominator = int(input("Enter a number to divide by: "))
    result = numerator / denominator # if denominator = 0 ? => exception
except ZeroDivisionError as e:
    print(e)
    print("You can't divide by zero!")
except ValueError as e: # if input is not int
    print(e)
    print("Enter only number plz")
except Exception as e: # Handle exception
    print(e)
    print("Something wrong :(")
else:
    print(result)
finally:
    print("This will always execute.")