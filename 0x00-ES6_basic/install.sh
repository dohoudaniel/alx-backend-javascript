#!/usr/bin/env bash
# This script installs NodeJS, and other installations needed for this project.
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
npm install --save-dev jest
