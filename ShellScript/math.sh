#!/bin/bash

expr 10 + 30
expr 30 - 10
expr 30 / 10
expr 10 \* 10       # must \ before *

num1=100

echo $num1

expr $num1 + 50

num2=88
expr $num1 + $num2
