#!/bin/bash

mvn generate-sources
gulp prepare-jsweet-candy
cd packaging/jsweet-candy

if [ ! -z $1 ] 
then 
    mvn $1
else
    echo "mvn goal must be supplied as an argument (for instance 'install' or 'deploy')"
fi

