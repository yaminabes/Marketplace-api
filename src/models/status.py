from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

# Classe Statut
class Statut(Base):
    __tablename__ = "statuts"

    id = Column(Integer, primary_key=True, index=True)
    libelle_statut = Column(String)

    offres = relationship("Offre", back_populates="statut") #Onetomany
