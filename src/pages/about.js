import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const roles = [
  'SOFTWARE DEVELOPER',
  'SYSTEM DESIGNER',
  'PROBLEM SOLVER',
  'TRAVELER',
];

export default function AboutPage() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(false);
      }, 500); // fade duration
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>About Me | Vineet</title>
      </Head>
      <div
        className="animate-fadeIn
    flex
    items-start
    pt-12 md:pt-20
    pb-8
    overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 w-full">
          {/* Left Column */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-5xl xl:text-6xl font-bold">Hi, I’m Vineet 👋🏻</h1>
            <div className="mt-4 h-12 flex items-center justify-center lg:justify-start">
              <p
                className={`text-2xl xl:text-3xl font-semibold text-teal-500 transition-opacity duration-500 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {roles[currentRoleIndex]}
              </p>
            </div>
            <div className="mt-6 text-base text-slate-600 dark:text-slate-400 space-y-4">
              <p>
                I'm a{' '}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  software engineer
                </strong>
                ,{' '}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  system designer
                </strong>
                , and certified overthinker 🤓. I specialize in building{' '}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  scalable backend systems
                </strong>{' '}
                and enjoy turning chaos into{' '}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  clean architecture
                </strong>{' '}
                (while secretly hoping my code doesn’t spontaneously explode in production 💥).
              </p>
              <p>
                I believe great software comes from <em>curiosity</em>, <em>creativity</em>, and just
                the right amount of panic before a deadline. When I’m not busy chasing bugs or
                refactoring things I wrote at 2 AM, you can find me exploring new technologies,
                brainstorming ambitious ideas, and celebrating those rare moments when{' '}
                <em>everything works perfectly on the first run</em>.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                View My Projects
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/5 flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/IMG_7780.jpg"
                alt="Vineet"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="mt-8 flex space-x-6">
              <a
                href="https://www.linkedin.com/in/vineet-malewar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/vintu2001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:vineet.connects1@gmail.com"
                aria-label="Email"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
