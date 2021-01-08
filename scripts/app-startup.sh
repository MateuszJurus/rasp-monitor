#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo 'Starting up...'
    /bin/bash ./create-crons.ssh
else   
    echo -e "\033[0;31m Error: cannot be started on ${OSTYPE}"
fi