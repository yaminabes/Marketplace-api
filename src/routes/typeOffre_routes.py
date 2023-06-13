from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session

from src.schemas.typeOffre_schemas import TypeOffreCreate, TypeOffre
from src.crud.typeOffre_crud import (
    get_typeOffres,
    create_typeOffres,
    get_typeOffre_by_id,
    update_typeOffre_by_id,
    delete_typeOffre_by_id,
    get_typeOffre_by_libelle,
    update_typeOffre_by_libelle,
    delete_typeOffre_by_libelle,
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


@router.post("/typeOffres/", response_model=TypeOffre)
def create_typeOffre(typeOffre: TypeOffreCreate, db: Session = Depends(get_db)):
    db_typeOffre = get_typeOffre_by_libelle(
        db, libelleTypeOffre=typeOffre.libelleTypeOffre)
    if db_typeOffre:
        raise HTTPException(status_code=400, detail="TypeOffre already exists")
    return create_typeOffres(db=db, typeOffre=typeOffre)


@router.get("/typeOffres/", response_model=list[TypeOffre])
def read_typeOffres(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    typeOffres = get_typeOffres(db, skip=skip, limit=limit)
    return typeOffres


@router.get("/typeOffres/{typeOffre_id}", response_model=TypeOffre)
def read_typeOffre(typeOffre_id: int, db: Session = Depends(get_db)):
    db_typeOffre = get_typeOffre_by_id(db, typeOffre_id=typeOffre_id)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return db_typeOffre


@router.put("/typeOffres/{typeOffre_id}", response_model=TypeOffre)
def update_typeOffre_route(
    typeOffre_id: int, typeOffre: TypeOffreCreate, db: Session = Depends(get_db)
):
    db_typeOffre = get_typeOffre_by_id(db, typeOffre_id=typeOffre_id)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return update_typeOffre_by_id(db=db, typeOffre_id=typeOffre_id, typeOffre=typeOffre)


@router.delete("/typeOffres/{typeOffre_id}")
def delete_typeOffre_route(typeOffre_id: int, db: Session = Depends(get_db)):
    db_typeOffre = get_typeOffre_by_id(db, typeOffre_id=typeOffre_id)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return delete_typeOffre_by_id(db=db, typeOffre_id=typeOffre_id)


@router.get("/typeOffres/libelle/{libelle}", response_model=TypeOffre)
def read_typeOffre_by_libelle(libelle: str, db: Session = Depends(get_db)):
    db_typeOffre = get_typeOffre_by_libelle(db, libelle=libelle)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return db_typeOffre


@router.put("/typeOffres/libelle/{libelle}", response_model=TypeOffre)
def update_typeOffre_by_libelle_route(
    libelle: str, typeOffre: TypeOffreCreate, db: Session = Depends(get_db)
):
    db_typeOffre = get_typeOffre_by_libelle(db, libelle=libelle)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return update_typeOffre_by_libelle(db=db, libelle=libelle, typeOffre=typeOffre)


@router.delete("/typeOffres/libelle/{libelle}")
def delete_typeOffre_by_libelle_route(libelle: str, db: Session = Depends(get_db)):
    db_typeOffre = get_typeOffre_by_libelle(db, libelle=libelle)
    if db_typeOffre is None:
        raise HTTPException(status_code=404, detail="TypeOffre not found")
    return delete_typeOffre_by_libelle(db=db, libelle=libelle)
