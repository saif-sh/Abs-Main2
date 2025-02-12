import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { Navbar, Footer } from "../components";
import { careersData } from "../constants";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("title");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleToggleExpand = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const filteredCareers = careersData.filter((career) => {
    if (filterType === "title") {
      return career.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterType === "location") {
      return career.location.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const defaultEmailBody = `Dear Hiring Manager,

I am interested in applying for the position of ${
    selectedJob ? selectedJob.title : "[Job Title]"
  }. Please find my resume attached to this email.

Thank you for considering my application.

Sincerely,
[Your Name]`;

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0 min-h-screen flex flex-col">
      <div className="w-full flex-grow">
        {/* Navbar */}
        <motion.div
          className={`${styles.paddingX} ${styles.flexCenter}`}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Navbar />
        </motion.div>

        {/* Page Header */}
        <motion.div
          className="py-10 flex justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold text-black">Explore Careers</h1>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          className="container mx-auto px-2 py-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center justify-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <input
              type="text"
              placeholder="Search careers..."
              className="border border-gray-300 rounded-md px-8 py-2 w-full lg:h-12 focus:outline-none focus:ring-2 focus:ring-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={filterType}
              onChange={handleFilterChange}
              className="ml-4 border border-gray-300 rounded-md px-4 py-2 lg:h-12 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="title">Title</option>
              <option value="location">Location</option>
            </select>
          </motion.div>

          {/* Careers Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredCareers.map((career, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
                variants={cardVariants}
              >
                <h2 className="text-xl font-bold mb-3 text-black">
                  {career.title}
                </h2>
                <JobDetails
                  description={career.description}
                  qualification={career.qualification}
                  location={career.location}
                  onToggleExpand={() => handleToggleExpand(career)}
                />
                <a
                  href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(
                    career.title
                  )}&body=${encodeURIComponent(
                    defaultEmailBody.replace("[Job Title]", career.title)
                  )}`}
                  className="block mt-4 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Footer />
      </motion.div>

      {/* Job Modal */}
      {modalOpen && selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setModalOpen(false)}
          defaultEmailBody={defaultEmailBody}
        />
      )}
    </div>
  );
};

const JobDetails = ({ description, qualification, location, onToggleExpand }) => {
  const req = description.trim() || "Requirements not specified";
  const qual = qualification ? qualification.trim() : "Qualifications not specified";

  // Truncate if too long
  const truncatedReq = req.length > 50 ? req.slice(0, 50) : req;
  const truncatedQual = qual.length > 50 ? qual.slice(0, 50) : qual;

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-600">Requirements:</h3>
      <p className="text-gray-600 mb-3">
        {truncatedReq}...
        <button
          className="text-black ml-2 hover:underline"
          onClick={onToggleExpand}
        >
          Read More
        </button>
      </p>
      <h3 className="text-lg font-medium text-gray-600">Qualifications:</h3>
      <p className="text-gray-600 mb-3">
        {truncatedQual}...
        <button
          className="text-black ml-2 hover:underline"
          onClick={onToggleExpand}
        >
          Read More
        </button>
      </p>
      <p className="text-gray-700 font-medium">Location: {location}</p>
    </div>
  );
};

const JobModal = ({ job, onClose, defaultEmailBody }) => {
  const req = job.description.trim() || "Requirements not specified";
  const qual = job.qualification ? job.qualification.trim() : "Qualifications not specified";

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg w-11/12 max-w-2xl relative"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">{job.title}</h2>

        <h3 className="text-lg font-medium text-gray-600">Requirements:</h3>
        <p className="text-gray-600 mb-3">{req}</p>

        <h3 className="text-lg font-medium text-gray-600">Qualifications:</h3>
        <p className="text-gray-600 mb-3">{qual}</p>

        <p className="text-gray-700 font-medium mb-4">Location: {job.location}</p>

        <a
          href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(
            job.title
          )}&body=${encodeURIComponent(
            defaultEmailBody.replace("[Job Title]", job.title)
          )}`}
          className="block mt-4 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Apply Now
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CareersPage;
