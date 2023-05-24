from fastapi import FastAPI

from src import models



from .database import SessionLocal, engine, Base

# Import Routers
from src.routes import items_routes, users_routes


Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# include routers
app.include_router(
    items_routes.router
)
app.include_router(
    users_routes.router
)