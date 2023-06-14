from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class OffreBase(BaseModel):
    idUser: int
    libelleOffre: str
    urlImage:Optional[str]
    dateOffre: Optional[datetime]
    descriptionOffre: Optional[str]
    prixOffre: Optional[float]
    is_activeTypeOffre: bool
    idTypeOffre: Optional[int]
    idStatut: Optional[int]


class OffreCreate(OffreBase):
    pass


class OffreUpdate(OffreBase):
    pass


class Offre(OffreBase):
    idOffre: int

    class Config:
        orm_mode = True


class OffreList(BaseModel):
    offres: List[Offre]