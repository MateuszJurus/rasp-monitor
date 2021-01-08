#!/bin/bash

#temp cron
if crontab -l > temp_cron; then
    #install new cron file
    echo "*/1 * * * * sh $(pwd)/scripts/cron/tempcheck.sh" >> temp_cron
    crontab temp_cron
    rm temp_cron
    echo -e "\033[0;36m Cron jobs added"
else 
    echo -e "\033[0;31m Error: Could not add cron jobs"
fi

