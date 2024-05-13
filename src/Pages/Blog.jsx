import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogList } from '../config/data';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      navigate('/'); // Redirect to the home page if the blog post is not found
    }
  }, [id, navigate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-gray-500 font-medium text-sm mb-4 block">
        <span>&larr;</span>
        <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="max-w-3xl mx-auto">
          <header>
            <p className="text-sm text-gray-500 font-medium">Published {blog.createdAt}</p>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" className="w-full h-96 object-cover rounded-lg mb-4" />
          <p className="text-gray-700 leading-relaxed">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;