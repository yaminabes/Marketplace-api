from sqlalchemy.orm import Session
from typing import List

from src.schemas.typeOffre_schemas import TypeOffreCreate
from src.models.typeOffre_model import TypeOffre


def get_typeOffres(db: Session, skip: int = 0, limit: int = 100) -> List[TypeOffre]:
    return db.query(TypeOffre).offset(skip).limit(limit).all()


def create_typeOffres(db: Session, typeOffre: TypeOffreCreate) -> TypeOffre:
    db_typeOffre = TypeOffre(libelleTypeOffre=typeOffre.libelleTypeOffre)
    db.add(db_typeOffre)
    db.commit()
    db.refresh(db_typeOffre)
    return db_typeOffre


def get_typeOffre_by_id(db: Session, typeOffre_id: int) -> TypeOffre:
    return db.query(TypeOffre).get(typeOffre_id)


def update_typeOffre_by_id(db: Session, typeOffre_id: int, typeOffre: TypeOffreCreate) -> TypeOffre:
    db_typeOffre = get_typeOffre_by_id(db, typeOffre_id)
    db_typeOffre.libelleTypeOffre = typeOffre.libelleTypeOffre
    db.commit()
    db.refresh(db_typeOffre)
    return db_typeOffre


def delete_typeOffre_by_id(db: Session, typeOffre_id: int) -> dict:
    db_typeOffre = get_typeOffre_by_id(db, typeOffre_id)
    db.delete(db_typeOffre)
    db.commit()
    return {"message": "TypeOffre deleted"}


def get_typeOffre_by_libelle(db: Session, libelleTypeOffre: str) -> TypeOffre:
    return db.query(TypeOffre).filter(TypeOffre.libelleTypeOffre == libelleTypeOffre).first()


def update_typeOffre_by_libelle(db: Session, libelleTypeOffre: str, typeOffre: TypeOffreCreate) -> TypeOffre:
    db_typeOffre = get_typeOffre_by_libelle(db, libelleTypeOffre)
    db_typeOffre.libelleTypeOffre = typeOffre.libelleTypeOffre
    db.commit()
    db.refresh(db_typeOffre)
    return db_typeOffre


def delete_typeOffre_by_libelle(db: Session, libelleTypeOffre: str) -> dict:
    db_typeOffre = get_typeOffre_by_libelle(db, libelleTypeOffre)
    db.delete(db_typeOffre)
    db.commit()
    return {"message": "TypeOffre deleted"}
