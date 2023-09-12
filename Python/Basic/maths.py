import math

pi = 3.14

print(round(pi)) # 3
print(math.ceil(pi)) # 4
print(math.floor(pi)) # 3
print(abs(pi))
print(pow(pi, 2))
print(math.sqrt(pi))

x = 1
y = 2
z = 3

print(max(x, y, z)) # 3
print(min(x, y, z)) # 1

'''
# Built-in Functions
- Numeric Operations: abs(x) / pow(x, y) / round(x[, ndigits])
- Mathematical Functions: max(iterable, *args, key) / min(iterable, *args, key) / sum(iterable, start=0)
- Type Conversion: int(x) / float(x) / str(x) / list(iterable) / tuple(iterable) / dict(**kwargs)
- String Operations: len(s) / str.upper() / str.lower() / str.strip() / str.split([sep[, maxsplit]]) / str.join(iterable)
- Input/Output: print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) / input(prompt='')
- List Operations: list.append(x) / list.extend(iterable) / list.pop([index]) / list.remove(x) / list.sort(key=None, reverse=False) / list.reverse()
- Control Flow: range(start, stop[, step]) / len(iterable)
- Boolean and Comparison: bool(x) / all(iterable) / any(iterable)
'''