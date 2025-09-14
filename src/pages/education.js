import Head from 'next/head';

const educations = [
  {
    degree: 'Masters of Science in Computer Software Engineering',
    institution: 'San Jose State University',
    location: 'San Jose, CA',
    period: 'Aug 2025 – Expected May 2027',
    courses: [
      'Enterprise Software Platforms', 
      'Data Structures and Algorithms', 
      'Database Systems', 
      'Operating Systems'
    ],
  },
  {
    degree: 'Bachelors in Electronics & Communication Engineering',
    institution: 'National Institute of Technology, Meghalaya',
    location: 'Meghalaya, India',
    period: 'Aug 2019 – Jun 2023',
    courses: [
      'Introduction to Computing', 'Computer Architecture', 'Database Management Systems', 'Computer Networks', 'Object Oriented Programming'
    ],
  }
];

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Education | Vineet</title>
      </Head>
      <div className="py-12 sm:py-20 animate-fadeIn max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Education</h1>
        <div className="relative border-l-2 border-teal-500">
          {educations.map((edu, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-teal-500 rounded-full -left-2.5 top-1 ring-4 ring-white dark:ring-slate-900"></span>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-slate-700 rounded-md flex items-center justify-center shadow-inner">
                  {/* Placeholder for university logo */}
                  <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zM12 14v6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12v6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12v6"></path></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{edu.institution}</h3>
                      <p className="text-md font-normal text-teal-500">{edu.degree}</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0 flex-shrink-0">
                      <p className="text-md font-normal text-slate-500 dark:text-slate-400">{edu.location}</p>
                      <time className="block text-sm font-normal leading-none text-slate-400 dark:text-slate-500">{edu.period}</time>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map(course => (
                        <span key={course} className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2 py-1 rounded-md">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}