# Import installed libs
from fastapi import HTTPException, status
from logging import getLogger, Logger
from botocore.client import Config
from mypy_boto3_s3.service_resource import S3ServiceResource
import boto3

# Import created libs
from app.config import get_settings, Settings


# Get Settings
settings: Settings = get_settings()
logger: Logger = getLogger('marketplace.services.s3')
logger.setLevel(settings.log_level)


# Service Definition
class S3Service():
    """
    S3 Service.
    """
    async def get_formatted_settings(self, settings: Settings) -> dict[str, str]:
        """
        Format Settings for S3.
        """
        settings_args = {
            'aws_access_key_id': settings.s3_access_key_id,
            'aws_secret_access_key': settings.s3_secret_access_key,
            'region_name': settings.s3_region
        }

        if settings.s3_url != "":
            settings_args['endpoint_url'] = settings.s3_url
            settings_args['config'] = Config(signature_version='s3v4')

        return settings_args

    async def get_s3(self, settings: Settings) -> S3ServiceResource:
        """
        Get the S3 Service Resource.
        """
        try:
            settings_args = await self.get_formatted_settings(settings=settings)
            s3: S3ServiceResource = boto3.resource('s3', **settings_args)
        except Exception as e:
            logger.exception(e)
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="S3 Service Unavailable !",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return s3

    async def is_online(self, settings: Settings) -> bool:
        """
        Check if S3 is available.
        Return True or False
        """
        ping = False
        try:
            settings_args = await self.get_formatted_settings(settings=settings)
            boto3.resource('s3', **settings_args)
            ping = True
        except Exception as e:
            logger.exception(e)
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="S3 Service Unavailable !",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return ping


# Function Definition
async def get_s3_service() -> S3Service:
    """
    Get S3 Service Instance.
    """
    return S3Service()
