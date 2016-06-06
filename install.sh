#!/bin/bash

mvn generate-sources
gulp prepare-jsweet-candy
cd packaging/jsweet-candy
mvn install

