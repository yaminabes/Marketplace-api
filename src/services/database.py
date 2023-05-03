# from sqlalchemy import create_engine, text
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.exc import OperationalError
from logging import getLogger, Logger
# from fastapi import HTTPException, status


# Import created libs
from app.config import get_settings, Settings

# Get Settings
settings: Settings = get_settings()
logger: Logger = getLogger('mouna.services.database')
logger.setLevel(settings.log_level)


# # Service Definition
# class DatabaseService():
#     """
#     Database Service.
#     """

#     def __init__(self):
#         # Create engine
#         self.engine = create_engine(
#             settings.database_url,
#             pool_pre_ping=True,
#         )

#         # Create sessionmaker
#         self.SessionLocal = sessionmaker(
#             autocommit=False, autoflush=False, bind=self.engine
#         )

#     """
#     Init a Database Connection.
#     """
#     def init_db(self) -> None:
#         try:
#             with self.SessionLocal() as session:
#                 session.execute(text("SELECT 1"))
#         except OperationalError as e:
#             logger.exception(e)
#             raise HTTPException(
#                 status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
#                 detail="Database Service Unavailable !",
#                 headers={"WWW-Authenticate": "Bearer"},
#             )

#         """
#         Check if Database is available.
#         Return True or False
#         """
#     async def is_online(self) -> bool:
#         ping = False
#         try:
#             # Create a session to test the connection
#             session = self.SessionLocal()
#             session.execute("SELECT 1")
#             session.close()
#             ping = True
#         except OperationalError as e:
#             logger.exception(e)
#         return ping


# # Function Definition
# async def get_database_service() -> DatabaseService:
#     """
#     Get Database Service Instance.
#     """
#     db_service = DatabaseService()
#     db_service.init_db()
#     return db_service

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = settings.database_url

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
