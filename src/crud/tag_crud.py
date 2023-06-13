from sqlalchemy.orm import Session
from typing import List

from src.schemas.tag_schemas import TagCreate
from src.models.tag_model import Tag


def get_tags(db: Session, skip: int = 0, limit: int = 100) -> List[Tag]:
    return db.query(Tag).offset(skip).limit(limit).all()


def create_tags(db: Session, tag: TagCreate) -> Tag:
    db_tag = Tag(libelleTag=tag.libelleTag)
    db.add(db_tag)
    db.commit()
    db.refresh(db_tag)
    return db_tag


def get_tag_by_id(db: Session, tag_id: int) -> Tag:
    return db.query(Tag).get(tag_id)


def update_tag_by_id(db: Session, tag_id: int, tag: TagCreate) -> Tag:
    db_tag = get_tag_by_id(db, tag_id)
    db_tag.libelleTag = tag.libelleTag
    db.commit()
    db.refresh(db_tag)
    return db_tag


def delete_tag_by_id(db: Session, tag_id: int) -> dict:
    db_tag = get_tag_by_id(db, tag_id)
    db.delete(db_tag)
    db.commit()
    return {"message": "Tag deleted"}


def get_tag_by_libelle(db: Session, libelleTag: str) -> Tag:
    return db.query(Tag).filter(Tag.libelleTag == libelleTag).first()


def update_tag_by_libelle(db: Session, libelleTag: str, tag: TagCreate) -> Tag:
    db_tag = get_tag_by_libelle(db, libelleTag)
    db_tag.libelleTag = tag.libelleTag
    db.commit()
    db.refresh(db_tag)
    return db_tag


def delete_tag_by_libelle(db: Session, libelleTag: str) -> dict:
    db_tag = get_tag_by_libelle(db, libelleTag)
    db.delete(db_tag)
    db.commit()
    return {"message": "Tag deleted"}
