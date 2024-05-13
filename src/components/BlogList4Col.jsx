// BlogList4Col.jsx
import React from 'react';
import BlogItem from './BlogItem';

const BlogList4Col = ({ blogs }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap mb-8 lg:scrollbar-hide]">
      {blogs.map((blog) => (
        <div key={blog.id} className="w-full sm:w-1/2 md:w-1/4 p-2 shrink-0">
          <BlogItem blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList4Col;