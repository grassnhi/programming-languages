#!/bin/bash

release_file=/etc/os-release

# if [ -d /etc/pacman.d ]
if grep -q "Arch" $release_file     # grep -> searching plain-text data
then
    # The host is based on Arch, run the pacman upfate command
    sudo pacman -Syu
fi

# if [ -d /etc/apt ]
# if grep -q "Ubuntu" $release_file
# if grep -q "Pop" $release_file
if grep -q "Debian" $release_file || grep -q "Ubuntu" $release_file
then
    # The host is based on Debian or Ubuntu
    # Run the apt version of the command
    sudo apt update
    sudo apt dist-upgrade
fi
