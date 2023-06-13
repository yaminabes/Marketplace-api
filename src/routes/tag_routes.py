from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session

from src.schemas.tag_schemas import TagCreate, Tag
from src.crud.tag_crud import (
    get_tags,
    create_tags,
    get_tag_by_id,
    update_tag_by_id,
    delete_tag_by_id,
    get_tag_by_libelle,
    update_tag_by_libelle,
    delete_tag_by_libelle,
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


@router.post("/tags/", response_model=Tag)
def create_tag(tag: TagCreate, db: Session = Depends(get_db)):
    db_tag = get_tag_by_libelle(
        db, libelleTag=tag.libelleTag)
    if db_tag:
        raise HTTPException(status_code=400, detail="Tag already exists")
    return create_tags(db=db, tag=tag)


@router.get("/tags/", response_model=list[Tag])
def read_tags(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    tags = get_tags(db, skip=skip, limit=limit)
    return tags


@router.get("/tags/{tag_id}", response_model=Tag)
def read_tag(tag_id: int, db: Session = Depends(get_db)):
    db_tag = get_tag_by_id(db, tag_id=tag_id)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return db_tag


@router.put("/tags/{tag_id}", response_model=Tag)
def update_tag_route(
    tag_id: int, tag: TagCreate, db: Session = Depends(get_db)
):
    db_tag = get_tag_by_id(db, tag_id=tag_id)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return update_tag_by_id(db=db, tag_id=tag_id, tag=tag)


@router.delete("/tags/{tag_id}")
def delete_tag_route(tag_id: int, db: Session = Depends(get_db)):
    db_tag = get_tag_by_id(db, tag_id=tag_id)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return delete_tag_by_id(db=db, tag_id=tag_id)


@router.get("/tags/libelle/{libelleTag}", response_model=Tag)
def read_tag_by_libelle(libelleTag: str, db: Session = Depends(get_db)):
    db_tag = get_tag_by_libelle(db, libelleTag=libelleTag)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return db_tag


@router.put("/tags/libelle/{libelleTag}", response_model=Tag)
def update_tag_by_libelle_route(
    libelleTag: str, tag: TagCreate, db: Session = Depends(get_db)
):
    db_tag = get_tag_by_libelle(db, libelleTag=libelleTag)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return update_tag_by_libelle(db=db, libelleTag=libelleTag, tag=tag)


@router.delete("/tags/libelle/{libelleTag}")
def delete_tag_by_libelle_route(libelleTag: str, db: Session = Depends(get_db)):
    db_tag = get_tag_by_libelle(db, libelleTag=libelleTag)
    if db_tag is None:
        raise HTTPException(status_code=404, detail="Tag not found")
    return delete_tag_by_libelle(db=db, libelleTag=libelleTag)
