#!/bin/bash

#temp cron
crontab -l > temp_cron
echo "*/1 * * * * sh $(pwd)/scripts/cron/tempcheck.sh" >> temp_cron
#install new cron file
crontab temp_cron
rm temp_cron