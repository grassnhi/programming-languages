#!/bin/bash

logfile=job_results.log

echo "The script ran at the following time: $(date)" > $logfile


# SCHEDULING    
# at 14:46 -f ./schedule.sh

# SEE What In Scheduling Queue
# atq

# DELETE
# atrm <id>     # => atrm 3