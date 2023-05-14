from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import mapped_column
from utils.BaseDb import Base


class StatusDB(Base):
    __tablename__ = "status"

    id = mapped_column(Integer, primary_key=True, index=True)
    label = mapped_column(String, index=True)

