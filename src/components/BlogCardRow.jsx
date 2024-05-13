// BlogCardRow.jsx
import React from 'react';
import BlogCard from 'BlogCard';

const BlogCardRow = ({ blogs }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap mb-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogCardRow;