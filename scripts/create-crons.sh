#!/bin/bash

echo 'Adding cron jobs...'

#cron file into temp cron
crontab -l > temp_cron

#add custom cron header 
echo "\n\#-MJMONITOR START-\n" >> temp_cron

if [ $? -eq 0 ]; then
    #install new cron file
    echo "*/1 * * * * sh $(pwd)/scripts/cron/tempcheck.sh" >> temp_cron
    #add custom cron header end
    echo "\n#-MJMONITOR END-\n" >> temp_cron
    crontab temp_cron
    rm temp_cron
    echo -e "\033[0;32m Cron jobs added successfuly"
else
    #return error message if it fails
    rm temp_cron
    echo -e "\033[0;31m Error: cron jobs could not be added"
fi