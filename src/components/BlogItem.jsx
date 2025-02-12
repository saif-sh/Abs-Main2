import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip.jsx';

const BlogItem = ({
  blog: { description, title, createdAt, authorName, authorAvatar, cover, category, id },
}) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-200"
    >
      {/* Blog Cover Image */}
      <img className="w-full h-48 object-cover" src={cover} alt="cover" />

      {/* Blog Content */}
      <div className="p-6">
        {/* Category Chip */}
        <Chip label={category} />

        {/* Blog Title */}
        <h3 className="text-xl font-bold mt-4 mb-2 text-black">{title}</h3>

        {/* Blog Description */}
        <p className="text-gray-600 line-clamp-2">{description}</p>

        {/* Footer (Author and Read More Link) */}
        <footer className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          {/* Author Info */}
          <div className="flex items-center">
            <img
              src={authorAvatar}
              alt="avatar"
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <h6 className="text-sm font-semibold text-black">{authorName}</h6>
              <p className="text-xs text-gray-500 font-medium">{createdAt}</p>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            to={`/blog/${id}`}
            className="text-sm font-semibold text-black hover:text-gray-700 transition-colors duration-300"
          >
            Read More &rarr;
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogItem;