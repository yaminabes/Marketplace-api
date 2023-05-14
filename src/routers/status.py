from fastapi import Depends, FastAPI, HTTPException, APIRouter
from sqlalchemy.orm import Session

from models.status import statusCrud, statusModel, statusSchema 
from services.database import SessionLocal, engine

statusModel.Base.metadata.create_all(bind=engine)




# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter()

