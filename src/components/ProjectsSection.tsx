import { useState, useEffect } from 'react';
import Image from 'next/image';
import GithubIcon from '@/components/GithubIcon';

const images = [
  '/pulmo-rehab-1.jpeg',
  '/pulmo-rehab-2.jpeg',
  '/pulmo-rehab-3.jpeg',
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-white p-8">
        <h1 id="projects" className="text-5xl font-bold mb-14">
          Projects
        </h1>

        <h1 className="text-4xl text-zinc-400 mb-14">Pulmo Rehab</h1>

        <div className="relative w-full max-w-2xl mx-auto">
          <div className="overflow-hidden relative w-f60 h-64">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={256}
                    className="w-full h-64 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() =>
              setCurrentIndex(prevIndex =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
          >
            ❮
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() =>
              setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
            }
          >
            ❯
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-purple-900 w-11/12 md:w-4/5 lg:w-2/3 px-4 md:px-[150px] py-10 justify-self-center text-white rounded-lg border border-purple-700 shadow-lg">
        <div className="md:flex-1">
          <h3 className="text-2xl font-semibold mb-2">Pulmo Rehab</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-purple-900 font-medium shadow-md">
              Ruby on Rails
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-purple-900 font-medium shadow-md">
              Ember.js
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-purple-900 font-medium shadow-md">
              PostgreSQL
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Pulmo Rehab is a health platform where patients sync their smart
            watches/bracelets data for doctors to monitor and analyze. It
            enables real-time insights, helping healthcare providers track
            pulmonary health and offer personalized care.
          </p>

          <div className="location-team-wrap flex items-center space-x-8 mt-4">
            <span className="location flex items-center text-sm">
              <GithubIcon size="small" />
              <a
                className="hover:text-secondary-color ml-2"
                href="https://github.com/daniel-lesner/pulmo-rehab-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end Repository
              </a>
            </span>
            <span className="flex items-center text-sm">
              <GithubIcon size="small" />
              <a
                className="hover:text-secondary-color ml-2"
                href="https://github.com/daniel-lesner/pulmo-rehab-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end Repository
              </a>
            </span>
          </div>
        </div>

        <div className="mt-4 ml-2 md:mt-0">
          <a
            className="bg-white text-purple-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            href="https://pulmo-rehab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
