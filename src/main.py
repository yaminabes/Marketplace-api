from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)
):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

# Ajout de routes pour gérer les statuts

@app.post("/statuts/", response_model=schemas.Statut)
def create_statut(statut: schemas.StatutCreate, db: Session = Depends(get_db)):
    return crud.create_statut(db=db, statut=statut)

@app.get("/statuts/", response_model=list[schemas.Statut])
def read_statuts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    statuts = crud.get_statuts(db, skip=skip, limit=limit)
    return statuts

@app.get("/statuts/{statut_id}", response_model=schemas.Statut)
def read_statut(statut_id: int, db: Session = Depends(get_db)):
    db_statut = crud.get_statut(db, statut_id=statut_id)
    if db_statut is None:
        raise HTTPException(status_code=404, detail="Statut not found")
    return db_statut