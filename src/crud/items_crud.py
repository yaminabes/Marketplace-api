from sqlalchemy.orm import Session

from src import model
from src.schemas.items_schemas import ItemCreate


def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model.Item).offset(skip).limit(limit).all()


def create_user_item(db: Session, item: ItemCreate, user_id: int):
    db_item = model.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item