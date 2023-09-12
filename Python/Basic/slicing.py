name = "nguyen thu tien thao"
# index:     thao => -4 -3 -2 -1

first_name = name[0]
print(first_name)

first_name = name[0:4] # stop at index 4 => contain first 4 index only
print(first_name)

first_name = name[:4]
print(first_name)

last_name = name[5:]
print(last_name)

rand_name = name[0:12:1]
print(rand_name)

rand_name = name[0:12:2] # every second characters including the first
print(rand_name)

rand_name = name[0:12:3] 
print(rand_name)

rand_name = name[::3] 
print(rand_name)

reversed_name = name[::-1]
print(reversed_name)

slice = slice(7, -4) 
print(name[slice])

text = 'My name is Nhi'
print(text[slice])
