# filter (function, iterable)

friends = [("Nhi", 20),
           ("hien", 16),
           ("Minh", 13)]

age = lambda data: data[1] >= 18

drinking_buddies = list(filter(age, friends))

for i in drinking_buddies:
    print(i)