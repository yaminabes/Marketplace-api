# MarketPlace aPI

## Description
API of marketplace in the neighbook project

## Prerequisites
- Docker
- Docker Compose
- Motivation

## Getting Started

### Build the Containers
To build the containers, run the following command in the project root directory:

```
docker-compose build
```

### Run the Containers
To run the containers, use the following command:

```
docker-compose up
```

### Stop the Containers
To stop the containers, use the following command:

```
docker-compose down
```

This command will start the containers defined in the docker-compose.yml file.

Reset Containers and Volumes
If you need to reset all containers and volumes on the host, you can use the following commands:

```
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume prune
```

Please note that these commands will stop and remove all running containers, delete all container images, and prune unused volumes. Use this with caution, as it will permanently delete data associated with the containers and volumes.
