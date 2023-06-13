from sqlalchemy.orm import Session
from typing import List

from src.schemas.offre_schemas import OffreCreate, OffreUpdate
from src.models.offre_model import Offre


def get_offres(db: Session, skip: int = 0, limit: int = 100) -> List[Offre]:
    return db.query(Offre).offset(skip).limit(limit).all()


def create_offre(db: Session, offre: OffreCreate) -> Offre:
    db_offre = Offre(**offre.dict())
    db.add(db_offre)
    db.commit()
    db.refresh(db_offre)
    return db_offre


def get_offre_by_id(db: Session, offre_id: int) -> Offre:
    return db.query(Offre).get(offre_id)


def update_offre_by_id(db: Session, offre_id: int, offre: OffreUpdate) -> Offre:
    db_offre = get_offre_by_id(db, offre_id)
    for field, value in offre.dict(exclude_unset=True).items():
        setattr(db_offre, field, value)
    db.commit()
    db.refresh(db_offre)
    return db_offre


def delete_offre_by_id(db: Session, offre_id: int) -> dict:
    db_offre = get_offre_by_id(db, offre_id)
    db.delete(db_offre)
    db.commit()
    return {"message": "Offre deleted"}


def get_offre_by_libelle(db: Session, libelleOffre: str) -> Offre:
    return db.query(Offre).filter(Offre.libelleOffre == libelleOffre).first()


def update_offre_by_libelle(db: Session, libelleOffre: str, offre: OffreUpdate) -> Offre:
    db_offre = get_offre_by_libelle(db, libelleOffre)
    for field, value in offre.dict(exclude_unset=True).items():
        setattr(db_offre, field, value)
    db.commit()
    db.refresh(db_offre)
    return db_offre


def delete_offre_by_libelle(db: Session, libelleOffre: str) -> dict:
    db_offre = get_offre_by_libelle(db, libelleOffre)
    db.delete(db_offre)
    db.commit()
    return {"message": "Offre deleted"}
