import React, { useState } from "react";
import styles from "../style";
import { Navbar, Footer } from '../components';
import { careersData } from "../constants";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCareers = careersData.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <input
                type="text"
                placeholder="Search careers..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCareers.map((career, index) => (
                  <a key={index} href={`mailto:jobs@abusinessstudio.com?subject=${encodeURIComponent(career.title)}&body=${encodeURIComponent(defaultEmailBody.replace("[Job Title]", career.title))}`} className="text-decoration-none">
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-cyan">
                      <h2 className="text-xl font-bold mb-2">{career.title}</h2>
                      <p className="text-gray-600 mb-4">{career.description}</p>
                      <p className="text-gray-500">{career.location}</p>
                    </div>
                  </a>
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

export default CareersPage;
