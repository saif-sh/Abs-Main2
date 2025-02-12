import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../style";
import { Navbar, Footer } from '../components';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryButton from '../components/CategoryButton';
import { blogList } from '../config/data';

const Blogpg = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
    setSelectedCategory('all');
  };

  // Filter blogs by category
  const handleCategoryFilter = (category) => {
    if (category === 'all') {
      setBlogs(blogList);
    } else {
      const filteredBlogs = blogList.filter(
        (blog) => blog.category.toLowerCase() === category.toLowerCase()
      );
      setBlogs(filteredBlogs);
    }
    setSelectedCategory(category);
  };

  // Get unique categories from the blog list
  const categories = ['all', ...new Set(blogList.map((blog) => blog.category))];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover bg-fixed min-h-screen">
      <div className="w-full overflow-hidden">
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Navbar />
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div 
          className="container mx-auto px-4 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.div variants={fadeInUp}>
            <Header />
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeInUp}>
            <SearchBar
              value={searchKey}
              clearSearch={handleClearSearch}
              formSubmit={handleSearchBar}
              handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
          </motion.div>

          {/* Category Buttons */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            variants={staggerContainer}
          >
            {categories.map((category) => (
              <motion.div 
                key={category} 
                variants={fadeIn}
              >
                <CategoryButton
                  category={category}
                  isActive={category === selectedCategory}
                  onClick={handleCategoryFilter}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Blog List & Empty View */}
          <motion.div variants={fadeInUp}>
            {!blogs.length ? (
              <EmptyList />
            ) : (
              <BlogList blogs={blogs} />
            )}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Blogpg;
