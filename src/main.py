from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base

# Import Routers
from src.routes import items_routes, users_routes, typeOffre_routes, tag_routes, status_routes, offre_routes, health_routes

Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/marketplace/api/v1"
    ,title="Marketplace API"
    ,description="API pour le marketplace"
    ,version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# include routers
app.include_router(
    health_routes.router,
    tags=['Health']
)


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