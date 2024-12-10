#!/bin/bash

# Navigate to the frontend directory
cd ./frontend

# Install npm dependencies and build the project
npm install
npm install react-router-dom@6.3.0
npm run build

# Navigate back to the original directory
cd ..

# Stop and remove containers, networks, volumes, and images created by docker-compose
docker-compose down

# Remove all dangling images
docker rmi -f $(docker images -q)

# Recreate and start containers in detached mode
docker-compose up --force-recreate -d
