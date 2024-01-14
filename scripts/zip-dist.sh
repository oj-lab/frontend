#!/bin/bash

# Check dist.zip exist
if [ -f dist.zip ]; then
    rm dist.zip
fi

# Zip dist
cd dist && zip -r ../dist.zip ./*
