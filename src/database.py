from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import config


SQLALCHEMY_DATABASE_URL = (
    f"{config['DATABASE']['KIND']}://"
    f"{config['DATABASE']['USERNAME']}:"
    f"{config['DATABASE']['PASSWORD']}@"
    f"{config['DATABASE']['HOST']}:"
    f"{config['DATABASE']['PORT']}/"
    f"{config['DATABASE']['DATABASE_NAME']}"
)


engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
