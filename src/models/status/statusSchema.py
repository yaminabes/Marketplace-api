from typing import Union
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel
from sqlalchemy.orm import Mapped


#import model
from models.status.statusModel import StatusDB

Base = declarative_base()


class StatusBase(BaseModel):
    label: str

class StatusCreate(StatusDB):
    pass

class Status(StatusDB):
    id: Mapped[int]
    class Config:
        orm_mode = True
    