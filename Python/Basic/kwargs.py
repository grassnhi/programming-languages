def hello(**kwargs):
    print("Hello " + kwargs['first'] + " " + kwargs['last'])

hello(first = "Nhi", middle = "Nhu", last = "Nho")



def hello(**kwargs):
    print("Hello ", end=" ")
    for key, value in kwargs.items():
        print(value, end=" ")

hello(title = "Ms.", first = "Nhi", middle = "Nhu", last = "Nho")