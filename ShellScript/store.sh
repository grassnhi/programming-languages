#!/bin/bash

# Move the update.sh script into directory user local bin
sudo mv update.sh /usr/local/bin/update

# Check the /usr/local/bin/ and we now se the update.sh
ls -l /usr/local/bin

# Change permissions to modify
sudo chown root:root /usr/local/bin/update

# Double check
ls -l /usr/local/bin/

# Simply type update to run => universal
update

# where a particular binary script /executable file happens to be
which update

# Show path
echo $path

# Getting a listing of environment variables
envn

# Add a different directory to your path variable
# Path is going to include user local bin -> all directory were already in the path
export PATH=/usr/local/bin/:$PATH

# Switch to root in order to edit update
sudo nano /usr/local/bin/update

# Switch over to root
sudo su -

# At root run:
/usr/local/bin/update

# Exit
exit