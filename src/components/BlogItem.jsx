import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip.jsx';

const BlogItem = ({
  blog: { description, title, createdAt, authorName, authorAvatar, cover, category, id },
}) => {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:shadow-lg"
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
    >
      <img className="w-full h-48 object-cover" src={cover} alt="cover" />
      <div className="p-4">
        <Chip label={category} />
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
        <footer className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <div className="flex items-center">
            <img src={authorAvatar} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
            <div>
              <h6 className="text-sm font-semibold">{authorName}</h6>
              <p className="text-xs text-gray-500 font-medium">{createdAt}</p>
            </div>
          </div>
          <Link to={`/blog/${id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
            Read More &rarr;
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogItem;