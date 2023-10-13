#!/bin/bash

myname="Nhi"    # declare a variable

echo $myname    # print variable's value


hi="Hello Again"

echo $hi


myage="20"

echo "Hello, my name is $myname."
echo "I'm $myage years old."

# echo 'Hello, my name is $myname.'     # wrong
# echo 'I\'m $myage years old.'          # '..'......' wrong!


word="fun"

echo "Linux is $word."
echo "Game is $word."
echo "Sunny days is $word."


files=$(ls)     # sub-shell -> files = ouput of ls command

echo $files     # output of ls command


now=$(date)     # run date command in backgound then output->now

echo "The system time and date is: "
echo $now


echo "I was not declare username variable. But, my username is: $USER"

echo $HOME
