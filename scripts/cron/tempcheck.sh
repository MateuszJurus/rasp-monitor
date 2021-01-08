#!/bin/bash

#TODO PASS A PATH INTO FUNCTION AS AN ARGUMENT
check_temp () {
    #Check device temp with current date every minute
    echo $(date +"%d-%m-%Y %T"), `vcgencmd measure_temp` >> $1
}
