'use client'
import React, { useState } from 'react';

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Mr.R.L.Choudary',
      role: 'CEO',
      img: '/assets/emp1.webp',
      summary: 'John has over 10 years of experience in the tech industry, specializing in business strategy and leadership. Under his guidance, the company has experienced substantial growth.',
      socials: {
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Mr.Anuj',
      role: 'CTO',
      img: '/assets/emp2.webp',
      summary: 'Jane is a tech enthusiast with a strong background in software development. She leads the engineering team and is responsible for the technological direction of the company.',
      socials: {
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Mr.Sahil',
      role: 'Lead Developer',
      img: '/assets/emp3.webp',
      summary: 'Sam is a full-stack developer with a passion for creating dynamic web applications. He ensures that our projects are delivered on time and meet the highest quality standards.',
      socials: {
        instagram: 'https://instagram.com/samjohnson',
        linkedin: 'https://linkedin.com/in/samjohnson',
        twitter: 'https://twitter.com/samjohnson',
      },
    },
  ];

  return (
    <div className="team-page lg:mt-14 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">Meet Our Team</h1>
      <p className="text-lg text-center mb-8">
        Our team is composed of highly skilled and passionate professionals dedicated to building cutting-edge software solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="text-xl font-medium mb-2">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>

            {/* Show summary and social links if this member is hovered */}
            {hoveredMember === index && (
              <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-90 text-gray-800 dark:text-gray-200 p-4 rounded-lg flex flex-col items-center justify-center transition-opacity duration-300 opacity-100">
                <p className="text-gray-800 dark:text-gray-200 mb-2">{member.summary}</p>
                <div className="social-links text-center transition-transform duration-300 transform hover:scale-105">
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">Instagram</a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">LinkedIn</a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
