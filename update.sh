#!/bin/bash
pkill -f notbeheeyem
git pull origin master
nohup node bot.js notbeheeyem &>../notbeheeyem-log.txt &