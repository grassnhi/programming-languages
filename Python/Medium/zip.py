# zip(*iterables) = aggregate elements from 2 or more iterables (list, tuples, sets,..)
# => creates a zip object with paired elements ...

usernames = ["Nhi", "Hien", "Minh"]
passwords = ("p@ssword", "nhinhi", "0209")
login = ["1011", "1221", "1214"]

# # users = zip(usernames, passwords)   # zip object
# users = list(zip(usernames, passwords))

# for i in users:
#     print(i)

# print(type(users))


# users = dict(zip(usernames, passwords))

# for key, value in users.items():
#     print(key + ": " + value)


users = zip(usernames, passwords, login)

for i in users:
    print(i)