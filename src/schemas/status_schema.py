from pydantic import BaseModel

class StatutBase(BaseModel):
    libelle_statut: str


class StatutCreate(StatutBase):
    pass


class Statut(StatutBase):
    id: int

    class Config:
        orm_mode = True
