# Blog Platform

A modern, full-stack blogging platform built with React and Django.

## Features

- User Authentication (Register, Login, Logout)
- Create, Read, Update, Delete Blog Posts
- Image Upload Support
- Responsive Design
- User-specific Post Management
- Modern UI/UX with Animations

## Tech Stack

### Frontend
- React 18.2.0
- React Router for navigation
- Axios for API requests
- CSS Modules for styling
- Font Awesome icons

### Backend
- Django 4.2.7
- Django REST Framework
- SQLite (Development Database)
- Token Authentication
- Pillow for image processing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (3.9 or higher)
- pip (Python package manager)

### Installation

1. Clone the repository
```bash
git clone https://github.com/anurag-chandra9/blog_platform.git
cd blog_platform
```

2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will be available at:
- Frontend: http://localhost:3002
- Backend: http://localhost:8000

## API Endpoints

### Authentication
- POST /api/register/ - User registration
- POST /api/login/ - User login
- POST /api/logout/ - User logout

### Posts
- GET /api/posts/ - List all posts
- POST /api/posts/ - Create new post
- GET /api/posts/{id}/ - Retrieve post
- PUT /api/posts/{id}/ - Update post
- DELETE /api/posts/{id}/ - Delete post
- GET /api/posts/my_posts/ - List user's posts

## Azure Deployment

### Prerequisites
1. Azure Account
2. Azure CLI installed
3. Azure App Service plan
4. Azure PostgreSQL database
5. Azure Storage account for media files

### Backend Deployment

1. Create Azure resources:
```bash
# Create resource group
az group create --name blog-platform-rg --location eastus

# Create PostgreSQL server
az postgres server create --resource-group blog-platform-rg --name blog-platform-db --location eastus --admin-user myuser --admin-password mypassword --sku-name B_Gen5_1

# Create App Service plan
az appservice plan create --name blog-platform-plan --resource-group blog-platform-rg --sku B1 --is-linux

# Create backend Web App
az webapp create --resource-group blog-platform-rg --plan blog-platform-plan --name blog-platform-backend --runtime "PYTHON:3.9"
```

2. Configure environment variables:
```bash
az webapp config appsettings set --resource-group blog-platform-rg --name blog-platform-backend --settings \
    DJANGO_SETTINGS_MODULE=backend.production_settings \
    AZURE_POSTGRESQL_NAME=your_db_name \
    AZURE_POSTGRESQL_USER=your_db_user \
    AZURE_POSTGRESQL_PASSWORD=your_db_password \
    AZURE_POSTGRESQL_HOST=your_db_host \
    AZURE_STORAGE_ACCOUNT_NAME=your_storage_account \
    AZURE_STORAGE_ACCOUNT_KEY=your_storage_key \
    AZURE_STORAGE_CONTAINER_NAME=media
```

3. Deploy backend:
```bash
cd backend
az webapp up --name blog-platform-backend --runtime "PYTHON:3.9"
```

### Frontend Deployment

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Create and deploy frontend Web App:
```bash
az webapp create --resource-group blog-platform-rg --plan blog-platform-plan --name blog-platform-frontend --runtime "NODE:16-lts"

# Deploy build folder
az webapp deployment source config-zip --resource-group blog-platform-rg --name blog-platform-frontend --src build.zip
```

### Post-Deployment Steps

1. Configure custom domain (optional)
2. Set up SSL certificates
3. Configure monitoring and alerts
4. Test all functionality in production

### Monitoring

1. Enable Application Insights:
```bash
az monitor app-insights component create --app blog-platform --location eastus --resource-group blog-platform-rg
```

2. View logs:
```bash
az webapp log tail --name blog-platform-backend --resource-group blog-platform-rg
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Anurag Chandra
- LinkedIn: [anurag-chandra9](https://linkedin.com/in/anurag-chandra9)
- Email: anuragkrstm01@gmail.com

## License

This project is licensed under the MIT License.
