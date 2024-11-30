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
