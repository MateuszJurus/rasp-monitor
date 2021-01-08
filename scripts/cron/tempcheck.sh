#!/bin/bash

temperature='/logs/temperature.log'
#Check device temp with current date every minute
echo $(date +"%d-%m-%Y %T"), `vcgencmd measure_temp` >> $PWD'/..'$temperature
