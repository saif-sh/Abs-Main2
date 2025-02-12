import React from 'react';
import BlogList4Col from './BlogList4Col';
import { blogList } from '../config/data';
import styles from '../style';

const HomePage = () => {
  return (
    <div className="text-center py-12"> {/* Center align the content and add padding */}
      {/* Heading */}
      <h2 className={`${styles.heading2} p-2 pb-8 mx-auto sm:ml-[-30rem] text-black`}>
        Our<span className="text-black"> Blogs</span>
      </h2>

      {/* Blog List */}
      <div className="overflow-x-auto whitespace-nowrap mb-8">
        <BlogList4Col blogs={blogList} />
      </div>

      {/* Media query for mobile screens */}
      <style>
        {`
          @media (max-width: 640px) {
            h2 {
              margin-left: auto; /* Center align the heading on mobile screens */
              margin-right: auto; /* Center align the heading on mobile screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;