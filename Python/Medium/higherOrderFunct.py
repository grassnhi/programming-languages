# A function either accepts a function as argument or return a function

def loud(text):
    return text.upper()

def quiet(text):
    return text.lower()

def hello(funct):
    text = funct("hello")
    print(text)


hello(loud)
hello(quiet)


def divisor(x):
    def dividend(y):
        return y / x
    return dividend

divide = divisor(2)
print(divide(10))