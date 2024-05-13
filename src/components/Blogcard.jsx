import React from 'react';
import BlogList4Col from './BlogList4Col';
import { blogList } from '../config/data';
import styles from '../style';

const HomePage = () => {
  return (
    <div>
      <h2 className={`${styles.heading2} p-2 pb-8 ml-42`} >
        Our<span className='text-gradient'> Blogs</span>
      </h2>
      <div className="overflow-x-auto whitespace-nowrap mb-8">
        <BlogList4Col blogs={blogList} />
      </div>
      {/* Other home page content */}
    </div>
  );
};

export default HomePage;