from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from models.status.statusCrud import StatusCrud
from models.status.statusSchema import  Status
from services.database import get_db

router = APIRouter()


@router.get("/statuses", response_model=List[Status])
async def get_all_statuses(db: Session = Depends(get_db)):
    statuses = StatusCrud(db).get_all_statuses()
    return statuses


@router.post("/statuses", response_model=Status)
async def create_status(status: Status, db: Session = Depends(get_db)):
    db_status = StatusCrud(db).create_status(status)
    return db_status


@router.get("/statuses/{status_id}", response_model=Status)
async def get_status_by_id(status_id: int, db: Session = Depends(get_db)):
    db_status = StatusCrud(db).get_status_by_id(status_id)
    if db_status is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Status not found")
    return db_status


@router.put("/statuses/{status_id}", response_model=Status)
async def update_status(status_id: int, status: Status, db: Session = Depends(get_db)):
    db_status = StatusCrud(db).get_status_by_id(status_id)
    if db_status is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Status not found")
    db_status = StatusCrud(db).update_status(status_id, status)
    return db_status


@router.delete("/statuses/{status_id}", response_model=Status)
async def delete_status(status_id: int, db: Session = Depends(get_db)):
    db_status = StatusCrud(db).get_status_by_id(status_id)
    if db_status is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Status not found")
    db_status = StatusCrud(db).delete_status(status_id)
    return db_status
