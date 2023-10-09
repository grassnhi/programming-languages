# students = ['Nhi', "Hien", "Minh"]

# students.sort()

# for i in students:
#     print(i)

# students.sort(reverse=True) # key and/or reverse

# for i in students:
#     print(i)


# students = ('Nhi', "Hien", "Minh") # tuple

# # sorted_students = sorted(students)

# sorted_students = sorted(students, reverse=True)

# for i in sorted_students:
#     print(i)

# students = [("Nhi", "20", "cute"),
#             ("Hiền", "16", "nunu"),
#             ("Minh", "13", "boy")]  # list of tuple

# # students.sort()
# age = lambda ages:ages[1] # fuction object
# students.sort(key=age, reverse=True)

# for i in students:
#     print(i)

students = (("Nhi", "20", "cute"),
            ("Hiền", "16", "nunu"),
            ("Minh", "13", "boy"))  # tuple of tuple

age = lambda ages:ages[1]
sorted_students = sorted(students, key=age)

for i in sorted_students:
    print(i)