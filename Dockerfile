# Test Stage
FROM python:3.10-slim-bullseye AS test
WORKDIR /app

# LDAP installation
RUN apt update && apt install -y python-dev libldap2-dev libsasl2-dev libssl-dev gcc build-essential

# PDM installation
RUN pip install --no-cache-dir pip setuptools wheel
RUN pip install --no-cache-dir pdm==2.1.0

# Copy Project files
COPY ./src/pyproject.toml ./
COPY ./src/pdm.lock ./

# Dependencies installation
RUN pdm install

# Copy all sources files
COPY ./src ./

# Check Syntax
RUN pdm run lint


# Production Build Stage
FROM python:3.10-slim-bullseye AS build
WORKDIR /app


# PDM installation
RUN pip install --no-cache-dir pip setuptools wheel
RUN pip install --no-cache-dir pdm==2.1.0

# Copy Project files
COPY ./src/pyproject.toml ./
COPY ./src/pdm.lock ./

# Dependencies installation for production
RUN pdm install --prod --no-lock --no-editable


# Final Stage
FROM python:3.10-slim-bullseye
WORKDIR /app

# CURL installation for healthcheck
RUN apt update && apt install curl -y && rm -rf /var/lib/apt/lists/*

# Setup dependencies folder and copy these from Build Stage
ENV PYTHONPATH=/app/pkgs
COPY --from=build /app/.venv/lib/python3.10/site-packages /app/pkgs

# Copy all sources files
COPY ./src ./

# Expose Server Port
EXPOSE 80

# Production launch command
CMD [ "python", "-m", "uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "80" ]