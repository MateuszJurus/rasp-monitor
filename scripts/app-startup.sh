#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo 'Starting up...'
    echo 'Adding cron jobs...'
else   
    echo -e "\033[0;31m Error: cannot be started on ${OSTYPE}"
fi