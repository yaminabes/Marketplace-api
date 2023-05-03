from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel

Base = declarative_base()

class StatusDB(Base):
    __tablename__ = "status"

    id = Column(Integer, primary_key=True, index=True)
    label = Column(String)

class Status(BaseModel):
    id: int
    label: str
