import Head from 'next/head';

const experiences = [
  {
    role: 'Software Development Engineer - I',
    company: 'Amazon',
    location: 'Hyderabad, India',
    period: 'Dec 2024 - Jul 2025',
    description: [
      'Delivered Instant Bank Discount feature by integrating multiple client APIs with two-step verification, increasing flight bookings by ~65% and reducing incorrect payment cases by 23%.',
      'Integrated RedBus API into Amazon Pay, automating database updates to reduce "No Bus Found" errors by ~80% and eliminating manual intervention.',
      'Contributed significantly to configuration migration from ASSPL to APIPL, optimizing infrastructure and deployments, achieving $228K annual cost savings.',
      'Upgraded Node.js version and modernized EC2 infrastructure, improving system stability and security, reducing API latency by ~30%, and increasing deployment efficiency by ~40%.',
      'Built custom AWS CloudWatch dashboards and alarms, enabling real-time system observability, which reduced incident response time by 35% and improved service uptime by 20%.'
    ]
  },
  {
    role: 'Software Development Engineer - I',
    company: 'Brane Enterprises',
    location: 'Bengaluru, India',
    period: 'Jun 2023 - Nov 2024',
    description: [
      'Led the development of scalable data processing pipelines using Apache Flink, integrating Kafka connectors to handle millions of events per day with sub-second latency, improving real-time analytics efficiency by ~40%.',
      'Optimized complex database queries, enhancing query performance, reducing data storage costs, and improving overall efficiency by 40%.',
      'Integrated a third-party payment gateway into the existing microservices architecture, enabling real-time transaction processing with 99.99% uptime and support for over 2k concurrent payment requests.',
      'Reduced production issues by 40% for critical modules by performing comprehensive end-to-end testing and achieving 95% unit test coverage using JUnit.'
    ]
  },
  {
    role: 'Software Development Intern',
    company: 'Studio Technologies',
    location: 'Mumbai, India',
    period: 'May 2022 – Jul 2022',
    description: [
      'Worked on ETL(Extract, Transform and Load) and Data Pipelines with Shell, Airflow and Kafka.',
      'Actively contributed to the design and implementation of RESTful API endpoints for the Customer Satisfaction Module, enhancing customer feedback mechanisms and reporting capabilities.'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience | Vineet</title>
      </Head>
      <div className="py-12 sm:py-20 animate-fadeIn max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Work Experience</h1>
        <div className="relative border-l-2 border-teal-500">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-teal-500 rounded-full -left-2.5 top-1 ring-4 ring-white dark:ring-slate-900"></span>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{exp.company}</h3>
                    <p className="text-md font-normal text-teal-500">{exp.role}</p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-md font-normal text-slate-500 dark:text-slate-400">{exp.location}</p>
                    <time className="block text-sm font-normal leading-none text-slate-400 dark:text-slate-500">{exp.period}</time>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-base font-normal text-slate-600 dark:text-slate-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}