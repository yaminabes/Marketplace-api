
# Import installed libs
from fastapi import FastAPI
from fastapi.routing import APIRoute
from fastapi.middleware.cors import CORSMiddleware
from logging import getLogger, Logger

# Import created libs
from app.config import get_settings, Settings
# from services.database import DatabaseService, get_database_service

# Import Routers
from routers import (
    informations,
    status
)

# Get Settings
settings: Settings = get_settings()
logger: Logger = getLogger('marketplace.app')
logger.setLevel(settings.log_level)

# Init Application
def custom_generate_unique_id(route: APIRoute):
    """
    Generate Custom ID for OpenAPI Specification
    """
    return f"{route.tags[0]}-{route.name}"

def create_app():
    """
    Create application FastAPI
    """
    app_tmp: FastAPI = FastAPI(
        title=settings.title,
        description=settings.description,
        version=settings.version,
        docs_url=settings.docs_url,
        redoc_url=settings.redoc_url,
        openapi_url=settings.openapi_url,
        generate_unique_id_function=custom_generate_unique_id
    )
    app_tmp.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins.split(","),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )
    return app_tmp

app: FastAPI = create_app()
logger.debug("Application Created !")

# @app.on_event("startup")
# async def startup():
#     logger.info("Database Connect !")
#     if settings.database_url != "":
#         database_service: DatabaseService = await get_database_service()
#         database_service.init_db()
#     else:
#         logger.warning("No Database URL provided !")

# Include Router
app.include_router(
    informations.router,
    tags=['Informations']
)
app.include_router(
    status.router,
    tags=['Status']
)
logger.debug("Include Router : Informations")