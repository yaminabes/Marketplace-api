from sqlalchemy.orm import Session
from . import models, schemas

def get_statut(db: Session, statut_id: int):
    return db.query(models.Statut).filter(models.Statut.id == statut_id).first()


def get_statuts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Statut).offset(skip).limit(limit).all()


def create_statut(db: Session, statut: schemas.StatutCreate):
    db_statut = models.Statut(**statut.dict())
    db.add(db_statut)
    db.commit()
    db.refresh(db_statut)
    return db_statut
