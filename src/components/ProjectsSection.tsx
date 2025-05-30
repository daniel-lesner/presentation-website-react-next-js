import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import GithubIcon from '@/components/GithubIcon';

const images = [
  '/pulmo-rehab-1.jpeg',
  '/pulmo-rehab-2.jpeg',
  '/pulmo-rehab-3.jpeg',
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSwipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(i => (i + 1) % images.length),
    onSwipedRight: () =>
      setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1)),
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center text-white w-full">
      <div className="flex flex-col items-center justify-center p-8 w-full">
        <h1 id="projects" className="text-5xl font-bold mb-14">
          Projects
        </h1>

        <h1 className="text-4xl text-zinc-400 mb-1 md:mb-14">Pulmo Rehab</h1>

        <div className="relative w-full max-w-3xl mx-auto">
          <div {...carouselSwipeHandlers} className="overflow-hidden relative">
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
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full"
            onClick={() =>
              setCurrentIndex(prevIndex =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
          >
            ❮
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full"
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
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 bg-secondary-color w-11/12 md:w-4/5 lg:w-1/2 px-4 md:px-16 py-8 justify-self-center text-white rounded-lg border border-purple-700 shadow-lg">
        <div className="md:flex-1">
          <h3 className="text-3xl font-semibold mb-4">Pulmo Rehab</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-secondary-color font-medium shadow-md">
              Ruby on Rails
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-secondary-color font-medium shadow-md">
              Ember.js
            </span>
            <span className="px-4 py-2 rounded-full bg-primary-color text-sm text-secondary-color font-medium shadow-md">
              PostgreSQL
            </span>
          </div>

          <p className="text-gray-300 text-md leading-relaxed mb-8">
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

        <div className="mt-4 ml-2 md:mt-0 self-center">
          <a
            className="inline-block whitespace-nowrap bg-white text-secondary-color font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
