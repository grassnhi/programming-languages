#!/bin/bash

# Search for file in /etc directory, print all file of sub-directory too
find /etc -type f 

# search and redirect any error msg generate by command to /dev/null (like black hole -> wiped out)
find /etc -type f 2> /dev/null

# redirect everything to dev/null 
find /etc -type f > /dev/null

# 1 -> standard output -> do not have to type 1, just > ; 2-> standard error
find /etc -type f 1> /dev/null 

# Redirect and overwrite standard output to file.txt
find /etc -type f 1> file.txt
# But there are some error msg -> permission denied

# Show the contents of file.txt
cat file.txt

# Redirect both to a particular place
find /etc -type f &> file.txt

# Redirect both to separate places
find /etc -type f 1>find_results.txt 2>find_errors.txt
find /etc -type f >find_results.txt 2>find_errors.txt
