import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts/', {
          headers: auth ? {
            'Authorization': `Token ${auth.token}`
          } : {}
        });
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts. Please try again later.');
      }
    };

    fetchPosts();
  }, [auth]);

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>Blog Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="post-card" 
            onClick={() => handlePostClick(post.id)}
          >
            {post.image && (
              <div className="post-image">
                <img src={post.image_url} alt={post.title} />
              </div>
            )}
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 150)}...</p>
              <div className="post-meta">
                <span>Posted by: {post.author_username}</span>
                <span>Date: {new Date(post.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
