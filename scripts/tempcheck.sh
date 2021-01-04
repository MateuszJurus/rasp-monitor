#!/bin/bash

#Check device temp with current date
echo $(date +"%d-%m-%Y %T"), `vcgencmd measure_temp`";"