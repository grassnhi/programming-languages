# dictionary = {key: expression for (key, value) in iterable}

cities_inF = {"New York": 32, 'Boston': 79, "LA": 100}

cities_inC = {key: round((value - 32)*(5/9)) for (key, value) in cities_inF.items()}
print(cities_inC)


# dictionary = {key: expression for (key, value) in iterable if conditional}

weather = {"NY": "snowing", 'Boston': "sunny", 'LA': "sunny", 'Chicago': "cloudy"}

sunny_weather = {key: value for (key, value) in weather.items() if value == "sunny"}
print(sunny_weather)


# dictionary = {key: (if/else) for (key, value) in iterable}

cities = {"New York": 32, 'Boston': 79, "LA": 100}

desc_cities = {key: ("WARM" if value >= 40 else "COLD") for (key, value) in cities.items()}
print(desc_cities)


# dictionary = {key: function(value) for (key, value) in iterable}

def check_temp(value):
    if value >= 70:
        return "HOT"
    elif 69 >= value >= 40:
        return "WARM"
    else:
        return "COLD"

cities = {"New York": 32, 'Boston': 79, "LA": 100}

desc_cities = {key: check_temp(value) for (key, value) in cities.items()}
print(desc_cities)
