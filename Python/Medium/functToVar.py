def hello():
    print("Hello")


print(hello) # address

hi = hello # same mem address
print(hi)
hi() # like hello funct has 2 names

say = print
say("Whoa: I am so cute :3")