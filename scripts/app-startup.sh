#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo 'Starting up...'
    source ./scripts/create-crons.sh
else   
    echo -e "\033[0;31m Error: cannot be started on ${OSTYPE}"
fi