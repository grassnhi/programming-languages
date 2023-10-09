import time

print(time.ctime(0))    # convert a time expressed in seconds since epoch to a readable string (date and time)
                        # eposh = when computer thinks time began
print(time.ctime(1000000))  # 1 mil seconds pass this eposh

print(time.time())  # return current seconds since eposh

print(time.ctime(time.time())) # current date and time

time_object = time.localtime()
# time_object = time.gmtime()   # utc time
print(time_object)  
local_time = time.strftime("%B %d %Y %H:%M:%S", time_object)  # format
print(local_time)

time_string = "08 October, 2023"
time_object = time.strptime(time_string, "%d %B, %Y")
print(time_object)  

time_tuple = (2023, 10, 8, 18, 20, 0, 0, 0, 0)
time_string = time.asctime(time_tuple)
# time_string = time.mktime(time_tuple)
print(time_string)