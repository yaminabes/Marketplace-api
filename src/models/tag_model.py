from sqlalchemy import Column, Integer, String
from src.database import Base


class Tag(Base):
    __tablename__ = 'tags'

    idTag = Column(Integer, primary_key=True, index=True)
    libelleTag = Column(String(256), unique=True, index=True)
