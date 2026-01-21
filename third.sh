#!/bin/bash
# read a 
# read b
# if [ $a -gt $b ]
# then 
#   echo "$a is greater than $b"
# else
#   echo "$b is greater than $a"
# fi

file="first.sh"
if [ -f "$file" ]
then
   echo "file exists"
else
    echo "not exists"
fi