from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text

from src.database import SessionLocal

# Create router
router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/health")
def check_api_health(db: Session = Depends(get_db)):
		session_status = "up"
		try:
				result = db.execute(text('SELECT 1')).scalar()
				if result != 1:
						session_status = "down"
		except OperationalError:
				session_status = "down"

		return {"status": "up", "database": session_status}