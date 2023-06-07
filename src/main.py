from fastapi import FastAPI

from .database import SessionLocal, engine, Base

# Import Routers
from src.routes import items_routes, users_routes, typeOffre_routes, tag_routes, status_routes, offre_routes

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
    items_routes.router,
    tags=['Items']
)
app.include_router(
    users_routes.router,
    tags=['Users']
)
app.include_router(
    typeOffre_routes.router,
    tags=['TypeOffre']
)
app.include_router(
    tag_routes.router,
    tags=['Tag']
)
app.include_router(
    status_routes.router,
    tags=['Statuts']
)
app.include_router(
    offre_routes.router,
    tags=['Offre']
)