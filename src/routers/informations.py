# Import installed libs
from fastapi import Depends, APIRouter
from logging import getLogger, Logger

# Import created libs
from app.config import get_settings, Settings


# Get Settings
settings: Settings = get_settings()
logger: Logger = getLogger('marketplace.routers.informations')
logger.setLevel(settings.log_level)


# Create router
router = APIRouter()


# Route definition
@router.get("/", response_model=dict[str, str])
async def description(settings: Settings = Depends(get_settings)):
    """
    Get description about this API
    """
    return {
        "root_path": settings.root_path,
        "main_documentation": settings.docs_url,
        "recovery_documantation": settings.redoc_url,
        "openapi_config": settings.openapi_url,
        "title": settings.title,
        "description": settings.description,
        "version": settings.version
    }