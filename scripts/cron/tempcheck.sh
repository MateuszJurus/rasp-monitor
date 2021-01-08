#!/bin/bash

#Check device temp with current date every minute
echo $(date +"%d-%m-%Y %T"), `vcgencmd measure_temp` >> $1
