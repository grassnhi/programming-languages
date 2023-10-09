# Function written in 1 line using lambda keyword, accepts any number of arguments, but has only 1 expression

# def double(x):
#     return x * 2

# print(double(2))


double = lambda x:x * 2
print(double(5))

multipy = lambda x, y : x * y
print(multipy(5, 6))

add = lambda x, y, z : x + y + z
print(add(5, 6, 7))

full_name = lambda first_name, last_name : first_name + " " + last_name
print(full_name("Nguyen", "Nhi"))

age_check = lambda age : True if age >= 18 else False
print(age_check(18))