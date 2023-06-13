from typing import List
from pydantic import BaseModel


class TagBase(BaseModel):
    libelleTag: str


class TagCreate(TagBase):
    descriptionTag: str


class Tag(TagBase):
    idTag: int

    class Config:
        orm_mode = True
