import React, { useState } from "react";
import styles from "../style";
import { Navbar, Footer } from '../components';
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

  const filteredCareers = careersData.filter(career => {
    if (filterType === "title") {
      return career.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterType === "location") {
      return career.location.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const defaultEmailBody = `Dear Hiring Manager,

I am interested in applying for the position of ${selectedJob ? selectedJob.title : "[Job Title]"}. Please find my resume attached to this email.

Thank you for considering my application.

Sincerely,
[Your Name]`;

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0 min-h-screen flex flex-col">
      <div className="w-full flex-grow">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
        <div className="py-10 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-blue-500">Explore Careers</h1>
        </div>
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-center mb-10">
            <input
              type="text"
              placeholder="Search careers..."
              className="border border-gray-400 rounded-md px-8 py-2 w-full lg:h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={filterType}
              onChange={handleFilterChange}
              className="ml-4 border border-gray-400 rounded-md px-4 py-2 lg:h-12"
            >
              <option value="title">Title</option>
              <option value="location">Location</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-bold mb-3 text-blue-700">{career.title}</h2>
                <JobDetails
                  description={career.description}
                  location={career.location}
                  onToggleExpand={() => handleToggleExpand(career)}
                />
                <a
                  href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(career.title)}&body=${encodeURIComponent(defaultEmailBody.replace("[Job Title]", career.title))}`}
                  className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {modalOpen && (
        <JobModal 
          job={selectedJob} 
          onClose={() => setModalOpen(false)} 
          defaultEmailBody={defaultEmailBody} 
        />
      )}
    </div>
  );
};

const JobDetails = ({ description, location, onToggleExpand }) => {
  const [req = "Requirements not specified", qual = "Qualifications not specified"] = description.includes("Qualifications:")
    ? description.split("Qualifications:")
    : [description, ""];

  const truncatedReq = req.length > 50 ? req.slice(0, 50) : req;

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-600">Requirements:</h3>
      <p className="text-gray-600 mb-3">
        {truncatedReq}...
        <button className="text-blue-500 ml-2" onClick={onToggleExpand}>
          Read More
        </button>
      </p>
      <h3 className="text-lg font-medium text-gray-600">Qualifications:</h3>
      <p className="text-gray-600 mb-3">
        {qual.slice(0, 50)}...
        <button className="text-blue-500 ml-2" onClick={onToggleExpand}>
          Read More
        </button>
      </p>
      <p className="text-gray-700 font-medium">Location: {location}</p>
    </div>
  );
};

const JobModal = ({ job, onClose, defaultEmailBody }) => {
  const [req = "Requirements not specified", qual = "Qualifications not specified"] = job.description.includes("Qualifications:")
    ? job.description.split("Qualifications:")
    : [job.description, ""];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{job.title}</h2>
        
        <h3 className="text-lg font-medium text-gray-600">Requirements:</h3>
        <p className="text-gray-600 mb-3">{req}</p>
        
        <h3 className="text-lg font-medium text-gray-600">Qualifications:</h3>
        <p className="text-gray-600 mb-3">{qual}</p>
        
        <p className="text-gray-700 font-medium mb-4">Location: {job.location}</p>

        <a
          href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(defaultEmailBody.replace("[Job Title]", job.title))}`}
          className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareersPage;
