#!/bin/bash

echo 'Removing cron jobs...'

#cron file into temp cron
crontab -l > temp_cron

#remove all the lines between custom tags and remove temp file
sed '/#MJMONITOR START/,/#MJMONITOR END/d' temp_cron
crontab temp_cron
rm temp_cron
