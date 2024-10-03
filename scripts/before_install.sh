#!/bin/bash

chown -R ubuntu:ubuntu /app/fe

# navigate to app folder
cd /app/fe

# install node and npm
apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install nodejs -y
apt-get install npm -y
apt install nginx -y
ufw allow 'Nginx HTTP'
