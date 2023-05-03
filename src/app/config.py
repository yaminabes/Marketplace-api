# Import standard libs
from os import getenv

# Import installed libs
from pydantic import BaseSettings
from functools import lru_cache
import ssl
import urllib3


# Configure SSL
ssl._create_default_https_context = ssl._create_unverified_context
urllib3.disable_warnings()


class Settings(BaseSettings):
    """
    Settings definition
    """
    # Application
    root_path: str = getenv("ROOT_PATH", "")
    title: str = "Marketplace of social media"
    description: str = "MarketPlace API"
    version: str = getenv("VERSION", "")
    docs_url: str = f"{root_path}/docs"
    redoc_url: str = f"{root_path}/redoc"
    openapi_url: str = f"{root_path}/openapi.json"
    env: str = getenv("ENV", "development")
    log_level: str = getenv("LOG_LEVEL", "DEBUG")
    cors_origins: str = getenv("CORS_ORIGINS", "*")

    # Database
    database_url: str = getenv("DATABASE_URL", "")
    database_db: str = getenv("DATABASE_DB", "marketplace")
    database_tables: dict = {
    }
    database_models: list = [
    ]


@lru_cache()
def get_settings():
    """
    Get settings once
    """
    return Settings()
