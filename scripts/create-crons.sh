#!/bin/bash

#temp cron
crontab -l > temp_cron
if [ $? -eq 0 ]; then
    #install new cron file
    echo "*/1 * * * * sh $(pwd)/scripts/cron/tempcheck.sh" >> temp_cron
    crontab temp_cron
    rm temp_cron
    echo -e "\033[0;32m Cron jobs added successfuly"
else
    rm temp_cron
    echo -e "\033[0;31m Error: cron jobs could not be added"
fi