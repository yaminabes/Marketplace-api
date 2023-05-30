from sqlalchemy.orm import Session
from typing import List

from src.schemas.status_schemas import StatutCreate
from src.models.status_model import Statut


def get_statuts(db: Session, skip: int = 0, limit: int = 100) -> List[Statut]:
    return db.query(Statut).offset(skip).limit(limit).all()


def create_statut(db: Session, statut: StatutCreate) -> Statut:
    db_statut = Statut(libelleStatut=statut.libelleStatut)
    db.add(db_statut)
    db.commit()
    db.refresh(db_statut)
    return db_statut


def get_statut_by_id(db: Session, statut_id: int) -> Statut:
    return db.query(Statut).get(statut_id)


def update_statut_by_id(db: Session, statut_id: int, statut: StatutCreate) -> Statut:
    db_statut = get_statut_by_id(db, statut_id)
    db_statut.libelleStatut = statut.libelleStatut
    db.commit()
    db.refresh(db_statut)
    return db_statut


def delete_statut_by_id(db: Session, statut_id: int) -> dict:
    db_statut = get_statut_by_id(db, statut_id)
    db.delete(db_statut)
    db.commit()
    return {"message": "Statut deleted"}


def get_statut_by_libelle(db: Session, libelleStatut: str) -> Statut:
    return db.query(Statut).filter(Statut.libelleStatut == libelleStatut).first()


def update_statut_by_libelle(db: Session, libelleStatut: str, statut: StatutCreate) -> Statut:
    db_statut = get_statut_by_libelle(db, libelleStatut)
    db_statut.libelleStatut = statut.libelleStatut
    db.commit()
    db.refresh(db_statut)
    return db_statut


def delete_statut_by_libelle(db: Session, libelleStatut: str) -> dict:
    db_statut = get_statut_by_libelle(db, libelleStatut)
    db.delete(db_statut)
    db.commit()
    return {"message": "Statut deleted"}
