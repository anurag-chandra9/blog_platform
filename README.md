# Blog Platform

A modern blog platform built with React and Django, featuring user authentication, post management, and image upload capabilities.

## Features

- User Authentication (Register, Login, Logout)
- Create, Read, Update, Delete Blog Posts
- Image Upload Support
- Responsive Design
- User-specific Post Management
- Modern UI/UX

## Tech Stack

### Frontend
- React 18.2.0
- React Router for navigation
- Axios for API requests
- Context API for state management
- CSS Modules for styling

### Backend
- Django 4.2.7
- Django REST Framework
- SQLite (Development)
- Token Authentication
- Pillow for image processing

## Setup

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints
- GET /api/posts/ - List all posts
- POST /api/posts/ - Create a new post
- GET /api/posts/{id}/ - Retrieve specific post

## Deployment
Refer to the deployment documentation for Azure setup instructions.
