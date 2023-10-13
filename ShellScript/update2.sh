#!/bin/bash

release_file=/etc/os-release
logfile=var/log/updater.log
errorlog=var/log/updater_errors.log

# if [ -d /etc/pacman.d ]
if grep -q "Arch" $release_file     # grep -> searching plain-text data
then
    # The host is based on Arch, run the pacman upfate command
    sudo pacman -Syu 1>>$logfile 2>>$errorlog
    if [ $? -ne 0 ]
    then
        echo "An error occurred, pls check the $errorlog file."
    fi
fi

# if [ -d /etc/apt ]
# if grep -q "Ubuntu" $release_file
# if grep -q "Pop" $release_file
if grep -q "Debian" $release_file || grep -q "Ubuntu" $release_file
then
    # The host is based on Debian or Ubuntu
    # Run the apt version of the command
    sudo apt update 1>>$logfile 2>>$errorlog

    if [ $? -ne 0 ]
    then
        echo "An error occurred, pls check the $errorlog file."
    fi

    sudo apt dist-upgrade -y 1>>$logfile 2>>$errorlog

    if [ $? -ne 0 ]
    then
        echo "An error occurred, pls check the $errorlog file."
    fi
fi
