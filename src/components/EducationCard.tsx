import React from 'react';

interface EducationProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string[];
}

const EducationCard: React.FC<EducationProps> = ({
  degree,
  institution,
  duration,
  location,
  description,
}) => {
  return (
    <div className="bg-secondary-color w-11/12 md:w-4/5 lg:w-1/2 m-6 px-4 md:px-16 py-8 text-white rounded-lg border border-purple-700 shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{degree}</h3>
      <p className="text-lg text-gray-300">{institution}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="text-sm text-gray-400">{location}</p>

      <ul className="mt-4 list-disc pl-6 text-gray-300">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
