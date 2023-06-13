from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship

from src.database import Base

# Define TypeOffre class from Base


class TypeOffre(Base):
    __tablename__ = 'type_offres'

    idTypeOffre = Column(Integer, primary_key=True, index=True)
    libelleTypeOffre = Column(String(256), unique=True, index=True)
    dateCreationTypeOffre = Column(DateTime)
    dateEndTypeOffre = Column(DateTime)
    is_activeTypeOffre = Column(Boolean, default=True)

    # Define relationship with Offre
    # offres = relationship("Offre", back_populates="typeOffre")
