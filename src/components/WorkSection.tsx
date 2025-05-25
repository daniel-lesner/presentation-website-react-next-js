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
      'Engaged in backporting and refactoring legacy code.',
      'Integrated third-party services like Sharepoint and Google Drive.',
      'Participated in an Agile setup with bi-weekly sprints.',
    ],
    stack: {
      Frontend: ['Ember.js', 'React.js', 'Bootstrap', 'Jest', 'XState'],
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
      'Worked on a decentralized multi-blockchain application.',
      'Learnt about blockchain, smart contracts & web3.js.',
      'Worked with DeFi concepts like token creation and staking.',
    ],
    stack: {
      Frontend: ['TypeScript', 'React.js', 'Material-UI', 'Next.js'],
      Backend: ['Node.js', 'Solidity'],
    },
  },
  {
    title: 'Customer Excellence Support Analyst',
    company: 'VTEX',
    duration: '11/2020 - 08/2021 (9 months)',
    location: 'Bucharest, Romania',
    description: [
      "Supported partners in developing websites using VTEX's framework.",
      'Addressed technical and business requirements for clients.',
      'Managed SEO optimization, debugging, and project management.',
      'Gained knowledge about the digital commerce industry.',
    ],
    stack: {
      Frontend: ['HTML', 'CSS', 'JavaScript', 'VTEX IO'],
    },
  },
  {
    title: 'Junior Data Scientist',
    company: 'GfK',
    duration: '10/2018 - 11/2020 (2 years)',
    location: 'Bucharest, Romania',
    description: [
      'Worked on Test and Control studies for ad effectiveness.',
      'Developed scripts to automate tasks.',
      'Processed large databases and improved workflows.',
      'Trained colleagues and wrote technical documentation.',
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
