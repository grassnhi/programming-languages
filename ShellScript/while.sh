#!/bin/bash

var=1

while [ $var -le 3 ]
do
    echo $var
    var=$(($var + 1))
    sleep 0.5
done 


while [ -f  ~/testfile ]
do
    echo "The test file exists."
done

echo "As of $(date) The file no longer exists."