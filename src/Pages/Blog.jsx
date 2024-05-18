import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogList } from '../config/data';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import ReactMarkdown from 'react-markdown';

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
        <span>&larr;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <header>
            <p className="text-sm text-gray-500 font-medium mb-2">
              Published {blog.createdAt}
            </p>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img
            src={blog.cover}
            alt="cover"
            className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
          />
          <div className="prose prose-lg prose-indigo max-w-none">
            <ReactMarkdown>{blog.description}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;