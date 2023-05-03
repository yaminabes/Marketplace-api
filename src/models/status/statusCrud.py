from sqlalchemy.orm import Session
from typing import List

from models.status.statusSchema import StatusDB, Status


class StatusCrud:
    def __init__(self, db: Session):
        self.db = db

    def get_all_statuses(self) -> List[StatusDB]:
        return self.db.query(StatusDB).all()

    def create_status(self, status: Status) -> StatusDB:
        db_status = StatusDB(**status.dict())
        self.db.add(db_status)
        self.db.commit()
        self.db.refresh(db_status)
        return db_status

    def get_status_by_id(self, status_id: int) -> StatusDB:
        return self.db.query(StatusDB).filter(StatusDB.id == status_id).first()

    def update_status(self, status_id: int, status: Status) -> StatusDB:
        db_status = self.db.query(StatusDB).filter(StatusDB.id == status_id).first()
        db_status.label = status.label
        self.db.commit()
        self.db.refresh(db_status)
        return db_status

    def delete_status(self, status_id: int) -> StatusDB:
        db_status = self.db.query(StatusDB).filter(StatusDB.id == status_id).first()
        self.db.delete(db_status)
        self.db.commit()
        return db_status
