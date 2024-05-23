// Team.jsx
import React from 'react';

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center p-4">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'Abhinav Bhagirath',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Saif Shaikh',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Hemal Naik',
      role: 'Creative Business Head',
      image: 'https://via.placeholder.com/150',
    },

    {
      name: 'Priyanshu Rekhi',
      role: 'Human Resources',
      image: 'https://via.placeholder.com/150',
    },

  ];

  return (
    <section className="bg-[#d9d9d9] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Dream Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;