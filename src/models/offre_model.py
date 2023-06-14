from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship

from src.database import Base

# Define Offre class from Base
class Offre(Base):
    __tablename__ = 'offre'

    idOffre = Column(Integer, primary_key=True, index=True)
    idUser = Column(Integer, unique=False, index=True)
    libelleOffre = Column(String(256), unique=True, index=True)
    urlImage= Column(String(256), unique=True, index=True)
    dateOffre = Column(DateTime)
    descriptionOffre = Column(String(256))
    prixOffre = Column(Float)
    is_activeTypeOffre = Column(Boolean, default=True)
    idStatut =  Column(Integer, ForeignKey("statuts.idStatut"))
    idTypeOffre = Column(Integer, ForeignKey("type_offres.idTypeOffre"))
    





