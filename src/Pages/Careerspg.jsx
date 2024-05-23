import React, { useState } from "react";
import styles from "../style";
import { Navbar, Footer } from '../components';
import { careersData } from "../constants";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("title");
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleToggleExpand = (index) => {
    setExpandedIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  const filteredCareers = careersData.filter(career => {
    if (filterType === "title") {
      return career.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterType === "location") {
      return career.location.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const defaultEmailBody = `Dear Hiring Manager,

I am interested in applying for the position of [Job Title]. Please find my resume attached to this email.

Thank you for considering my application.

Sincerely,
[Your Name]`;

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0 min-h-screen flex flex-col">
      <div className="w-full flex-grow">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
        <div className={`py-6 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} sm:mx-24 mx-6 mb-10`}>
            <div className="container mx-auto">
              <h1 className={`${styles.flexCenter} text-center text-gradient text-[52px] font-bold mb-10 lg:mb-20`}>Explore Careers</h1>
              <div className="mb-5 flex items-center">
                <input
                  type="text"
                  placeholder="Search careers..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  value={filterType}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="title">Title</option>
                  <option value="location">Location</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCareers.map((career, index) => (
                  <div key={index} className="text-decoration-none">
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-xl font-bold mb-2">{career.title}</h2>
                        <DescriptionWithReadMore
                          description={career.description}
                          maxLength={35}
                          expanded={expandedIndexes.includes(index)}
                          onToggleExpand={() => handleToggleExpand(index)}
                        />
                      </div>
                      <p className="text-gray-700 font-medium mt-4">{career.location}</p>
                      <a
                        href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(career.title)}&body=${encodeURIComponent(defaultEmailBody.replace("[Job Title]", career.title))}`}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const DescriptionWithReadMore = ({ description, maxLength, expanded, onToggleExpand }) => {
  const truncatedDescription = description.split(" ").slice(0, maxLength).join(" ");
  const isLongDescription = description.length > truncatedDescription.length;

  const handleClick = (e) => {
    e.preventDefault();
    onToggleExpand();
  };

  return (
    <div className="text-gray-600 mb-4">
      {expanded ? (
        <span>
          {description}{" "}
          <button className="text-blue-500 inline" onClick={handleClick}>
            Show Less
          </button>
        </span>
      ) : (
        <span>
          {truncatedDescription}
          {isLongDescription && (
            <button className="text-blue-500 inline" onClick={handleClick}>
              Read More
            </button>
          )}
        </span>
      )}
    </div>
  );
};

export default CareersPage;
