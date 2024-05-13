import styles from "../style";
import { Navbar, Hero, Stats, About, Services, Testimonials, Blogcard, Footer } from '../components';
import React, { useState } from 'react';
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

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
      <div className=" w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>

          <Navbar />

        </div>
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <Header />

          {/* Search Bar */}
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          />

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                isActive={category === selectedCategory}
                onClick={handleCategoryFilter}
              />
            ))}
          </div>

          {/* Blog List & Empty View */}
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Blogpg