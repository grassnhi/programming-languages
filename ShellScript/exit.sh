#!/bin/bash

ls >> ls.txt    # Create ls.txt to input /save the output of ls
# Nhi

echo "The exit code for ls is: $?"

if [ $? -eq 0 ]
then 
    echo "Command run successfully."
else
    echo "Command failed." >> ls.txt
fi


# directory=Notes
directory=\Notes
# directory=/Notes

if [ -d $directory ]
then
    echo $?
    echo "The directory $directory exits."
else
    echo $?
    echo "The directory $directory doesn't exits."
fi 

echo "The exit code for this script is: $?"
    # the previous echo success -> $? = 0 

# echo "Hello :3"
# exit 1          # exit, then do not exe the lines below this
# echo $?         # when run echo $a afterthat in terminnal => $? = 1 (= exit) 

# sudo apt install notexist       # although failed
# exit 0                          # exit file
# echo $?                         # Print 0 when run :v


if [ -d $directory ]
then
    echo "The directory $directory exits."
    exit 0
else
    echo "The directory $directory doesn't exits."
    exit 1
fi 

echo "The exit code for this script is: $?"
echo "You cannot see that statement."
echo "You won't see this one either."