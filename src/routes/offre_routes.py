from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from src.crud.offre_crud import (
    get_offres,
    create_offre,
    get_offre_by_id,
    update_offre_by_id,
    delete_offre_by_id,
    get_offre_by_libelle,
    update_offre_by_libelle,
    delete_offre_by_libelle
)
from src.database import SessionLocal
from src.schemas.offre_schemas import OffreCreate, OffreUpdate, Offre

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/offres/", response_model=List[Offre])
def get_offres_route(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    offres = get_offres(db, skip=skip, limit=limit)
    return offres


@router.post("/offres/", response_model=Offre)
def create_offre_route(offre: OffreCreate, db: Session = Depends(get_db)):
    db_offre = create_offre(db, offre)
    return db_offre


@router.get("/offres/{offre_id}", response_model=Offre)
def get_offre_by_id_route(offre_id: int, db: Session = Depends(get_db)):
    db_offre = get_offre_by_id(db, offre_id)
    if db_offre is None:
        raise HTTPException(status_code=404, detail="Offre not found")
    return db_offre


@router.put("/offres/{offre_id}", response_model=Offre)
def update_offre_by_id_route(offre_id: int, offre: OffreUpdate, db: Session = Depends(get_db)):
    db_offre = update_offre_by_id(db, offre_id, offre)
    return db_offre


@router.delete("/offres/{offre_id}")
def delete_offre_by_id_route(offre_id: int, db: Session = Depends(get_db)):
    db_offre = delete_offre_by_id(db, offre_id)
    return db_offre


@router.get("/offres/libelle/{libelleOffre}", response_model=Offre)
def get_offre_by_libelle_route(libelleOffre: str, db: Session = Depends(get_db)):
    db_offre = get_offre_by_libelle(db, libelleOffre)
    if db_offre is None:
        raise HTTPException(status_code=404, detail="Offre not found")
    return db_offre


@router.put("/offres/libelle/{libelleOffre}", response_model=Offre)
def update_offre_by_libelle_route(libelleOffre: str, offre: OffreUpdate, db: Session = Depends(get_db)):
    db_offre = update_offre_by_libelle(db, libelleOffre, offre)
    return db_offre


@router.delete("/offres/libelle/{libelleOffre}")
def delete_offre_by_libelle_route(libelleOffre: str, db: Session = Depends(get_db)):
    db_offre = delete_offre_by_libelle(db, libelleOffre)
    return db_offre
