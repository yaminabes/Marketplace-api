# Marketplace API

## Installation

To run this app, you need to have Docker and Docker Compose installed on your machine. If you don't have them installed, you can download them from the official websites: [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

Once you have Docker and Docker Compose installed, you can follow the steps below to launch the app:

1. Clone the repository:
```shell
git clone https://github.com/yaminabes/mouna-ecommerce-api.git
cd marketplace-api
```

2. Build the Docker images:
```shell
docker-compose -f docker-compose.dev.yml build
```

3. Install the dependencies:
```shell
docker-compose -f docker-compose.dev.yml run --service-ports --rm marketplace-api-dev pdm install
```

4. Launch the app:
```shell
docker-compose -f docker-compose.dev.yml up
```


The app should now be running and accessible at `http://localhost:8000`.

Note: The `docker-compose.dev.yml` file is used for development purposes. If you want to deploy the app to production, you should use a different configuration file (`docker-compose.yml`) and adjust the commands accordingly.
