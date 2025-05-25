import React from 'react';
import WorkCard from './WorkCard';

const experiences = [
  {
    title: 'Full-stack Web Developer',
    company: 'Sightcall',
    duration: '04/2022 - 06/2024 (2 years and 2 months)',
    location: 'Boulogne-Billancourt, France',
    description: [
      "Developed and tested new features to enhance the company's SaaS solutions.",
      'Worked in a Test-Driven Development (TDD) environment.',
      'Integrated third-party services like Sharepoint and Google Drive.',
      'Engaged in backporting and refactoring legacy code.',
      'Participated in an Agile setup with bi-weekly sprints.',
    ],
    stack: {
      Frontend: ['Ember.js', 'React.js', 'Bootstrap', 'XState', 'Jest'],
      Backend: ['Ruby on Rails', 'Sidekiq', 'RSpec', 'JSONAPI-Resources'],
      Databases: ['MariaDB', 'Redis', 'ElasticSearch'],
      Others: ['Bash', 'Docker', 'Jenkins', 'Gitlab CI/CD'],
    },
  },
  {
    title: 'React Frontend Developer',
    company: 'MBN-TECH',
    duration: '10/2021 - 04/2022 (6 months)',
    location: 'Bucharest, Romania',
    description: [
      'Developed a Next.js webapp for a multi-blockchain DeFi platform.',
      'Integrated web3.js to interact with Ethereum smart contracts.',
      'Researched DeFi concepts like token creation and staking.',
    ],
    stack: {
      Frontend: ['TypeScript', 'React.js', 'Next.js', 'Material-UI'],
    },
  },
  {
    title: 'Customer Excellence Support Analyst',
    company: 'VTEX',
    duration: '11/2020 - 08/2021 (9 months)',
    location: 'Bucharest, Romania',
    description: [
      'Supported partners in building e-commerce sites on the VTEX platform.',
      'Addressed technical and business requirements for clients.',
      'Managed SEO optimization, debugging, and project management.',
      'Gained knowledge about the digital commerce industry.',
    ],
    stack: {
      Frontend: ['HTML', 'CSS', 'JavaScript'],
    },
  },
  {
    title: 'Junior Data Scientist',
    company: 'GfK',
    duration: '10/2018 - 11/2020 (2 years)',
    location: 'Bucharest, Romania',
    description: [
      'Projects ranged from Test and Control studies (that measure advertisement effectiveness using geographic experiments) to more complex ones such as Marketing Mix Modelling studies (which help clients understand the impact of their advertising spend and forecast future marketing campaign performance).',
      'Developed and automated tasks using custom scripts.',
      'Followed and modified pre-made scripts.',
      'Gathered, cleaned, and analyzed large datasets.',
      'Wrote technical documentation and trained team members.',
    ],
    stack: {
      Programming: ['R', 'Python', 'SPSS', 'VBA', 'BASH', 'SQL'],
      Tools: ['GfK StarTrack'],
    },
  },
];

const WorkSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-full">
      <h1 id="work" className="text-5xl font-bold mb-14">
        Work
      </h1>

      {experiences.map((exp, index) => (
        <WorkCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default WorkSection;
