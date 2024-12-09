#!/bin/bash

# Stop and remove containers, networks, volumes, and images created by docker-compose
docker-compose down

# Remove all dangling images
docker rmi -f $(docker images -q)

# Recreate and start containers in detached mode
docker-compose up --force-recreate -d
