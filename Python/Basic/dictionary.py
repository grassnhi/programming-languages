# changeable + unordered collection of unique key: value pair

capital = {'USA': 'Washington DC',
           'India': 'New Dehli',
           'China': 'Beijing',
           'Russia': 'Moscow'}

print(capital['Russia']) # print the value of key Russia
print(capital.get('Germany')) # None
print(capital.keys())
print(capital.values())
print(capital.items()) # entire dictionary

capital.update({'Germany': 'Berlin'}) # add
capital.update({'USA': 'Las Vegas'})
capital.pop('China') # remove pair
capital.clear()

for key, value in capital.items():
    print(key, value)

