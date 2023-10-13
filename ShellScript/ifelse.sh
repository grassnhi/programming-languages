#!/bin/bash

num=300

# if [ $num -eq 200 ]
# if [ ! $num -eq 200 ]
if [ ! $num -gt 200 ]
then 
    echo "The condition is true."
else
    echo "The variable does not equal to 200."
fi 

# if [ -f ~\myfile ]
# if [ -d ~\myfile ]
then
    echo "The file exists."
else
    echo "The file does not exist."
fi

# command=/usr/bin/htop
command=htop

# if [ -f $command ]
# if [ -f /usr/bin/htop ]
if command -v command   # normal command not txt command -> command check for the existed of a command
then    
    echo "$command is available, let's run it..."
else
    echo "$command is NOT available, installing it..."
    # sudo apt update && sudo apt install -y htop
    sudo apt update && sudo apt install -y $command
fi 

$command

if [ ${1,,} = nhi ];    # takes an argument, converts it to lowercase
then 
    echo "Oh, :>"
elif [ ${1,,} = help ];
then
    echo "Hi, :>"
else
    echo "Uhuh..."
fi

