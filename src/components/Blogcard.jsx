import React from 'react';
import BlogList4Col from './BlogList4Col';
import { blogList } from '../config/data';
import styles from '../style';

const HomePage = () => {
  return (
    <div className="text-center"> {/* Center align the content */}
      <h2 className={`${styles.heading2} p-2 pb-8 mx-auto sm:ml-[-30rem]`} > {/* Center align the heading with a slight left shift */}
        Our<span className='text-gradient'> Blogs</span>
      </h2>
      <div className="overflow-x-auto whitespace-nowrap mb-8">
        <BlogList4Col blogs={blogList} />
      </div>
      {/* Other home page content */}

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
