from .settings import *
import os

DEBUG = False

ALLOWED_HOSTS = [
    os.environ.get('WEBSITE_HOSTNAME', ''),
    'blog-platform-backend.azurewebsites.net',  # Update this with your Azure backend URL
]

CSRF_TRUSTED_ORIGINS = [
    'https://blog-platform-frontend.azurewebsites.net',  # Update this with your Azure frontend URL
]

CORS_ALLOWED_ORIGINS = [
    'https://blog-platform-frontend.azurewebsites.net',  # Update this with your Azure frontend URL
]

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('AZURE_POSTGRESQL_NAME'),
        'USER': os.environ.get('AZURE_POSTGRESQL_USER'),
        'PASSWORD': os.environ.get('AZURE_POSTGRESQL_PASSWORD'),
        'HOST': os.environ.get('AZURE_POSTGRESQL_HOST'),
        'PORT': '5432',
    }
}

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files
DEFAULT_FILE_STORAGE = 'storages.backends.azure_storage.AzureStorage'
AZURE_ACCOUNT_NAME = os.environ.get('AZURE_STORAGE_ACCOUNT_NAME')
AZURE_ACCOUNT_KEY = os.environ.get('AZURE_STORAGE_ACCOUNT_KEY')
AZURE_CONTAINER = os.environ.get('AZURE_STORAGE_CONTAINER_NAME')

# Security
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
