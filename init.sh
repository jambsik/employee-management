#!/bin/bash

JM_FGRED="\e[33m"
JM_FGBLUE="\e[34m"
JM_FGGREEN="\e[32m"
JM_FGRESET="\e[0m"
DOCKER_COMPOSE_EXTRA_ARGS=""
DOCKER_SERVICE_NAME="employe-management"
DOCKER_SERVICE_AS_INSTANCE=0

usage() {
    cat <<EOM
Usage: $(basename $0) [-h] [-b] [-i] [command]
  Options:
   - h: Shows this help
   - b: Build container
   - i: Open an instance
EOM
}

while getopts ":hib" opt; do
    case $opt in
    h)
        usage
        exit 0
        ;;
    i) DOCKER_SERVICE_AS_INSTANCE=1 ;;
    b) DOCKER_COMPOSE_EXTRA_ARGS="${DOCKER_COMPOSE_EXTRA_ARGS} --build" ;;
    \?) break ;;
    esac
done

if [ -x "$(which docker-compose)" ]; then
    echo -e "${JM_FGGREEN}Docker compose already installed${JM_FGRESET}"
    docker-compose --version
else
    echo -e "${JM_FGBLUE}Installing docker-compose${JM_FGRESET}"
    sudo apt-get update -y
    sudo apt-get install -y docker-compose
    docker-compose --version
fi

if [ "$DOCKER_SERVICE_AS_INSTANCE" -eq 1 ]; then
    echo "Initializing instance..."
    docker-compose run $DOCKER_SERVICE_NAME bash
else
    echo "Initializating..."
    echo "DOCKER_COMPOSE_EXTRA_ARGS $DOCKER_COMPOSE_EXTRA_ARGS"
    docker-compose down --remove-orphans
    docker-compose up $DOCKER_COMPOSE_EXTRA_ARGS -d $DOCKER_SERVICE_NAME
    docker-compose run --service-ports --rm $DOCKER_SERVICE_NAME bash
fi
