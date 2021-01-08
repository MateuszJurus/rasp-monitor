#!/bin/bash

echo 'Adding cron jobs...'

#cron file into temp cron
crontab -l > temp_cron

#add custom cron header
echo "#MJMONITOR START" >> temp_cron

if [ $? -eq 1 ]; then
    #return error message if it fails
    rm temp_cron
    echo -e "\033[0;31m Error: cron jobs could not be added"
else
    #install new cron file
    echo "*/1 * * * * sh $(pwd)/scripts/cron/tempcheck.sh $(pwd)/logs/temperature.log" >> temp_cron
    #add custom cron header end
    echo "#MJMONITOR END" >> temp_cron
    crontab temp_cron
    rm temp_cron
    echo -e "\033[0;32m Cron jobs added successfuly"
fi


