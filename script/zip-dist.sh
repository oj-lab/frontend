#!/bin/bash

# Check dist.zip exist
if [ -f dist.zip ]; then
    rm dist.zip
fi

# Zip dist
zip -r dist.zip dist
