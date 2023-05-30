from typing import List, Union

from pydantic import BaseModel

class StatutBase(BaseModel):
    libelleStatut: str

class StatutCreate(StatutBase):
    pass

class Statut(StatutBase):
    idStatut: int

    class Config:
        orm_mode = True
