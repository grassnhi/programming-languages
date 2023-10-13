#!/bin/bash

# echo "You entered the argument: $1"

# # Run: ./argument.sh <sth> => sth store in $1

# echo "You entered the argument: $1, $2, $3, $4"

# # Pass /etc to $1 => path wanted to ls
# ls -lh $1

# Create a variable -> set it = command 
# Wc -l => counting
lines=$(ls -lh $1 | wc -l)

if [ $# -ne 1 ]     # $# = number of arguments passed
then
    echo "This script requires exactly one directory path passed to it."
    echo "Please try again."
    exit 1
fi

# First lines not valid, so -1
echo "You have $(($lines - 1)) objects in the $1 directory."