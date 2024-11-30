const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const endpoints = {
    login: `${API_URL}/api/auth/login/`,
    register: `${API_URL}/api/auth/register/`,
    posts: `${API_URL}/api/posts/`,
    myPosts: `${API_URL}/api/posts/my-posts/`,
    post: (id) => `${API_URL}/api/posts/${id}/`,
};

export default API_URL;
