# Utilisez l'image Python de base
FROM python:3.9

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier requirements.txt dans le conteneur
COPY requirements.txt .

# Installe les dépendances du projet
RUN pip install -r requirements.txt

# Copie le contenu du répertoire actuel dans le conteneur
COPY . .

# Expose le port 8000 pour FastAPI
EXPOSE 8000

# Commande par défaut pour exécuter l'application FastAPI
CMD ["uvicorn", "src.main:app"]