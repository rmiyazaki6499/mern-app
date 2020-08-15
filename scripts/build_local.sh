#!/bin/sh
git pull origin master
npm install
cd client
npm install
npm run-script build
cd ..
npm start
