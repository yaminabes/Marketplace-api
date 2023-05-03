# Import installed libs
import uvicorn


if __name__ == "__main__":
    uvicorn.run(
        "app.app:app",
        host="0.0.0.0",
        port=8080,
        reload=True,
        reload_dirs=[
            "app",
            "models",
            "routers",
            "services",
            "tools"
        ],
        lifespan="on",
        log_config="log_config.yml"
    )