from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session

from src.schemas.status_schemas import StatutCreate, Statut
from src.crud.status_crud import (
    get_statuts,
    create_statut,
    get_statut_by_id,
    update_statut_by_id,
    delete_statut_by_id,
    get_statut_by_libelle,
    update_statut_by_libelle,
    delete_statut_by_libelle,
)
from src.database import SessionLocal

# Create router
router = APIRouter()


# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/statuts/", response_model=Statut)
def create_statut_route(statut: StatutCreate, db: Session = Depends(get_db)):
    db_statut = get_statut_by_libelle(db, libelleStatut=statut.libelleStatut)
    if db_statut:
        raise HTTPException(status_code=400, detail="Statut already exists")
    return create_statut(db=db, statut=statut)


@router.get("/statuts/", response_model=list[Statut])
def read_statuts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    statuts = get_statuts(db, skip=skip, limit=limit)
    return statuts


@router.get("/statuts/{statut_id}", response_model=Statut)
def read_statut(statut_id: int, db: Session = Depends(get_db)):
    db_statut = get_statut_by_id(db, statut_id=statut_id)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return db_statut


@router.put("/statuts/{statut_id}", response_model=Statut)
def update_statut_route(statut_id: int, statut: StatutCreate, db: Session = Depends(get_db)):
    db_statut = get_statut_by_id(db, statut_id=statut_id)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return update_statut_by_id(db=db, statut_id=statut_id, statut=statut)


@router.delete("/statuts/{statut_id}")
def delete_statut_route(statut_id: int, db: Session = Depends(get_db)):
    db_statut = get_statut_by_id(db, statut_id=statut_id)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return delete_statut_by_id(db=db, statut_id=statut_id)


@router.get("/statuts/libelle/{libelle}", response_model=Statut)
def read_statut_by_libelle(libelle: str, db: Session = Depends(get_db)):
    db_statut = get_statut_by_libelle(db, libelle=libelle)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return db_statut


@router.put("/statuts/libelle/{libelle}", response_model=Statut)
def update_statut_by_libelle_route(libelle: str, statut: StatutCreate, db: Session = Depends(get_db)):
    db_statut = get_statut_by_libelle(db, libelle=libelle)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return update_statut_by_libelle(db=db, libelle=libelle, statut=statut)


@router.delete("/statuts/libelle/{libelle}")
def delete_statut_by_libelle_route(libelle: str, db: Session = Depends(get_db)):
    db_statut = get_statut_by_libelle(db, libelle=libelle)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return delete_statut_by_libelle(db=db, libelle=libelle)
