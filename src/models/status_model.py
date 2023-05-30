from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship

from src.database import Base

# Define Statut class from Base
class Statut(Base):
    __tablename__ = 'statuts'

    idStatut = Column(Integer, primary_key=True, index=True)
    libelleStatut = Column(String(256), unique=True, index=True)

    # Define relationship with Offre
    offres = relationship("Offre", back_populates="statut")
