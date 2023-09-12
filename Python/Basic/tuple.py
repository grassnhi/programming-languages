# same as list but ordered and unchangeable -> related data

student = ('Nhi', 20, 'female')
print(student.count("Nhi"))
print(student.index("female"))

for x in student:
    print(x)

if "Nhi" in student:
    print("Nhi is here.")