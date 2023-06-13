from typing import List, Union

from pydantic import BaseModel


class TypeOffreBase(BaseModel):
    libelleTypeOffre: str


class TypeOffreCreate(TypeOffreBase):
    description: str
    # dateCreationTypeOffre: str
    # dateEndTypeOffre: str


class TypeOffre(TypeOffreBase):
    idTypeOffre: int
    # is_activeTypeOffre: bool

    class Config:
        orm_mode = True
