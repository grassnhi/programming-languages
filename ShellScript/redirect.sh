#!/bin/bash

echo Hello World! > hello.txt   # overwrite to file

echo My name is NHI >> hello.txt    # append to file

# cat << EOF

# Word count:
wc -w <<< "Hello there."