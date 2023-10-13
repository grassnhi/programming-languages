#!/bin/bash

# for current_number in 1 2 3 4 5 6 7 8 9 10
for n in {1..10}
do
    echo $n
    sleep 1
done

echo "This is outside of the for loop."

for file in logfiles/*.log
do
    tar -czvf $file.tar.gz $file         # create a zipe file verbose -> create a tarball or compressed file for every files in dir
done    # use to compressed a lot of files
