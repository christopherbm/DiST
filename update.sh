#!/bin/bash
echo '--- checking DiSt node_modules:'
if [ -a node_modules ]
  then 
    echo "node_modules exists"
  else 
    mkdir node_modules
fi

cd node_modules

echo '--- checking DiSt / myrs-js-core:'
if [ -a myrs-js-core ]
  then
    cd myrs-js-core
    git pull
    cd ..
  else 
    git clone https://github.com/christopherbm/myrs-js-core.git
fi