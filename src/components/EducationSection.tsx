import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    degree: 'MPhil Economics',
    institution: 'University of Cambridge',
    duration: '09/2016 - 10/2017',
    location: 'Cambridge, England',
    description: [
      'Specialised in microeconomics, macroeconomics and econometrics.',
      'Dissertation on “Inequality and its Effect on Economic Growth”.',
    ],
  },
  {
    degree: 'BSc Economics',
    institution: 'University of Essex',
    duration: '09/2011 - 06/2014',
    location: 'Colchester, England',
    description: [
      'Graduated with a First Class award, included in “Dean’s List” due to exceptional results.',
      'Specialised in calculus, statistics and econometrics.',
      'Dissertation on “The Effects of Minimum Wages in Europe”.',
    ],
  },
  {
    degree: 'General Certificate of Education',
    institution: 'Costache Negruzzi National College',
    duration: '09/2003 - 07/2011',
    location: 'Iasi, Romania',
    description: [
      'Passed the Romanian Baccalaureate with a top grade (8.6 out of 10).',
      'Scores: Mathematics (9.5), Physics (8.1), Romanian Literature (8.1).',
    ],
  },
];

const EducationSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-full">
      <h1 id="education" className="text-5xl font-bold mb-14">
        Education
      </h1>

      {educationData.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
};

export default EducationSection;
