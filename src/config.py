import os

config = {
    "DEBUG": False,
    "SECRET_KEY": os.getenv("SECRET_KEY", "your_secret_key_here"),
    "API_VERSION": "v1",
    "DATABASE": {
				"KIND": os.getenv("DB_KIND", "sqlite"), # "sqlite" or "postgresql
        "URL": os.getenv("DB_URL", "sqlite"),
        "HOST": os.getenv("DB_HOST", "localhost"),
        "PORT": os.getenv("DB_PORT", 5432),
        "DATABASE_NAME": os.getenv("DB_NAME", "my_database"),
        "USERNAME": os.getenv("DB_USERNAME", "my_username"),
        "PASSWORD": os.getenv("DB_PASSWORD", "my_password"),
        "USE_SSL": True if os.getenv("DB_USE_SSL", "").lower() == "true" else False,
    },
    "LOG_LEVEL": os.getenv("LOG_LEVEL", "info"),
    "LOG_FILE": os.getenv("LOG_FILE", "app.log"),
    "ALLOWED_ORIGINS": [
        "http://localhost",
        "http://localhost:3000",  # Example frontend URL
    ],
    "ALLOWED_METHODS": ["GET", "POST", "PUT", "DELETE"],
    "ALLOWED_HEADERS": [
        "Content-Type",
        "Authorization",
    ],
    "JWT_SECRET": os.getenv("JWT_SECRET", "your_jwt_secret_here"),
    "JWT_ALGORITHM": "HS256",
    "JWT_EXPIRATION_TIME_MINUTES": 60,
    "SMTP_SERVER": os.getenv("SMTP_SERVER", "smtp.gmail.com"),
    "SMTP_PORT": os.getenv("SMTP_PORT", 587),
    "SMTP_USERNAME": os.getenv("SMTP_USERNAME", "your_email@gmail.com"),
    "SMTP_PASSWORD": os.getenv("SMTP_PASSWORD", "your_email_password"),
    "SMTP_FROM_EMAIL": os.getenv("SMTP_FROM_EMAIL", "your_email@gmail.com"),
    "SMTP_FROM_NAME": os.getenv("SMTP_FROM_NAME", "Your App Name"),
    "EXTERNAL_API_BASE_URL": "https://api.example.com",
    "EXTERNAL_API_KEY": os.getenv("EXTERNAL_API_KEY", "your_external_api_key_here"),
    "FASTAPI": {
        "DEBUG": False,
        "HOST": os.getenv("HOST", "localhost"),
        "PORT": int(os.getenv("PORT", 8000)),
        "RELOAD": True if os.getenv("RELOAD", "").lower() == "true" else False,
        "WORKERS": int(os.getenv("WORKERS", 1)),
    },
}
