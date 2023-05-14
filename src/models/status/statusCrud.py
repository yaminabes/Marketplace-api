from sqlalchemy.orm import Session

from models.status.statusModel import  StatusDB
import models.status.statusSchema as Schema


def get_status(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Schema.Status).offset(skip).limit(limit).all()


def create_status(db: Session, status: Schema.StatusCreate):
    db_status = Schema.Status(**status.dict())
    db.add(db_status)
    db.commit()
    db.refresh(db_status)
    return db_status
    